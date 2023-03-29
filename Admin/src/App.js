import logo from './logo.svg';
import './App.css';
import Topbar from './Dashboard/TopBar/Topbar';
import Sidebar from './Dashboard/SideBar/Sidebar';
import Home from './Pages/Home/Home';
import UserList from './Pages/Userlist/UserList';
import User from './Pages/User/Users';
import Newuser from './Pages/NewUser/Newuser';
import { BrowserRouter as Router ,Routes ,Route, Navigate } from 'react-router-dom';
import Claim from './Pages/Claim/Claim';
import ClaimList from './Pages/ClaimList/ClaimList';
import NewClaim from './Pages/NewClaim/Newclaim';
import Login from './Pages/login/Login';
import Trial from './Pages/trial'
import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  // const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
const admin = localStorage.getItem('loggedIn');
  return (
    <Router>
  <Routes>
        <Route path='/login' element={<Login />} />
  </Routes>
      <>
        <Topbar />
  <div className='container'>
    <Sidebar />
    <Routes>
<Route exact path='/' element={admin ? <Home/>:<Navigate to='/login'/>} />
<Route path='/users' element={<UserList />} />
<Route path='/user/:id' element={<User />}/>
<Route path='/newUser' element={<Newuser />}/>
<Route path='/claim/:id' element={<Claim />}/>
<Route path='/claims' element={<ClaimList />}/>
<Route path='/newClaim' element={<NewClaim />}/>  
    </Routes>
    </div>
      </>
    </Router>
  )
}

export default App