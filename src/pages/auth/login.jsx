import React, { Fragment } from 'react'
import logo from '../../assets/img/logo.png'
import '../../assets/css/authentication.css'

const Login = () => {
  return (
    <Fragment>
        <div className="container p-4">
            <div className="vstack">
                <div className="vstack mx-auto gap-2 mb-5">
                    <div className="text-center mb-5">
                        <img src={logo} className="img-fluid" alt="Tokopaedi Logo" />
                    </div>

                    <p className="text-center caption">
                        Please login with your account
                    </p>

                    <nav className="nav nav-fill">
                        <a type="button" className="nav-link custom-btn-customer" aria-current="page" href="#">Customer</a>
                        <a type="button" className="nav-link custom-btn-seller" aria-current="page" href="#">Seller</a>
                    </nav>
                </div>

                <div className="vstack align-items-center mb-5">
                    <div className="form-floating mb-3 size-input">
                        <input type="email" className="form-control font-input" id="login-email" placeholder="Email" />
                        <label className="font-label" htmlFor="login-email">Email</label>
                    </div>
                    <div className="form-floating mb-3 size-input">
                        <input type="password" className="form-control font-input" id="login-password" placeholder="Password" />
                        <label className="font-label" htmlFor="login-password">Password</label>
                    </div>
                </div>

                  <div className="vstack align-items-center gap-5">
                      <button type="button" className="btn rounded-pill btn-login-page">
                        <strong className="btn-primary-auth">Login</strong>
                      </button>

                      <p>
                        {'Don\'t have a Tokopaedi account? '}
                        <a type="button" className="btn-link">Register</a>
                      </p>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Login
