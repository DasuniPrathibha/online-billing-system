import React from 'react'

export default function Signup() {
    return (
        <div class='container mt-5 pt-5 '>
            <div class='container mt-3 pt-3 '>
                <form id = "frm" style ={ {marginLeft: 350, marginRight: 350, marginTop: 10 }}>
                    <h1 style ={ {marginLeft: 200, marginTop: 40, marginBottom:40}} >SIGN UP</h1>
                    <div class="row g-3 mb-3">
                    <div class="col">
                        <label for="exampleInputEmail1" class="form-label">First name</label>
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div class="col ">
                        <label for="exampleInputEmail1" class="form-label">Last name</label>
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                    </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type your Email address'/> 
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Type your Password'/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">I accept the terms of use & privacy policy</label>
                    </div>
                    <div class='container mt-3 pt-3'></div>    
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-primary" type="button">Sign up</button>
                    </div>
                    <div class="row col ">
                    <form style ={ {marginLeft: 150, marginTop: 20 }}>
                        <label for="exampleInputEmail1" class="form-label" style ={ { marginTop: 30 }}>Already have an account?</label> 
                        <button type="button" class="btn btn-link" style ={ {  marginTop: 0 }}>Login here</button>
                    </form>
                    </div>      
                </form>
            </div>
        </div>
  )
}
