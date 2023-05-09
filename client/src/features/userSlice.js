import {createSlice} from '@reduxjs/toolkit'
const getLocalStoreItem = ()=>{
    if(localStorage.getItem('loginStatus')=== null){
        return false
    } else{
        return JSON.parse(localStorage.getItem('loginStatus'))
    }
}
const getLocalStoreAdm = ()=>{
    if(localStorage.getItem('adminStatus')=== null){
        return false
    } else{
        return JSON.parse(localStorage.getItem('adminStatus'))
    }
}

export const userSlice = createSlice({
    name:'user',
    initialState:{Loggedin: getLocalStoreItem(), Admin:getLocalStoreAdm()},
    reducers:{
        login:(state)=>{
            localStorage.setItem('loginStatus', 'true');
            state.Loggedin = getLocalStoreItem()
        },
        logout:(state)=>{
            localStorage.setItem('loginStatus', 'false');
            state.Loggedin = getLocalStoreItem()
            localStorage.setItem('adminStatus', 'false');
            state.Admin = getLocalStoreAdm()
        },
        admin:(state)=>{
            localStorage.setItem('adminStatus', 'true');
            state.Admin = getLocalStoreAdm()
        },
    }
})

export const {login,logout, admin} = userSlice.actions;
export default userSlice.reducer