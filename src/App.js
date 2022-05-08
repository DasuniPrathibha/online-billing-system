import './App.css';
import Header from './components/Header';
import PayBill from './components/PayBill';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard';
import PaymentHistory from './components/PaymentHistory';
import SelectCard from './components/SelectCard';
import DeleteCard from './components/DeleteCard';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidenav from "./components/sidenav.component"
import EnquiriesList from "./components/enquiries-list.component";
import EditEnquiries from "./components/edit-enquiries.component";
import CreateEnquiries from "./components/create-enquiries.component";




function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route path='/add' exact component={PayBill} />
      <Route path='/view' exact component={PaymentHistory} />
      <Route path='/insert' exact component={AddCard} />
      <Route path='/selectcard' exact component={SelectCard} />
      <Route path='/update' exact component={EditCard} />
      <Route path='/delete' exact component={DeleteCard} />
      <Route path='/login' exact component={Login} />
      <Route path='/signup' exact component={Signup} />
      <Route path='/home' exact component={Home} />
    </div>
    <div class="wrapper">
        <Sidenav />
        <Route path="/" exact component={EnquiriesList} />
        <Route path="/edit/:id" component={EditEnquiries} />
        <Route path="/create" component={CreateEnquiries} />
      </div>
    </Router>
   
  );
}

export default App;
