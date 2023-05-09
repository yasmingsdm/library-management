import {createSlice} from '@reduxjs/toolkit'
const getLocalStoreItem = ()=>{
    if(localStorage.getItem('loginStatus')=== null){
        return false
    } else{
        return JSON.parse(localStorage.getItem('loginStatus'))
    }
}

export const userSlice = createSlice({
    name:'user',
    initialState:{Loggedin: getLocalStoreItem()},
    reducers:{
        login:(state)=>{
            localStorage.setItem('loginStatus', 'true');
            state.Loggedin = getLocalStoreItem()
        },
        logout:(state)=>{
            localStorage.setItem('loginStatus', 'false');
            state.Loggedin = getLocalStoreItem()
        },
    }
})

export const {login,logout} = userSlice.actions;
export default userSlice.reducer