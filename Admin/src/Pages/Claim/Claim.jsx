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
    const claimId = location.pathname.split('/')[2];
    console.log(claimId);
    const dispatch = useDispatch();
    const claim = useSelector((state)=>state.claim.claims.find((claim)=>claim._id === claimId));
console.log(claim);
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
const updatedClaim = {...inputs}
updatePetrostation(claimId,updatedClaim,dispatch)
alert('user updated');
window.location.replace('/');
}
  return (
    <div className="product">
    <div className="productTitleContainer">
      <h1 className="productTitle">Claim</h1>
      <Link to="/newClaim">
        <button className="productAddButton">Create</button>
      </Link>
    </div>
    <div className="productTop">
        <div className="productTopRight">
            <div className="productInfoTop">
                <span className="productName">{claim.submittedBy}</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">{claim._id}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Car Owner:</span>
                    <span className="productInfoValue">{claim.carOwner}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Type of Insurance:</span>
                    <span className="productInfoValue">{claim.insuranceCover}</span>
                </div>
            </div>
        </div>
    </div>
    <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Car Owner</label>
                <input type="text" name='carOwner' placeholder={claim.carOwner} onChange={handleChange}/>
                <label>Phone Number</label>
                <input type="number" name='phoneNumber' placeholder={claim.phoneNumber} onChange={handleChange} />
                 <label>Registration</label>
            <input type="text" name='registrationNo' placeholder={claim.registrationNo} onChange={handleChange} />
            <label>Vehicle Type</label>
            <input type="text" name='vehicleType' placeholder={claim.vehicleType} onChange={handleChange} />
            <label>Vehicle Purpose</label>
    <select defaultValue={claim.vehiclePurpose} onChange={handleChange} name='vehiclePurpose'>
  <option value={claim.vehiclePurpose} disabled>{claim.vehiclePurpose}</option>
  <option value="personal">Personal</option>
  <option value="psv">PSV</option>
</select>
<label>Insurance Cover</label>
    <select defaultValue={claim.insuranceCover} onChange={handleChange} name='insuranceCover'>
  <option value={claim.insuranceCover} disabled>{claim.insuranceCover}</option>
  <option value="third party only">third party only</option>
  <option value="third party fire and theft">third party fire and theft</option>
  <option value="comprehensive">comprehensive</option>
</select>
<label>Payment Status</label>
    <select defaultValue={claim.paymentStatus} onChange={handleChange} name="paymentStatus">
  <option value={claim.paymentStatus} disabled>{claim.paymentStatus}</option>
  <option value="paid">paid</option>
  <option value="pending">pending</option>
  <option value="expired">expired</option>
</select>
<label>Status</label>
    <select defaultValue={claim.status} onChange={handleChange} name='status'>
  <option value={claim.status} disabled>{claim.status}</option>
  <option value="approved">approved</option>
  <option value="rejected">rejected</option>
  <option value="returned">returned</option>
  <option value="pending">pending</option>
</select>
<label>Amount paid</label>
    <select defaultValue={claim.amount} onChange={handleChange} name='amount'>
  <option value={claim.amount} disabled>{claim.amount}</option>
  <option value="5000">5000</option>
  <option value="7500">7500</option>
  <option value="10000">10,000</option>
  <option value="not yet paid">not yet paid</option>
</select>
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
