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
    const petro = { ...inputs };
    console.log(petro);
    addPetrostation(petro, dispatch);
    alert('add new petrostation');
    window.location.replace('/');
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Petrostation</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Petrostation Name</label>
          <input
            name="name"
            type="text"
            placeholder="Petrostation Name"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Fuel Types</label>
          <input
            name="fuelTypes"
            type="string"
            placeholder="0700112233"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Services</label>
          <input
            name="services"
            type='text'
            placeholder="Services"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Descrciption</label>
          <input
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>latitude</label>
          <input
            name="latitude"
            type="text"
            placeholder="latitude"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>longitude</label>
          <input
            name="longitude"
            type="text"
            placeholder="longitude"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}