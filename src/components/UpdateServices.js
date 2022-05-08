import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { put } from "../../../BACKEND/routes/cards";

export default function UpdateServices(props) {

          const initialState = {
            selectCatergory:"",
            profileName:"",
            accountNumber:"",
            address:"",
            customerName:"",
            contactNumber:"",
            currencyType:""
          };

          const [Profile, setProfile] = useState(initialState);

          const { _id } = useParams();
	        const navigate = useNavigate();

          useEffect(
            function () {
              async function updateProfile() {
                try {
                  const response = await get(`http://localhost:5000/profiles/getprofile/${_id}`);
                  setProfile(response.data);
                } catch (error) {
                  console.log(error);
                }
              }
              updateProfile();
            },
            [props]
          );
        
          function handleSubmit(event) {
            event.preventDefault();
            async function updateProfile() {
              try {
                await patch(`http://localhost:5000/profiles/updateprofile/${_id}`, Profile);
                navigate(`http://localhost:5000/profiles/updateprofile/${_id}`);
              } catch (error) {
                console.log(error);
              }
            }
            updateProfile();
          }
        
          function handleChange(event) {
            setProfile({ ...Profile, [event.target.name]: event.target.value });
          }
        
          function handleCancel() {
            navigate(`http://localhost:5000/profiles/updateprofile/${_id}`);
          }


return (
    
    <div className="container">
          <h1>Edit {Profile.profileName}</h1>
          <hr />
          <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label for="formGroupExampleInput" class="form-label">Select Catergory</label>
            <select required class="form-select" onChange={handleChange} aria-label="Default select example">
            <option selected value="">{Profile.selectCatergory}</option>
            <option value="Electricity">Electricity</option>
            <option value="Water">Water</option>
            <option value="Communication">Communication</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Insurance">Insurance</option>
            <option value="LeasingandFinance">Leasing and Finance</option>
            </select>
          </div>
            
            <div className="form-group">
              <label>Profile Name</label>
              <input
                name="profileName"
                type="text"
                value={Profile.profileName}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Account Number</label>
              <input
                name="accountnumber"
                type="text"
                value={Profile.accountNumber}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                name="address"
                type="text"
                value={Profile.address}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Customer Name</label>
              <input
                name="customerName"
                type="text"
                value={Profile.customerName}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input
                name="contactNumber"
                type="tel"
                required
                value={Profile.contactNumber}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div>
            <label for="formGroupExampleInput" class="form-label">Currency Type</label>
            <select required class="form-select" onChange={handleChange} aria-label="Default select example">
            <option selected value="">{Profile.currencyType}</option>
            <option  value={"LKR"}>LKR</option>
            <option  value={"USD"}>USD</option>
            </select>
    
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>


  )
}
