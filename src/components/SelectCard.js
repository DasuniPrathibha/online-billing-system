import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import EditCard from "./EditCard";
import { useHistory } from "react-router-dom";

export default function SelectCard() {
  const { id } = useParams();
  const history = useHistory() 

  const [cards, setCards] = useState([]);

  //fetching all the card details from the database
  function getCards() {
    axios
      .get("http://localhost:5000/card")
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getCards();
  }, []);

  console.log(cards);

   function editCard(id) {
     console.log(id) 
      history.push({pathname:'/update',id})
   }

   function deleteCard(id) {
    console.log(id) 
     history.push({pathname:'/delete',id})
  }
   

  return (
    <div className="container mt-5 pt-5">
      <h3 style={{ marginLeft: 400, marginTop: 80 }}>Select Payment Method</h3>
      <div class="container mt-3 pt-3">
        <div class="row" style={{ marginLeft: 400, marginTop: 20 }}>
          <div class="col-sm-6">
            {cards.map((item) => (
              <>
              <div class="card p-3 mb-2 bg-dark text-white">
                <div class="card-body">
                  <h5 style={{ marginLeft: 20, marginTop:10, marginBottom: 25 }}>{item.cardType}</h5>
                  <h5 style={{ marginLeft: 20, marginTop:15, marginBottom: 20 }}>{item.cardNumber}</h5>
                  <label style={{ marginLeft: 280}}>Exp.date</label><br></br>
                  <h5 style={{ marginLeft: 280, marginBottom: 40 }}>{item.expirationDate}</h5>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button type="submit" class="btn btn-primary btn-sm" onClick={() => editCard(item._id)}> Update</button>
                      <button type="submit" id="delete_btn" class="btn btn-danger btn-sm" href="" onClick={() => deleteCard(item._id)}>Remove</button>
                    </div>   
                </div>
              </div>
                <br/>
              </>     
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
}
