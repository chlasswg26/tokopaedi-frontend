import React, { Fragment } from 'react'
import logo from '../assets/img/logo.png'
import bellIcon from '../assets/img/bell.svg'
import mailIcon from '../assets/img/mail.svg'
import avatar from '../assets/img/avatar.png'
import '../assets/css/profile.css'

const ProfileHeader = () => {
  return (
    <Fragment>
        <header className="header-profile">
            <div className="container">
                <div className="navbar">
                    <div className="container-fluid">
                        <div className="hstack w-100 justify-content-between nav-gap-on-mobile">
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="Tokopaedi" loading="lazy" />
                            </a>

                            <div className="hstack gap-3">
                                <button type="button" className="btn btn-bell hide-on-mobile">
                                    <img src={bellIcon} alt="Notification" loading="lazy" />
                                </button>
                                <button type="button" className="btn btn-mail hide-on-mobile">
                                    <img src={mailIcon} alt="Mail info" loading="lazy" />
                                </button>

                                <a href="#" className="navbar-avatar">
                                    <img
                                        src={avatar}
                                        alt="Tokopaedi"
                                        loading="lazy"
                                        className="rounded-circle" />
                                </a>

                                <button className="navbar-toggler toggler-offcanvas d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-expanded="false" aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </Fragment>
  )
}

export default ProfileHeader
