import React, { Fragment, useState } from 'react'
import '../assets/css/header.css'
import logo from '../assets/img/logo.png'
import searchIcon from '../assets/img/search.svg'
import cartIcon from '../assets/img/cart.svg'
import '../../node_modules/datalist-css/dist/datalist-css'
import '../assets/css/datalist.css'

const GuestHeader = () => {
  const [isFocus, setIsFocus] = useState(true)

  const onBlurDatalist = () => {
    setTimeout(() => setIsFocus(false), 500)
  }

  return (
        <Fragment>
            <header>
                <div className="container">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <div className="hstack left-component">
                                <a className="navbar-brand" href="/">
                                    <img src={logo} alt="Tokopaedi" loading="lazy" />
                                </a>
                                <div className="hstack center-component gap-5">
                                <form className="navbar-form d-flex input-group-lg" role="search">
                                        <input
                                            className="form-control rounded-pill search-control"
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                            list="listOfResult"
                                            autoComplete="off"
                                            id="searchResult"
                                            onFocus={() => setIsFocus(true)}
                                            onBlur={() => onBlurDatalist()}
                                            onClick={(event) => console.log('option clicked', event)}
                                            onChange={() => setIsFocus(true)} />
                                        <datalist id="listOfResult" style={{ height: isFocus ? '53vh' : '0vh', width: isFocus ? '35vw!important' : '0vw' }}>
                                            <option key={0} value="San Francisco">
                                                San Francisco
                                            </option>
                                            <option key={1} value="New York">
                                                New York
                                            </option>
                                            <option key={2} value="Seattle">
                                                Seattle
                                            </option>
                                            <option key={3} value="Los Angeles">
                                                Los Angeles
                                            </option>
                                            <option key={4} value="Chicago">
                                                Chicago
                                            </option>
                                            <option key={5} value="San Francisco">
                                                San Francisco
                                            </option>
                                            <option key={6} value="New York">
                                                New York
                                            </option>
                                            <option key={7} value="Seattle">
                                                Seattle
                                            </option>
                                            <option key={8} value="Los Angeles">
                                                Los Angeles
                                            </option>
                                            <option key={9} value="Chicago">
                                                Chicago
                                            </option>
                                            <option key={10} value="San Francisco">
                                                San Francisco
                                            </option>
                                            <option key={11} value="New York">
                                                New York
                                            </option>
                                            <option key={12} value="Seattle">
                                                Seattle
                                            </option>
                                            <option key={13} value="Los Angeles">
                                                Los Angeles
                                            </option>
                                            <option key={14} value="Chicago">
                                                Chicago
                                            </option>
                                        </datalist>
                                        <button type="button" className="btn btn-search">
                                            <img src={searchIcon} alt="Search" loading="lazy" />
                                        </button>
                                    </form>
                                <div className="hstack right-component gap-3 align-items-center group-btn-navbar">
                                    <button type="button" className="btn btn-cart">
                                        <img src={cartIcon} alt="Cart" loading="lazy" />
                                    </button>
                                    <div className="hstack align-items-center gap-2">
                                        <button type="button" className="btn rounded-pill btn-login">
                                            Login
                                        </button>
                                        <button type="button" className="btn rounded-pill btn-register">
                                            Signup
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                <button className="navbar-toggler toggler-offcanvas d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-expanded="false" aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="offcanvas offcanvas-end d-xl-none" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close btn-toggle-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="hstack justify-content-center align-items-center gap-2 mb-4">
                            <button type="button" className="btn rounded-pill btn-login-offcanvas w-50">
                                Login
                            </button>

                            <div className="vr" />

                            <button type="button" className="btn rounded-pill btn-register-offcanvas w-50">
                                Signup
                            </button>
                        </div>

                        <ul className="list-group list-group-vertical mb-4">
                            <li onClick={() => console.log('clicked cart')} className="list-group-item list-model-btn">
                                <img
                                    src={cartIcon}
                                    alt="Cart"
                                    loading="lazy"
                                    width={18}
                                    height={18} />
                                Cart
                            </li>
                      </ul>

                        <div className="search-group">
                            <form className="offcanvas-form input-group-lg mx-auto mb-3" role="search-2">
                                <input className="form-control rounded-pill offcanvas-control" type="text" placeholder="Search" aria-label="Search" />
                                <button type="button" className="btn offcanvas-btn-search">
                                    <img src={searchIcon} alt="Search" loading="lazy" />
                                </button>
                            </form>

                            <span>Search result of <b className="list-result text-truncate">keywords</b></span>

                            <ul className="list-group list-group-vertical list-group-numbered list-group-flush">
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">An item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A second item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A third item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A fourth item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">And a fifth one</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">An item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A second item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A third item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A fourth item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">And a fifth one</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">An item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A second item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A third item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A fourth item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">And a fifth one</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">An item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A second item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A third item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A fourth item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">And a fifth one</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">An item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A second item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A third item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">A fourth item</li>
                                <li onClick={() => console.log('clicked result')} className="list-group-item list-result text-truncate">And a fifth one</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
  )
}

export default GuestHeader
