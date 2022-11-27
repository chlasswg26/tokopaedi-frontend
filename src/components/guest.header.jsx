import React, { Fragment, useState } from 'react'
import '../assets/css/header.css'
import logo from '../assets/img/logo.png'
import searchIcon from '../assets/img/search.svg'
import cartIcon from '../assets/img/cart.svg'
import '../../node_modules/datalist-css/dist/datalist-css'
import '../assets/css/datalist.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getProductActionCreator } from '../redux/action/creator/product'

const GuestHeader = (props) => {
  const { products } = props
  const [isFocus, setIsFocus] = useState(true)
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const {
    handleSubmit
  } = useForm()
  const dispatch = useDispatch()

  const onBlurDatalist = (event) => {
    setTimeout(() => setIsFocus(false), 500)

    setKeyword(event.target.value)
  }

  const onSearchInput = () => {
    dispatch(getProductActionCreator({
      search: keyword,
      sortBy: localStorage.getItem('order')
    }))

    navigate(
      `/search?search=${
        keyword || localStorage.getItem('category_name')
      }&sortBy=${localStorage.getItem('order')}`
    )
  }

  return (
    <Fragment>
      <header>
        <div className='container'>
          <nav className='navbar'>
            <div className='hstack left-component gap-nav-guest-mobile'>
              <a className='navbar-brand' href='/'>
                <img src={logo} alt='Tokopaedi' loading='lazy' />
              </a>
              <div className='hstack center-component gap-header-guest-mobile'>
                <form
                  className='navbar-form d-flex input-group-lg'
                  role='search'
                  onSubmit={handleSubmit(onSearchInput)}
                >
                  <input
                    className='form-control rounded-pill search-control'
                    type='text'
                    placeholder='Search'
                    aria-label='Search'
                    list='listOfResult'
                    autoComplete='off'
                    id='searchResult'
                    onFocus={() => setIsFocus(true)}
                    onBlur={onBlurDatalist}
                    onClick={(event) => setKeyword(event.target.value)}
                    onChange={(event) => {
                      setIsFocus(true)

                      setKeyword(event.target.value)
                    }}
                  />
                  <datalist
                    id='listOfResult'
                    style={{
                      height: isFocus ? '53vh' : '0vh',
                      width: isFocus ? '35vw!important' : '0vw'
                    }}
                  >
                    {(products || []).slice(0, 10).map((item, index) => (
                      <option key={index} value={item?.title}>
                        {item?.title}
                      </option>
                    ))}
                  </datalist>
                  <button type='submit' className='btn btn-search'>
                    <img src={searchIcon} alt='Search' loading='lazy' />
                  </button>
                </form>
                <div className='hstack right-component gap-3 align-items-center group-btn-navbar'>
                  <button type='button' className='btn btn-cart'>
                    <img src={cartIcon} alt='Cart' loading='lazy' />
                  </button>
                  <div className='hstack align-items-center gap-2'>
                    <button
                      type='button'
                      className='btn rounded-pill btn-login'
                      onClick={() => navigate('/auth/signin')}
                    >
                      Login
                    </button>
                    <button
                      type='button'
                      className='btn rounded-pill btn-register'
                      onClick={() => navigate('/auth/signup')}
                    >
                      Signup
                    </button>
                  </div>
                </div>
              </div>
              <button
                className='navbar-toggler toggler-offcanvas d-xl-none'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasNavbar'
                aria-expanded='false'
                aria-controls='offcanvasNavbar'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
            </div>
          </nav>
        </div>
        <div
          className='offcanvas offcanvas-end d-xl-none'
          data-bs-scroll='true'
          data-bs-backdrop='false'
          tabIndex='-1'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
              Menu
            </h5>
            <button
              type='button'
              className='btn-close btn-toggle-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body'>
            <div className='hstack justify-content-center align-items-center gap-2 mb-4'>
              <button
                type='button'
                className='btn rounded-pill btn-login-offcanvas w-50'
                onClick={() => navigate('/auth/signin')}
              >
                Login
              </button>

              <div className='vr' />

              <button
                type='button'
                className='btn rounded-pill btn-register-offcanvas w-50'
                onClick={() => navigate('/auth/signup')}
              >
                Signup
              </button>
            </div>

            <ul className='list-group list-group-vertical mb-4'>
              <li
                className='list-group-item list-model-btn'
              >
                <img
                  src={cartIcon}
                  alt='Cart'
                  loading='lazy'
                  width={18}
                  height={18}
                />
                Cart
              </li>
            </ul>

            <div className='search-group'>
              <form
                className='offcanvas-form input-group-lg mx-auto mb-3 w-100'
                role='search-2'
                onSubmit={handleSubmit(onSearchInput)}
              >
                <input
                  className='form-control rounded-pill offcanvas-control w-100'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                  onChange={(event) => setKeyword(event.target.value)}
                />
                <button type='submit' className='btn offcanvas-btn-search'>
                  <img src={searchIcon} alt='Search' loading='lazy' />
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default GuestHeader
