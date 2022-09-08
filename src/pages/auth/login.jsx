import React, { Fragment } from 'react'
import logo from '../../assets/img/logo.png'
import '../../assets/css/login.css'

const Login = () => {
  return (
    <Fragment>
        <div className="container p-5">
            <div className="vstack">
                <div className="vstack mx-auto gap-5">
                    <div className="text-center">
                        <img src={logo} className="img-fluid" alt="..." />
                    </div>

                    <p className="text-center caption">
                        Please login with your account
                    </p>

                    <nav className="nav nav-fill">
                        <a type="button" className="nav-link custom-btn-customer" aria-current="page" href="#">Customer</a>
                        <a type="button" className="nav-link custom-btn-seller" aria-current="page" href="#">Seller</a>
                    </nav>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Login
