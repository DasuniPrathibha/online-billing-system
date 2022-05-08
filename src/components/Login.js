import React from 'react'

export default function Login() {
  return (
    <div className="container mt-5 pt-5">
      <h1 style ={ {marginLeft: 580, marginTop: 80, marginBottom:40}} >LOG IN</h1>
      <div className="container mt-3">
        <form id = "frm" style ={ {marginLeft: 350, marginRight: 350, marginTop: 50 }}>
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
            <label class="form-check-label" for="exampleCheck1">Remember me ?</label>
          </div>
          <div class='container mt-3 pt-3'></div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button">Log in</button>
          </div>
        </form>
        </div>
    </div>
  )
}
