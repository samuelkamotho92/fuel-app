import './ClaimList.css';
import { Link } from 'react-router-dom';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import {useDispatch,useSelector} from 'react-redux'
import { useState,useEffect } from 'react';
import { getPetrostations , deletePetrostations} from '../../redux/apiCall';
import { format } from 'timeago.js';
const ClaimList = () => {
  const dispatch = useDispatch();
  console.log(useSelector(state=>state));
  const petrostation = useSelector((state)=>state.petrostation.petrostations);
  console.log(petrostation);
  const [data, setData] = useState(petrostation);
useEffect(() => {
  getPetrostations(dispatch)
}, [dispatch])
console.log(petrostation);
  const handleDelete = (id) => {
   deletePetrostations(id,dispatch)
  };
  const columns = [
    { field: "_id", 
    headerName: "Petrostation  ID",
     width: 220 },
    {
      field: "name",
      headerName: "name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.name}
          </div>
        );
      },
    },
    { field: "services", headerName: "Services", width: 200 },
    { field: "fuelTypes", headerName: "Fuel Types", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/petrostation/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
<DataGrid
        rows={petrostation}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection />
  </div>
  )
}

export default ClaimList