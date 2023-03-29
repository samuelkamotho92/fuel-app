import { 
  loginFailure, 
  loginStart,
  loginSuccess,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure
} 
from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
 getPetrostationFailure,
 getPetrostationStart,
 getPetrostationSuccess,
  deletePetrostationFailure,
  deletePetrostationStart,
  deletePetrostationSuccess,
  updatePetrostationFailure,
  updatePetrostationStart,
  updatePetrostationSuccess,
  addPetrostationFailure,
  addPetrostationStart,
  addPetrostationSuccess,
} from "./claimRedux";


export const login = async (dispatch, user) => {

  dispatch(loginStart());
  try {
    console.log(dispatch,user);
    const res = await publicRequest.post("Auth/signIn", user);
    console.log(res.data.user.role);
      dispatch(loginSuccess(res.data));
      let admin = res.data.user.role
if(res.data.user.role === 'admin'){
 localStorage.setItem('loggedIn',res.data.user.role)
  alert('logged in as Admin');
  window.location.replace('/');
}else{
  alert('Wrong creditials Only admins Allowed');
  dispatch(loginFailure());
}
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getPetrostations = async (dispatch) => {
  dispatch(getPetrostationStart());
  try {
    const res = await userRequest.get("/petrostation/getPetro");
   console.log(res.data);
    const data = res.data
    console.log(data);
    dispatch(getPetrostationSuccess(data));
  } catch (err) {
    dispatch(getPetrostationFailure());
  }
};

export const deletePetrostations = async (id, dispatch) => {
  dispatch(deletePetrostationStart());
  try {
     await userRequest.delete(`/petrostation/${id}`);
    dispatch(deletePetrostationSuccess(id));
  } catch (err) {
    dispatch(deletePetrostationFailure());
  }
};

export const updatePetrostation = async (id, updatedClaim, dispatch) => {
  dispatch(updatePetrostationStart());
  try {
    //update in mongodb
  const res =   await userRequest.patch(`/petrostation/${id}`,updatedClaim);
  console.log(res)
    // update in our state.
    dispatch(updatePetrostationSuccess({ id, updatedClaim }));
  } catch (err) {
    dispatch(updatePetrostationFailure());
  }
};
export const addPetrostation = async (claim, dispatch) => {
  dispatch(addPetrostationStart());
  try {
    const res = await userRequest.post(`/claim/createclaim`, claim);
    dispatch(addPetrostationSuccess(res.data));
  } catch (err) {
    dispatch(addPetrostationFailure());
  }
};


//user
export const getUsers = async (dispatch)=>{
dispatch(getUserStart());
try{
const res = await userRequest.get('/user/getUser');
console.log(res);
console.log(res.data);
dispatch(getUserSuccess(res.data));
}catch(err){
dispatch(getUserFailure());
}
}

//delete user 
export const deleteUser = async (id,dispatch)=>{
  dispatch(deleteUserStart())
  try
  {
    await userRequest.delete(`/user/${id}`);
    dispatch(deleteUserSuccess())
  }catch(err){
dispatch(deleteUserFailure());
  }
}

//update User
export const updateUser = async(id,user,dispatch)=>{
dispatch(updateUserStart())
try
{

dispatch(updateUserSuccess({id,user}))
}catch(err){
  dispatch(updateUserFailure)
}
}

//add user

export const addUser = async (user, dispatch) => {
  console.log(user);
  dispatch(addUserStart());
  try {
    const res = await userRequest.post(`/user/createUser`, user);
    console.log(res);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};