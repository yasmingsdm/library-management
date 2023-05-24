const jwt = require('jsonwebtoken')

const { hashingPassword, comparePassword } = require("../helpers/hashPassword")
const User = require("../models/users")
const dev = require('../config/config')
const { sendEmailWithNodeMailer } = require('../helpers/email')
const Book = require('../models/books')

const signUpUser = async (req, res)=>{
    try{
        const {name, email, password, username} = req.body
       
        if(!name || !email || !password || !username){
            return  res.status(404).json({message: 'Some information is missingg'})
        }
        if(password.length < 8){
            return  res.status(400).json({message: 'Your password must have at least 8 characteres'})
        }
        const emailExists = await User.findOne({email})
        if(emailExists){
            return  res.status(400).json({message: 'You already have an account here'})
        }
        const alreadyAnUser = await User.findOne({username})
        if(alreadyAnUser){
            return  res.status(400).json({message: 'You already have an account here'})
        }
        const hashedPassword = await hashingPassword(password)

         const token = jwt.sign({ name, email, hashedPassword,username }, dev.jwtKey, {expiresIn: '1h'});

         const emailData = {
             email,
             subject: "Account Activation Email",
             html: `
             <h2> Hello ${name} . </h2>
             <p> Please click <a href="${dev.clientUrl}/user/activate/${token}">here</a> to  activate your account </p>     
             `, // html body
           };
        
         sendEmailWithNodeMailer(emailData)

        res.status(200).json({token, message: 'Please verify your email'})
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

const VerifyEmail = (req, res)=>{
     try {
         const {token} = req.body
         if(!token){
             return res.status(404).json({message: 'Token missing'})
        }
        jwt.verify(token, dev.jwtKey, async function(err, decoded) {
             if(err){
                 return res.status(401).json({message: 'Token expired'})
             }
             const {name, email, hashedPassword, username} = decoded
             const newUser = new User({
                name, username, email, password: hashedPassword
             })
           
            const user = await newUser.save()
            if(!user){
                res.status(400).json({message: 'user was not created'}) 
            }
            res.status(201).json({message: 'e-mail verified. user created'})
        });   
     } catch (e) {
         res.status(500).json({message: e.message})
     }
}

const loginUser = async (req, res)=>{
    try {
        const {username, password} = req.body
        if(!username || !password){
            return  res.status(404).json({message: 'Some information is missing'})
        }
         const alreadyAnUser = await User.findOne({username})
         if(!alreadyAnUser){
             return  res.status(400).json({message: 'Sign up first'})
         }
         if(alreadyAnUser.is_banned){
             return  res.status(400).json({message: 'Banned user'})
         } 
         const checkPassword = await comparePassword(password, alreadyAnUser.password)
           if(!checkPassword){
                return res.status(400).json({message: 'Wrong password'})
          }
          req.session.userId = alreadyAnUser._id
         return res.status(200).json({message: 'login ok', alreadyAnUser}) 
     } catch (e) {
         res.status(500).json({message: e.message})
     }
}

const logoutUser = (req, res)=>{
    try {
        req.session.destroy()
        res.clearCookie('user_session')
        res.status(200).json({message: 'logout ok'}) 
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const profile = async (req, res)=>{
    try {
        const {_id} = req.params
        const profile = await User.findById({_id})
       res.status(200).json({message:'profile', profile}) 
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const deleteUser =async (req, res)=>{
    try {
        const {_id} = req.params
        await User.findByIdAndDelete(_id)
        res.status(200).json({message: 'profile deleted'}) 
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const banUser =async (req, res)=>{
    try {
        const {id} = req.params
        console.log(req.params)
        const user = await User.findById(id)
        console.log(user)
        if(user.is_banned === 0){
            user.is_banned = 1
        }else if(user.is_banned ===1){
            user.is_banned = 0
        }
        await user.save()
        res.status(200).json({message: 'profile banned', user}) 
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}
const updateUser =async (req, res)=>{
    try {
        const {_id} = req.params
       const updatedUser =  await User.findByIdAndUpdate(_id, {name: req.body.name, email:req.body.email},{new:true})
    if(!updatedUser){
        res.status(400).json({message: 'Error to update profile'}) 
    }
    await updatedUser.save()
       res.status(200).json({message: 'profile updated', updatedUser}) 
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const resetPassword = async (req, res)=>{
    try {
        const {username, password /* it is the new password*/} = req.body
        if(!username || !password){
            return  res.status(404).json({message: 'Some information is missing'})
        }
        if(password.length < 8){
            return  res.status(400).json({message: 'Your password must have at least 8 characteres'})
        }
        const alreadyAnUser = await User.findOne({username})
        if(!alreadyAnUser){
            return  res.status(400).json({message: 'Sign up first'})
        }
      
        const hashedPassword = await hashingPassword(password)

         const token = jwt.sign({  username, hashedPassword }, dev.jwtKey, {expiresIn: '1h'});

         const emailData = {
             email: alreadyAnUser.email,
             subject: "Update Password",
             html: `
             <h2> Hello ${alreadyAnUser.name} . </h2>
             <p> Please click <a href="${dev.clientUrl}/user/reset-password/${token}">here</a> to  reset your password </p>     
             `, // html body
           };
        
         sendEmailWithNodeMailer(emailData)

        res.status(200).json({token, message: 'Please verify your email to reset your password'})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const VerifyPassword = (req, res)=>{
    try {
        const {token} = req.body
        if(!token){
            return res.status(404).json({message: 'Token missing'})
       }
       jwt.verify(token, dev.jwtKey, async function(err, decoded) {
            if(err){
                return res.status(401).json({message: 'Token expired'})
            }
        const {username, hashedPassword} = decoded
        const updatedUser = await User.updateOne({username}, {$set:{password: hashedPassword}})
        if(!updatedUser){
            res.status(400).json({message: 'Error to update password'}) 
        }
           res.status(200).json({message: 'password changed ok'})
       });   
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}
const borrowBook = async (req, res) => {
    const { userId, bookId } = req.params;
  
    try {
      const user = await User.findById(userId);
      const book = await Book.findById(bookId);
  
      if (!user || !book) {
        return res.status(404).json({ error: 'User or book not found.' });
      }
  
      if (book.borrowedBy) {
        return res.status(400).json({ error: 'Book is already borrowed.' });
      }
  
      user.books.push(book);
      book.borrowedBy = user;
      book.available = 0;
  
      await user.save();
      await book.save();
  
      res.json({ message: 'You will find this book ion youe e-reader in some minutes.' });
    } catch (e) {
      res.status(500).json({message: e.message});
    }
  };

  const returnBook = async (req, res) => {
    const { userId, bookId } = req.params;
  
    try {
      const user = await User.findById(userId);
      const book = await Book.findById(bookId);
  
      if (!user || !book) {
        return res.status(404).json({ error: 'User or book not found.' });
      }
  
      if (!book.borrowedBy) {
        return res.status(400).json({ error: 'Book is not borrowed.' });
      }
  
      user.books.pull(book);
      book.borrowedBy = null;
      book.available = 1;
  
      await user.save();
      await book.save();
  
      res.json({ message: 'Book returned' });
    } catch (e) {
      res.status(500).json({message: e.message});
    }
  };

  const queueBook = async (req, res)=>{
    const { userId, bookId } = req.params;
    try {
        const user = await User.findById(userId);
        const book = await Book.findById(bookId);
  
      if (!user || !book) {
        return res.status(404).json({ error: 'User or book not found.' });
      }

      const emailData = {
        email: user.email,
        subject: "Book Available",
        html: `
        <h2> Hello ${user.name} , </h2>
        <p> We will let you know when the book ${book.title} is available! </p>     
        `, // html body
      };
   
    sendEmailWithNodeMailer(emailData)

        res.status(200).json({ message: 'Book available'})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

module.exports = {signUpUser, VerifyEmail, borrowBook, queueBook,  returnBook, loginUser, logoutUser, profile, deleteUser, banUser, updateUser, resetPassword, VerifyPassword}
