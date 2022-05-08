import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

export default class CreateEnquiries extends Component {
  constructor(props) {
    super(props);

    this.onChangeCategories = this.onChangeCategories.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      categories: '',
      subject: '',
      message: '',
      date: new Date(),
      
    }
  }

  onChangeCategories(e) {
    this.setState({
      categories: e.target.value
    })
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value
    })
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const enquiries = {
      categories: this.state.categories,
      subject: this.state.subject,
      message: this.state.message,
      date: this.state.date
    }

    console.log(enquiries);

    axios.post('http://localhost:5000/enquiries/add', enquiries)
      .then(res => console.log(res.data));
      alert("Enquiry details added successfully");

    window.location = '/';
  }

  render() {
    
    return (
      <div class="wrapper">
        <section class="content-section">

      <div class="container-fluid mb-4">
          <div class="row bg-white">
              <div class="col-md-12 d-flex py-2">
                  <h3><b>My Enquiries</b></h3>
              </div>
          </div>
      </div>
      <div class="container my-2">
          <div class="row">
              <div class="col-md-12 common-card bg-white mb-4">
              <form >
                      <div class="form-group row">
                          <label class="col-sm-1 col-form-label">Categorie</label>
                          <div class="col-sm-11">
                          <input  type="text"required className="form-control"  value={this.state.categories} onChange={this.onChangeCategories} />
                          </div>
                      </div>
                      <div class="form-group row">
                          <label class="col-sm-1 col-form-label">Subject</label>
                          <div class="col-sm-11">
                          <input  type="text"  required className="form-control" value={this.state.subject} onChange={this.onChangeSubject} />
                          </div>
                      </div>
                      <div class="form-group row">
                          <label class="col-sm-1 col-form-label">Messeage</label>
                          <div class="col-sm-11">
                          <input  type="text" required className="form-control" value={this.state.message} onChange={this.onChangeMessage}/>
                          </div>
                      </div>
                      <div class="form-group row">
                          <label class="col-sm-1 col-form-label">Date</label>
                          <div class="col-sm-11">
                          < DatePicker selected={this.state.date} onChange={this.onChangeDate} />
                          </div>
                      </div>
                      <div class="form-group row">
                          <div class="ml-auto px-3">
                              <Link to="" onClick={this.onSubmit} className="btn btn-primary" ><i class="fa-solid fa-pen-to-square"></i>&nbsp;Create</Link>
                          </div>
                      </div>
                  </form>
                  </div>
                  </div>
                
              </div>
              
              </section>

              <div class="container-fluid footer bg-white">
                <div class="row">
                  <div class="col-md-12">
                    <div class="copyright">
                        Copyright &copy; 2022 Budget Buddy. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
      </div>
           

       

          
      
    

    )
    
    
    
  }

  
}