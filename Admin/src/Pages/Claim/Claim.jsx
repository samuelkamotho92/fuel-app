import React,{useState,useMemo,useEffect} from 'react';
import './Claim.css';
import Chart from "../../Dashboard/Chart/Chart"
import {productData} from "../../DummyData/Dummy"
import { Publish } from "@material-ui/icons";
import {useLocation,Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { userRequest } from '../../requestMethods';
import { useDispatch } from 'react-redux';
import { updatePetrostation } from '../../redux/apiCall';
const Claim = () => {
    const location = useLocation();
    const petroId = location.pathname.split('/')[2];
    console.log(petroId);
    const dispatch = useDispatch();
    const petroSt = useSelector((state)=>state.petrostation.petrostations.find((petrostation)=>petrostation._id === petroId));
console.log(petroSt);
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
const updatedPetrost = {...inputs}
updatePetrostation(petroId,updatedPetrost,dispatch)
alert('Petrostation Updated');
window.location.replace('/');
}
  return (
    <div className="product">
    <div className="productTitleContainer">
      <h1 className="productTitle">Petrostation</h1>
      <Link to="/newPetrostation">
        <button className="productAddButton">Create</button>
      </Link>
    </div>
    <div className="productTop">
        <div className="productTopRight">
            <div className="productInfoTop">
                <span className="productName">{petroSt.name}</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">{petroSt._id}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Services</span>
                    <span className="productInfoValue">{petroSt.services}</span>
                </div>
            </div>
        </div>
    </div>
    <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Name</label>
                <input type="text" name='name' placeholder={petroSt.name} onChange={handleChange}/>
                <label>Services</label>
                <input type="number" name='services' placeholder={petroSt.services} onChange={handleChange} />
                 <label>Address</label>
            <input type="text" name='registrationNo' placeholder={petroSt.location.address} onChange={handleChange} />
            <label>description</label>
            <input type="text" name='vehicleType' placeholder={petroSt.location.description} onChange={handleChange} />
            <label>Latitude</label>
            <input type="text" name='latitude' placeholder={petroSt.location.coordinates[0]} onChange={handleChange} />
            <label>Longitude</label>
            <input type="text" name='longitude' placeholder={petroSt.location.coordinates[1]} onChange={handleChange} />
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button onClick={handleClick} className="productButton">Update</button>
            </div>
        </form>
    </div>
  </div>
  )
}

export default Claim
