import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    getUserStart:(state)=>{
state.isFetching = true;
state.error = false;
    },
    getUserSuccess:(state,action)=>{
      state.isFetching = false;
      state.currentUser = action.payload
    },
    getUserFailure:(state)=>{
state.isFetching = false;
state.error = true
    },
      //DELETE
      deleteUserStart: (state) => {
        state.isFetching = true;
        state.error = false;
      },
      deleteUserSuccess: (state, action) => {
        state.isFetching = false;
        state.currentUser.splice(
          state.currentUser.findIndex((user) => user._id === action.payload),
          1
        );
      },
      deleteUserFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
       //UPDATE
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser[
        state.currentUser.findIndex((user) => user._id === action.payload.id)
      ] = action.payload.updatedUser;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser.push(action.payload);
    },
    addUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure ,getUserFailure,getUserStart,getUserSuccess,
deleteUserStart,deleteUserSuccess,deleteUserFailure,updateUserStart,updateUserSuccess,
updateUserFailure,addUserStart,addUserSuccess,addUserFailure
} = userSlice.actions;
export default userSlice.reducer;