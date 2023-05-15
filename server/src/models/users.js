const {Schema, model, default: mongoose} = require('mongoose')

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Please insert your name'],
        trim: true
    },
    email:{
        type: String, 
        required: [true, 'Please insert your email'],
        trim: true,
        unique: true,
        lowercase: true, 
        validate:{
            validator: function(v){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
            }, message: 'Please enter a valide e-mail'
        }
    },
    password:{
        type: String,
        required: [true, 'Please insert your password'],
        minlength: [8, 'Your password must have at least 8 characteres']
    },
    username:{
        type:String,
        required:[true, 'Create an username'],
        unique:true, 
        trim:true
    },
    is_admin:{
        type: Number,
        default: 0
    },
    is_banned:{
        type: Number,
        default: 0
    },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
   
},  {timestamps:true})

const User = model('user', userSchema)

module.exports = User