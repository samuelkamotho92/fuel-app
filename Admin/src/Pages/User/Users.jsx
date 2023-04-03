import React,{useState,useEffect,useMemo} from 'react'
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
    CompassCalibrationOutlined
  } from "@material-ui/icons";
  import { Link, useLocation } from 'react-router-dom';
import './Users.css'
import { useSelector } from 'react-redux';
import { userRequest } from '../../requestMethods';
import { updateUser } from '../../redux/apiCall';
import { useDispatch } from 'react-redux';
import {format} from 'timeago.js';
const Users = () => {
  const location = useLocation();
  const userId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  console.log(userId)
  const user = useSelector((state)=>state.user.currentUser.find((user)=>user._id === userId));
  console.log(userId,user);
  const [inputs ,setInputs] = useState();
const handleChange = (e)=>{
    setInputs((prev)=>{
      console.log({...prev,[e.target.name]:e.target.value})
        return {...prev,[e.target.name]:e.target.value}
    })
}
const handleClick = (e)=>{
  console.log('updating');
e.preventDefault();
console.log({...inputs});
const updatedUser = {...inputs}
updateUser(userId,updatedUser,dispatch)
alert('user updated');
window.location.replace('/');
}
  return (
<div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.name}</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.location.address}</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.location.description}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{`Created:${format(user.createdAt)}`}</span>
            </div>
            <div className="userShowInfo">
              <CompassCalibrationOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">{user.location.coordinates[0]}</span>
            </div>
            <div className="userShowInfo">
              <CompassCalibrationOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">{user.location.coordinates[1]}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  name='name'
                  placeholder={user.name}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  name='email'
                  placeholder={user.email}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  address="address"
                  placeholder={user.location.address}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  name="Description"
                  placeholder={user.location.description}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Latitude</label>
                <input
                  type="text"
                  name='coordinates'
                  placeholder={user.location.coordinates[0]}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Longitude</label>
                <input
                  type="text"
                  name='longitude'
                  placeholder={user.location.coordinates[1]}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={handleClick}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Users
