import React, { useState} from 'react';
import axios from 'axios';


function AddServiceProfile() {
  
    const [selectCatergory, setselectCatergory] = useState("");
    const [profileName, setProfileName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [address, setaddress] = useState("");
    const [customerName, setcustomerName] = useState("");
    const [contactNumber, setcontactNumber] = useState(null);
    const [currencyType, setcurrencyType] = useState("");


    function sendData(e){
        
        e.preventDefault();

        const newServiceProfile = {
            selectCatergory: selectCatergory,
            profileName:profileName,
            accountNumber:accountNumber,
            address:address,
            customerName:customerName,
            contactNumber:contactNumber,
            currencyType:currencyType

        }
        
        console.log(newServiceProfile);

        axios.post("http://localhost:5000/profiles/addprofile", newServiceProfile).then(() => {
            alert("Service Profile added succesfully")
        }).catch((err)=>{
            alert(err)
        })

    }

    return (
    <div>
        <div class='container mt-5 pt-5'>
        <br></br>
        <br></br>
        <br></br>

    <h3>Add Service Profile</h3>

    <div class='container mt-3 pt-3'></div>
    
        <form onSubmit={sendData}>
    
        <label for="formGroupExampleInput" class="form-label">Select Catergory</label>
            <select required class="form-select" onChange={(e)=> {setselectCatergory(e.target.value);}} aria-label="Default select example">
            <option selected value="">Select Catergory</option>
            <option value="Electricity">Electricity</option>
            <option value="Water">Water</option>
            <option value="Communication">Communication</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Insurance">Insurance</option>
            <option value="LeasingandFinance">Leasing and Finance</option>
        </select>

        <label for="formGroupExampleInput" class="form-label">Profile Name</label>
        <input required type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter profile name" onChange={(e)=> {
            setProfileName(e.target.value);}} />
        
        <label for="formGroupExampleInput" class="form-label">Account number</label>
        <input required type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter account number" onChange={(e)=> {
            setAccountNumber(e.target.value);}} />

        <label for="formGroupExampleInput2" class="form-label">Address</label>
        <input required type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your address" onChange={(e)=> {
            setaddress(e.target.value);}} />

        <label for="formGroupExampleInput2" class="form-label">Customer Name</label>
        <input required type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your Name" onChange={(e)=> {
            setcustomerName(e.target.value);}} />

        <label for="formGroupExampleInput2" class="form-label">Contact Number</label>
                <input required type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your phone number" onChange={(e)=> {
            setcontactNumber(e.target.value);}} /> 

        <label for="formGroupExampleInput" class="form-label">Currency Type</label>
            <select required class="form-select" onChange={(e)=> {setcurrencyType(e.target.value);}} aria-label="Default select example">
            <option selected value="">Select Currency Type</option>
            <option  value={"LKR"}>LKR</option>
            <option  value={"USD"}>USD</option>
            </select>
    
        <div class='container mt-3 pt-3'></div>
        <button type="submit" class="btn btn-primary btn-lg" >Create</button>
        <button type="button" class="btn btn-secondary btn-lg" onClick={()=>window.location.reload(false)}>Cancel</button>
        </form>

    </div>
    </div>
  )
}

export default AddServiceProfile