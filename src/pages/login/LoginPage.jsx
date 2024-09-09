import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function LoginPage() {
  const navigate = useNavigate()
  let isLogged = false

  const loginHandler = () => {
    isLogged = true
    if (isLogged) {
      navigate("/login/dashboard")
      console.log("Navigated to Dashboard")
    }
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center mt-4 py-5">
        <div className="col-6">
          <h1 className="lead py-4">Please log in OR Register</h1>
          <form>
            <div className="input-group mb-3">
              <span className="input-group-text" id="emailAddOn">
                @
              </span>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="emailAddOn"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="passwordAddOn">
                **
              </span>
              <input
                type="text"
                name="password"
                id="password"
                className="form-control"
                placeholder="password"
                aria-label="password"
                aria-describedby="passwordAddOn"
              />
            </div>
            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-md btn-outline-primary"
                onClick={loginHandler}
              >
                Login
              </button>
              <button type="button" className="btn btn-md btn-outline-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
