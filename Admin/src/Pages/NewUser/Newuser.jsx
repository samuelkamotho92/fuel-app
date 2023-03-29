import React,{useState,useEffect,useMemo} from 'react';
import './Newuser.css';
import { addUser } from '../../redux/apiCall';
import { useDispatch } from 'react-redux';
const Newuser = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e)=>{
setInputs((prev)=>{
  return {...prev,[e.target.name]:e.target.value}
})
console.log(inputs);
  }

  const handleClick = (e)=>{
    e.preventDefault();
    const claim = {...inputs};
    console.log(claim)
    addUser(claim,dispatch);
  }
  return (
    <div className="newUser">
    <h1 className="newUserTitle">New User</h1>
    <form className="newUserForm">
      <div className="newUserItem">
        <label>Name</label>
        <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
      </div>
      <div className="newUserItem">
        <label>Email</label>
        <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
      </div>
      <div className="newUserItem">
        <label>Address</label>
        <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
          />
      </div>
      <div className="newUserItem">
        <label>Description</label>
        <input
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          />
      </div>
      <div className="newUserItem">
        <label>Latitude</label>
        <input
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          />
      </div>
      <div className="newUserItem">
        <label>Longitude</label>
        <input
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          />
      </div>
      <div className="newUserItem">
        <label>Password</label>
        <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
      </div>
      <div className="newUserItem">
        <label>Password Confirm</label>
        <input
            name="passwordConfirm"
            type="password"
            placeholder="Password connfirm"
            onChange={handleChange}
          />
      </div>
      <button onClick={handleClick} className="newUserButton">Create</button>
    </form>
  </div>
  )
}

export default Newuser
