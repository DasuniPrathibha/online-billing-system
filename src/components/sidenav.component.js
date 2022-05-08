import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidenav extends Component {

    render() {
        return (

            
                <div class="sidenav-bar">
                    <div class="sidenav-body">
                        <div class="brand-box">
                            <div class="brand-image">
                                <img src="assets/images/bb_logo.png" alt="brand_image" />
                            </div>
                        </div>
                        <ul class="nav-links">
                            <li>
                                <a href="index.html">
                                    <i class="bx bx-home-alt"></i>
                                    <span class="link-name">home</span>
                                </a>
                            </li>
                            <li>
                                <div class="icon-link">
                                    <a href="#">
                                        <i class='bx bx-book'></i>
                                        <span class="link-name">Services</span>
                                    </a>
                                    <i class="bx bx-chevron-down arrow"></i>
                                </div>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Service 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Service 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Service 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div class="icon-link">
                                    <a href="#">
                                        <i class='bx bx-receipt'></i>
                                        <span class="link-name">Bill Payment</span>
                                    </a>
                                    <i class="bx bx-chevron-down arrow"></i>
                                </div>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Bill 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Bill 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Bill 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div class="icon-link">
                                    <a href="#">
                                        <i class='bx bx-collection'></i>
                                        <span class="link-name">Enquiries</span>
                                    </a>
                                    <i class="bx bx-chevron-down arrow"></i>
                                </div>
                                <ul class="sub-menu">
                                    <li>
                                        <Link to="/" className="nav-link">My Enquiries</Link>
                                    </li>
                                    <li>
                                        <Link to="/create" className="nav-link">New Enquirie</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div class="icon-link">
                                    <a href="#">
                                        <i class='bx bx-line-chart-down'></i>
                                        <span class="link-name">Expenses</span>
                                    </a>
                                    <i class="bx bx-chevron-down arrow"></i>
                                </div>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="#">Expenses 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Expenses 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Expenses 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="index.html">
                                    <i class='bx bx-envelope-open'></i>
                                    <span class="link-name">Contact Us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="sidenav-bottom">
                        <div class="xo-box">
                            Budget Buddy
                        </div>
                    </div>
                </div>


        );
    }
}