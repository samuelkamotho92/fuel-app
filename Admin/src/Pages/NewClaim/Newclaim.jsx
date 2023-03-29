import { useState } from "react";
import "./Newclaim.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addPetrostation } from "../../redux/apiCall";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log()
  };

  const handleClick = (e) => {
    e.preventDefault();
          const petro = { ...inputs};
          console.log(petro);
          addPetrostation(petro, dispatch);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Claim</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Car Owner</label>
          <input
            name="carOwner"
            type="text"
            placeholder="Car Owner"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>phoneNumber</label>
          <input
            name="phoneNumber"
            type="number"
            placeholder="0700112233"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Registartion</label>
          <input
            name="registrationNo"
            type="string"
            placeholder="Registartion No"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Vehicle Type</label>
          <input
            name="vehicleType"
            type="string"
            placeholder="vehicleType"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Vehicle Purpose</label>
    <select defaultValue={'DEFAULT'}  onChange={handleChange}>
  <option value="DEFAULT" disabled>Choose vehicle purpose ...</option>
  <option value="personal">Personal</option>
  <option value="psv">PSV</option>
</select>
        </div>
        <div className="addProductItem">
          <label>Submitted by</label>
          <input type="text" 
          name="submittedBy"
          placeholder="Submitted By" onChange={handleChange} />
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}