import React from 'react';
import './Mainpage.css';
import Topbar from  './TopBar/Topbar'
import Sidebar from './SideBar/Sidebar';
import Home from '../Pages/Home/Home';
import UserList from '../Pages/Userlist/UserList';
import User from '../Pages/User/Users';
import Newuser from '../Pages/NewUser/Newuser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from '../Pages/Product/Product';
import ProductList from '../Pages/ProductList/ProductList';
import NewProduct from '../Pages/NewProduct/NewProduct';
const Mainpage = () => {
  return (
    <Router>
<Topbar />
<div className="container">
<Sidebar />
<Routes>
<Route exact path='/' element={<Home/>} />
<Route path='/users' element={<UserList />} />
<Route path='/user/:id' element={<User />}/>
<Route path='/newUser' element={<Newuser />}/>
<Route path='/product/:id' element={<Product />}/>
<Route path='/products' element={<ProductList />}/>
<Route path='/newProduct' element={<NewProduct />}/>
</Routes>
</div>
</Router>
  )
}

export default Mainpage