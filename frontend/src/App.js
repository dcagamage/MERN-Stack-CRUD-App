import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import AddUser from './Components/AddUser/AddUser';
import Users from './Components/UserDetails/Users';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ContactUs from './Components/ContactUs/ContactUs';
import SendPdf from './Components/SendPdf/SendPdf';

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/mainhome" element={ <Home/> }/>
          <Route path="/adduser" element={ <AddUser/> }/>
          <Route path="/userdetails" element={ <Users/> }/>
          <Route path="/userdetails/:id" element={ <UpdateUser/> }/>
          <Route path="/register" element={ <Register/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/contactus" element={ <ContactUs/> }/>
          <Route path="/sendpdf" element={ <SendPdf/> }/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
