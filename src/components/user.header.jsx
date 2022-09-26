import React, { Fragment, useState } from 'react'
import '../assets/css/header.css'
import logo from '../assets/img/logo.png'
import avatar from '../assets/img/avatar.png'
import searchIcon from '../assets/img/search.svg'
import filterIcon from '../assets/img/filter.svg'
import cartIcon from '../assets/img/cart.svg'
import bellIcon from '../assets/img/bell.svg'
import mailIcon from '../assets/img/mail.svg'
import '../../node_modules/datalist-css/dist/datalist-css'
import '../assets/css/datalist.css'
import '../assets/css/filter.css'
import { useNavigate } from 'react-router-dom'

const UserHeader = () => {
  const [isFocus, setIsFocus] = useState(true)
  const navigate = useNavigate()

  const onBlurDatalist = () => {
    setTimeout(() => setIsFocus(false), 500)
  }

  return (
        <Fragment>
          <header>
            <div className="container">
                <nav className="navbar">
                    <div className="hstack left-component">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="Tokopaedi" loading="lazy" />
                        </a>
                        <div className="hstack center-component">
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
                                <button type="button" className="btn btn-search" onClick={() => navigate('/search')}>
                                    <img src={searchIcon} alt="Search" loading="lazy" />
                                </button>
                            </form>
                            <div className="hstack right-component">
                                <button type="button" className="btn btn-filter" data-bs-toggle="modal" data-bs-target="#filterModal">
                                    <img src={filterIcon} alt="Filter" loading="lazy" />
                                </button>
                                <div className="hstack gap-4">
                                    <div className="hstack gap-2 align-items-center group-btn-navbar">
                                        <button type="button" className="btn btn-cart">
                                            <img src={cartIcon} alt="Cart" loading="lazy" />
                                        </button>
                                        <button type="button" className="btn btn-bell">
                                            <img src={bellIcon} alt="Notification" loading="lazy" />
                                        </button>
                                        <button type="button" className="btn btn-mail">
                                            <img src={mailIcon} alt="Mail info" loading="lazy" />
                                        </button>
                                    </div>
                                    <a href="#" className="navbar-avatar">
                                        <img
                                            src={avatar}
                                            alt="Tokopaedi"
                                            loading="lazy"
                                            className="rounded-circle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button className="navbar-toggler toggler-offcanvas d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-expanded="false" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
              <div className="offcanvas offcanvas-end d-xl-none" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                      <button type="button" className="btn-close btn-toggle-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                      <ul className="list-group list-group-horizontal mb-3">
                        <li onClick={() => console.log('clicked avatar')} className="list-group-item list-model-avatar">
                            <img
                                src={avatar}
                                alt="Tokopaedi"
                                loading="lazy"
                                width={60}
                                height={60}
                                className="rounded-pill" />

                            <div className="d-flex flex-column">
                                <p className="text-break fw-semibold mb-0 avatar-content">
                                      Ichlas Wardy Gustama
                                </p>
                                <p className="text-break fw-bolder avatar-content text-muted">
                                    Admin
                                </p>
                            </div>
                        </li>
                      </ul>

                      <ul className="list-group list-group-horizontal-lg mb-4">
                          <li onClick={() => console.log('clicked cart')} className="list-group-item list-model-btn">
                            <img
                                src={cartIcon}
                                alt="Cart"
                                loading="lazy"
                                width={18}
                                height={18} />
                            Cart
                          </li>
                          <li onClick={() => console.log('clicked notification')} className="list-group-item list-model-btn">
                              <img
                                  src={bellIcon}
                                  alt="Notification"
                                  loading="lazy"
                                  width={18}
                                  height={18} />
                              Notification
                          </li>
                          <li onClick={() => console.log('clicked mail info')} className="list-group-item list-model-btn">
                              <img
                                  src={mailIcon}
                                  alt="Mail info"
                                  loading="lazy"
                                  width={18}
                                  height={18} />
                              Mail Info
                          </li>
                      </ul>

                      <div className="search-group">
                        <div className="hstack gap-2 mb-3">
                            <form className="offcanvas-form input-group-lg" role="search-2">
                                <input className="form-control rounded-pill offcanvas-control" type="text" placeholder="Search" aria-label="Search" />
                                <button type="button" className="btn offcanvas-btn-search">
                                    <img src={searchIcon} alt="Search" loading="lazy" />
                                </button>
                            </form>
                            <button type="button" className="btn offcanvas-btn-filter" data-bs-toggle="modal" data-bs-target="#filterModal">
                                <img src={filterIcon} alt="Filter" loading="lazy" />
                            </button>
                        </div>

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

export default UserHeader
