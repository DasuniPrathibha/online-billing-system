import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Moment from "react-moment";
import jspdf from "jspdf";
import "jspdf-autotable";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PaymentHistory() {
  const [bills, setBills] = useState([]);
  const [search, setsearch] = useState(null);
  const [filtered, setfiltered] = useState([]);
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('')

  //fetching all the bill details from the database
  function getBills() {
    axios
      .get("http://localhost:5000/bill/view")
      .then((res) => {
        setBills(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getBills();
  }, []);

  console.log(bills);

  //Generate payment history report
  function generatePDF(bills) {
    const doc = new jspdf();
    const tableColumn = [
      "Refferance No.",
      "Bill type",
      "Profile",
      "Account No.",
      "Paid using",
      "Transaction date",
      "Amount",
    ];
    const tableRows = [];

    bills
      .slice(0)
      .reverse()
      .map((bill) => {
        const billData = [
          bill._id,
          bill.billType,
          bill.profile,
          bill.accountNumber,
          bill.cardNumber,
          bill.createdAt,
          bill.amount,
        ];
        tableRows.push(billData);
      });

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    var img = (new Image().src = "/images/logo.png");
    doc.addImage(img, "JPEG", 160, 9, 49, 15);
    doc.text("Payment History Report", 14, 15).setFontSize(12);
    doc.text(`Report Genarated Date - ${dateStr} `, 14, 23);
    doc.save(`Payment History Report_${dateStr}.pdf`);
  }

  return (
    <div className="container mt-5 pt-5">
      <h3 style={{ marginLeft: 400, marginTop: 80 }}>Payment History</h3>
      <div className="container mt-3">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ marginLeft: 200, marginTop: 40, marginBottom: 40 }}
              placeholder="Enter Bill type here"
              onChange={event => {
                setSearchTerm(event.target.value)
              }}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              style={{ marginRight: 200, marginTop: 40, marginBottom: 40 }}  
            >
              Search
            </button>
          </form>
        </div>

        <table className="table mt-3" id="frm" style={{ marginLeft: 50 }}>
          <thead>
            <tr>
              <th>Refferance No.</th>
              <th>Bill type</th>
              <th>Profile</th>
              <th>Account No.</th>
              <th>Paid using</th>
              <th>Transaction date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody> 
            {bills.filter((val)=> { //Filter payment history details
              if (searchTerm == "") {
                return val
              } else if (val.billType.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            }).map((item) => (
              <tr>
                <td>{item._id}</td>
                <td>{item.billType}</td>
                <td>{item.profile}</td>
                <td>{item.accountNumber}</td>
                <td>{item.cardNumber}</td>
                <td>
                  <Moment format="YYYY-MM-DD HH:mm">{item.createdAt}</Moment>
                </td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-primary me-md-2 btn-lg"
            type="button"
            style={{ marginLeft: 100, marginRight: 100, marginTop: 40 }}
            onClick={(e) => generatePDF(bills)}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
