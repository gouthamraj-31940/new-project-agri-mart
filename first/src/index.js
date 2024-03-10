import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Home from './home';
import ChangePassword from './changepassword';
import MyProfile from './myprofile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));