import React from "react";
import { Link } from "react-router-dom";



function Header() {

    return (
     
<div class="container">
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand mx-4" href="#">
        <h5><b>BUDGET BUDDY</b></h5></a>
        <div class="d-grid gap-2 d-md-block">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/login" type="button" className="btn btn-sm btn-outline-light" style={{ marginLeft: 1000, marginTop:20, marginBottom:20 }}>LOG IN</Link>
            <Link to="/signup" type="button" className="btn btn-sm btn-outline-light" style={{ marginTop:20, marginBottom:20 }}>SIGN UP</Link>
          </div>   
        </div>

      <button class="navbar-toggler mx-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">Budget Buddy</h5>
          <button type="button" class="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item bg-dark">
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
              {/* <Link to="/">Home</Link> */}
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="offcanvasNavbarDropdown">
                <li><a class="dropdown-item text-white" href="#">Add service profile</a></li>
                <li><a class="dropdown-item text-white" href="#">Manage services</a></li>
                <li><a class="dropdown-item text-white" href="#">View service profile</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Bill Payment
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="offcanvasNavbarDropdown">
                <li><a class="dropdown-item text-white" href="add">Pay bills</a></li>
                <li><a class="dropdown-item text-white " href="view">Payment history</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Payment Method
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="offcanvasNavbarDropdown">
                <li><a class="dropdown-item text-white" href="insert">Add payment method</a></li>
                <li><a class="dropdown-item text-white" href="selectcard">Edit payment method</a></li>
                <li><a class="dropdown-item text-white" href="selectcard">Remove payment method</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Enquiries
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="offcanvasNavbarDropdown">
                <li><a class="dropdown-item text-white" href="#">My enquiries</a></li>
                <li><a class="dropdown-item text-white" href="#">New enquiries</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Expenses
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="offcanvasNavbarDropdown">
                <li><a class="dropdown-item text-white" href="#">Add a bill</a></li>
                <li><a class="dropdown-item text-white" href="#">Manage bills</a></li>
                <li><a class="dropdown-item text-white" href="#">View added bills</a></li>
                <li><a class="dropdown-item text-white" href="#">Calculate total expenses</a></li>
                <li><a class="dropdown-item text-white" href="#">View total expenses</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>  
  </nav>
</div>
  )
}

export default Header;