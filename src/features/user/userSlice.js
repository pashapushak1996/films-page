import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    userName: null,
    userEmail: null,
    userPhoto: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            debugger;
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
            state.userPhoto = action.payload.userPhoto;
        },
        setUserLogout: (state) => {
            state.userName = null;
            state.userPhoto = null;
            state.userEmail = null;
        }
    }
});

export default userSlice.reducer;

export const {setUserLogin, setUserLogout} = userSlice.actions;


export const selectUser = state => ({
    name: state.user.userName,
    email: state.user.userEmail,
    photo: state.user.userPhoto
});