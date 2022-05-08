import React, { useState, useEffect} from "react";
import axios from "axios";

export default function PayBill () {

    const [billType, setBillType] = useState("");
    const [profile, setProfile] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [cards, setCards] = useState(null);

    //sending collected data to the database
    function sendData(e){
        
        e.preventDefault();

        const newBill = {
              billType: billType,
              profile: profile,
              accountNumber: accountNumber,
              amount: amount,
              cardNumber: paymentMethod
        }
        
        console.log(newBill);

        axios.post("http://localhost:5000/bill/add", newBill).then(() => {
            alert("Payment is successful")
        }).catch((err)=>{
            alert(err)
        })

    }


    return (

      <div class='container mt-5 pt-5'>
        <h3 style ={ {marginLeft: 400, marginTop: 80}} >Pay Bills</h3>
          <div class='container mt-3 pt-3'></div>
          
            <form style ={ {marginLeft: 350, marginRight: 350, marginTop: 10 }} onSubmit={sendData}>
          
              <label for="formGroupExampleInput" class="form-label">Bill type</label>
                <select required class="form-select" onChange={(e)=> {setBillType(e.target.value);}} aria-label="Default select example">
                  <option selected value="">Select bill type</option>
                  <option value="Electricity">Electricity</option>
                  <option value="Water">Water</option>
                  <option value="Communication">Communication</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Leasing and Finance">Leasing and Finance</option>
              </select>

              <label for="formGroupExampleInput" class="form-label" >Profile</label>
                <select required class="form-select" onChange={(e)=> {setProfile(e.target.value);}} aria-label="Default select example">
                  <option selected value="">Select profile</option>
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                </select>
                
              <label for="formGroupExampleInput" class="form-label">Account number</label>
              <input required type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter account number" onChange={(e)=> {
                setAccountNumber(e.target.value);}} />

              <label for="formGroupExampleInput2" class="form-label">Amount</label>
              <input required type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter amount" onChange={(e)=> {
                setAmount(e.target.value);}} />

              <label for="formGroupExampleInput" class="form-label">Payment method</label>
                <select required class="form-select" onChange={(e)=> {setPaymentMethod(e.target.value);}} aria-label="Default select example">
                  <option selected value="">Select payment method</option>
                  <option  value={"7890239037891278"}>7890239037891278  Visa</option>
                  <option  value={"4532902378921254"}>4532902378921254  Mastercard</option>
                </select>
             
              <button type="submit" class="btn btn-primary btn-lg" style ={ {marginRight: 20, marginLeft: 210, marginTop: 60}}>Pay</button>
              <button type="button" class="btn btn-danger btn-lg" style ={ {marginTop:60 }} onClick={()=>window.location.reload(false)}>Cancel</button>
              
            </form>
      </div>

    )
}