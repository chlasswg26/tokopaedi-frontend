import React, { Fragment } from 'react'
import logo from '../../assets/img/logo.png'
import '../../assets/css/authentication.css'

const Register = () => {
  return (
    <Fragment>
        <div className="container p-4">
            <div className="vstack">
                <div className="vstack mx-auto gap-2 mb-5">
                    <div className="text-center mb-5">
                        <img src={logo} className="img-fluid" alt="Tokopaedi Logo" />
                    </div>

                    <p className="text-center caption">
                        Please sign up with your account
                    </p>

                    <nav className="nav nav-fill">
                        <a type="button" className="nav-link custom-btn-customer" aria-current="page" href="#">Customer</a>
                        <a type="button" className="nav-link custom-btn-seller" aria-current="page" href="#">Seller</a>
                    </nav>
                </div>

                <div className="vstack align-items-center mb-5">
                    <div className="form-floating mb-3 size-input">
                        <input type="text" className="form-control font-input" id="register-name" placeholder="Name" />
                        <label className="font-label" htmlFor="register-name">Name</label>
                    </div>
                    <div className="form-floating mb-3 size-input">
                        <input type="email" className="form-control font-input" id="register-email" placeholder="Email" />
                        <label className="font-label" htmlFor="register-email">Email</label>
                    </div>
                    <div className="form-floating mb-3 size-input">
                        <input type="text" className="form-control font-input" id="register-phone" placeholder="Phone number" />
                        <label className="font-label" htmlFor="register-phone">Phone number</label>
                    </div>
                    <div className="form-floating mb-3 size-input">
                        <input type="text" className="form-control font-input" id="register-store" placeholder="Store name" />
                        <label className="font-label" htmlFor="register-store">Store name</label>
                    </div>
                    <div className="form-floating mb-3 size-input">
                        <input type="password" className="form-control font-input" id="register-password" placeholder="Password" />
                        <label className="font-label" htmlFor="register-password">Password</label>
                    </div>
                </div>

                  <div className="vstack align-items-center gap-5">
                      <button type="button" className="btn rounded-pill btn-login-page">
                        <strong className="btn-primary-auth">Register</strong>
                      </button>

                      <p>
                        {'Already have a Tokopedia account? '}
                        <a type="button" className="btn-link">Login</a>
                      </p>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Register
