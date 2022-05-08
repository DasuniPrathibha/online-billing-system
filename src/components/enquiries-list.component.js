import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'




const Enquiries = props => (



  <div class="container my-2">
    <div class="row">
      <div class="col-md-12 common-card bg-white mb-4">
        <form>
          <div class="form-group row">
            <label class="col-sm-1 col-form-label">Categories</label>
            &nbsp;
            <div class="col-sm-11">
              <input type="text" class="form-control" id=" " placeholder={props.enquiries.categories} readOnly />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-1 col-form-label">Subject</label>
            &nbsp;
            <div class="col-sm-11">
              <input type="text" class="form-control" id=" " placeholder={props.enquiries.subject} readOnly />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-1 col-form-label">Messeage</label>
            &nbsp;
            <div class="col-sm-11">

              <textarea class="form-control" id=" " placeholder={props.enquiries.message} readOnly />

            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-1 col-form-label">Date</label>
            &nbsp;
            <div class="col-sm-11">
              <input type="class=form-control" id=" " placeholder={props.enquiries.date.substring(0, 10)} readOnly />

            </div>
          </div>
          <div class="form-group row">
            <div class="ml-auto px-3">
              <Link className='btn btn-primary' to={"/edit/" + props.enquiries._id}><i class="fa-solid fa-pen-to-square"></i>&nbsp;Update</Link>
              &nbsp;&nbsp;
              <a href="#" className="btn btn-danger" onClick={() => { props.deleteEnquiries(props.enquiries._id) }}><i className="far fa-trash-alt" ></i>&nbsp;Delete</a>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
)

export default class EnquiriesList extends Component {
  constructor(props) {
    super(props);

    this.deleteEnquiries = this.deleteEnquiries.bind(this)

    this.state = { enquiries: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/enquiries/')
      .then(response => {
        this.setState({ enquiries: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteEnquiries(id) {
    axios.delete('http://localhost:5000/enquiries/' + id)
      .then(response => { console.log(response.data) });
    alert("Deleted successfully");

    this.setState({
      enquiries: this.state.enquiries.filter(el => el._id !== id)
    })
  }

  enquiriesList() {
    return this.state.enquiries.map(currentenquiries => {
      return <Enquiries enquiries={currentenquiries} deleteEnquiries={this.deleteEnquiries} key={currentenquiries._id} />;
    })
  }
  /*generate report */
  exportPDF = () => {
    const unit = "pt";
    const size = "A3"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);
    const title = "Enquiries";
    const headers = [['Category', 'Subject', 'Message', 'Date']];
    const data = this.state.enquiries.map(elt => [elt.categories, elt.subject, elt.message, elt.date]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("Enquiries.pdf")
  }
  /**Search by date */
  filterData(enquiries, searchKey) {
    const result = enquiries.filter((Enquiries) =>
      Enquiries.subject.includes(searchKey) || Enquiries.categories.includes(searchKey) || Enquiries.date.includes(searchKey)
    )
    this.setState({ enquiries: result })
  }
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get('http://localhost:5000/enquiries/')
      .then(response => {
        this.filterData(response.data, searchKey)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <section class="content-section">
        <div class="container-fluid mb-4">
          <div class="row bg-white">
            <div class="col-md-12 d-flex py-2">
              <h3><b>My Enquiries</b></h3>
              <div class="d-flex ml-auto">
                <form class="form-inline">
                  <div class="form-group mx-sm-3 mb-2">
                    <input type="text" class="form-control" id="" placeholder="Search" />
                  </div>
                  <button type="submit" class="btn btn-success mb-2">
                    <i class='bx bx-search'></i>
                  </button>
                </form>
                <button type="button" class="btn btn-primary ml-4" onClick={() => this.exportPDF()}>
                  <i class='bx bx-printer'></i> Print Report
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="container my-2">
          <div class="row">
            <div class="col-md-12 bg-white mb-4">
              <form>
                <div class="form-group row">

                  <div class="col-sm-11">
                    {this.enquiriesList()}
                  </div>
                </div>
              </form>



            </div>
          </div>
        </div>
      </section>

    )
  }
}