import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

export default function DeleteCard() {
  // let navigate = useNavigate();

  const location = useLocation();
  const id = location.id;
  console.log(id);

  const [cardType, setCardType] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securitycode, setSecurityCode] = useState("");

  //storing the data that fetched from the DB
  const [Card, setCard] = useState([]);
  const history = useHistory();

  useEffect(() => {
    //fetching card details from DB for the selected card
    axios.get(`http://localhost:5000/card/get/${id}`)
      .then((res) => {
        setCard(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //delete card funtion
  const sendDelete = () => {
    if (window.confirm("Are you sure you want to delete the card ?")) {
        axios.delete(`http://localhost:5000/card/delete/${id}`)
        .then(res => {
          alert("Card deleted")
          console.log(res);
          //history.push('/selectcard');
        })
          .catch((e) => {
            alert("error");
          });
      } else {

        console.log("You canceled!");
      }
    };

  //   window.confirm("Are you sure you want to delete the card ?")
  //   axios
  //     .delete(`http://localhost:5000/card/delete/${id}`)
  //     .then(res => {
  //       alert("Card deleted")
  //       console.log(res);
  //       //history.push('/selectcard');
  //     })
  //     .catch((e) => {
  //       alert("error");
  //     });
  // };

  return (
    <div class='container mt-5 pt-5'>
      <h3  style ={ {marginLeft: 400, marginTop: 80}}>Remove Payment Method</h3>
      <div class='container mt-3 pt-3'>
        <form
          style={{ marginLeft: 350, marginRight: 350, marginTop: 10 }}
          onSubmit={sendDelete}
        >
          <div>
            <label
              for="formGroupExampleInput"
              class="form-label"
              style={{ marginRight: 50 }}
            >
              Card type
            </label>
            {Card.cardType == "Visa" ? (
              <div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="cardType"
                    value="Visa"
                    checked
                  />
                  <label class="form-check-label" for="inlineRadio1"></label>
                  <img src="/images/visa.jpg" width="50" alt="" />
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="cardType"
                    value="Mastercard"
                  />
                  <label class="form-check-label" for="inlineRadio2"></label>
                  <img src="/images/mastercard.jpg" width="50" alt="" />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div>
            {Card.cardType == "Mastercard" ? (
              <div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="cardType"
                    value="Visa"
                  />
                  <label class="form-check-label" for="inlineRadio1"></label>
                  <img src="/images/visa.jpg" width="50" alt="" />
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="cardType"
                    value="Mastercard"
                    checked
                  />
                  <label class="form-check-label" for="inlineRadio2"></label>
                  <img src="/images/mastercard.jpg" width="50" alt="" />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <label for="formGroupExampleInput" class="form-label">
            Card holder name
          </label>
          <input
            required
            type="text"
            class="form-control"
            id="cardHolderName"
            placeholder="Enter card holder name"
            defaultValue={Card.cardHolderName}
          />

          <label for="formGroupExampleInput2" class="form-label">
            Card number
          </label>
          <input
            required
            type="text"
            class="form-control"
            id="cardNumber"
            placeholder="Enter card number"
            defaultValue={Card.cardNumber}
          />

          <label for="formGroupExampleInput2" class="form-label">
            Expiration date
          </label>
          <input
            required
            type="text"
            class="form-control"
            id="expirationDate"
            placeholder="MM/YY"
            defaultValue={Card.expirationDate}
          />

          <div>
            <label for="formGroupExampleInput2" class="form-label">
              Security code
            </label>
            <form className="d-flex">
              <input
                required
                type="text"
                class="form-control"
                id="securitycode"
                placeholder="CVV"
                defaultValue={Card.securitycode}
              />
              <button
                type="button"
                class="btn btn-sm btn-secondary"
                data-bs-toggle="popover"
                title="The CVV is a 3- or 4-digit code printed on your credit card."
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
              >
                ?
              </button>
            </form>
          </div>

          <div class="container mt-3 pt-3"></div>
          <button
            type="submit"
            class="btn btn-primary btn-lg"
            style={{ marginRight: 20, marginLeft: 210, marginTop: 10 }}
          >
            Remove
          </button>
          <button
            type="button"
            class="btn btn-danger btn-lg"
            style={{ marginTop: 10 }}
            onClick={() => window.location.reload(false)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
