import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "member",
    initialState: {
        user:{
            isLogin: false
        }
    },

    reducers: {
        login: (state, action) =>{
            state.user = action.payload;
        },
        logout: (state)=>{
            state.user.isLogin = false;
        }
    }
});

export const {login, logout} = userSlice.actions;

export const selectMember = (state) => state.user.user;

export default userSlice.reducer;