import React, { Fragment, useState } from 'react'
import '../assets/css/header.css'
import logo from '../assets/img/logo.png'
import searchIcon from '../assets/img/search.svg'
import filterIcon from '../assets/img/filter.svg'
import cartIcon from '../assets/img/cart.svg'
import bellIcon from '../assets/img/bell.svg'
import mailIcon from '../assets/img/mail.svg'
import '../../node_modules/datalist-css/dist/datalist-css'
import '../assets/css/datalist.css'
import '../assets/css/filter.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getProductActionCreator } from '../redux/action/creator/product'

const UserHeader = (props) => {
  const { products, profile } = props
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
            <div className='hstack left-component'>
              <a className='navbar-brand' href='/'>
                <img src={logo} alt='Tokopaedi' loading='lazy' />
              </a>
              <div className='hstack center-component'>
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
                    onClick={(event) => setKeyword(event.target.value)}
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
                <div className='hstack right-component'>
                  <button
                    type='button'
                    className='btn btn-filter'
                    data-bs-toggle='modal'
                    data-bs-target='#filterModal'
                  >
                    <img src={filterIcon} alt='Filter' loading='lazy' />
                  </button>
                  <div className='hstack gap-4'>
                    <div className='hstack gap-2 align-items-center group-btn-navbar'>
                      <button type='button' className='btn btn-cart'>
                        <img src={cartIcon} alt='Cart' loading='lazy' />
                      </button>
                      <button type='button' className='btn btn-bell'>
                        <img src={bellIcon} alt='Notification' loading='lazy' />
                      </button>
                      <button type='button' className='btn btn-mail'>
                        <img src={mailIcon} alt='Mail info' loading='lazy' />
                      </button>
                    </div>
                    <Link to='/profile' className='navbar-avatar'>
                      <img
                        src={`${
                          !profile?.picture
                            ? `https://avatars.dicebear.com/api/identicon/${profile?.email}.svg`
                            : profile?.picture
                        }`}
                        alt={`${profile?.name} Avatar`}
                        width='100%'
                        height='100%'
                        loading='lazy'
                        className='rounded-circle'
                      />
                    </Link>
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
            <ul className='list-group list-group-horizontal mb-3'>
              <li
                onClick={() => navigate('/profile')}
                className='list-group-item list-model-avatar'
              >
                <img
                  src={`${
                    !profile?.picture
                      ? `https://avatars.dicebear.com/api/identicon/${profile?.email}.svg`
                      : profile?.picture
                  }`}
                  alt={`${profile?.name} Avatar`}
                  loading='lazy'
                  width={60}
                  height={60}
                  className='rounded-pill'
                />

                <div className='d-flex flex-column'>
                  <p className='text-break fw-semibold mb-0 avatar-content'>
                    {profile?.name}
                  </p>
                  <p className='text-break fw-bolder avatar-content text-muted'>
                    {profile?.role?.charAt(0).toUpperCase() +
                      profile?.role?.slice(1)}
                  </p>
                </div>
              </li>
            </ul>

            <ul className='list-group list-group-horizontal-lg mb-4'>
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
              <li
                className='list-group-item list-model-btn'
              >
                <img
                  src={bellIcon}
                  alt='Notification'
                  loading='lazy'
                  width={18}
                  height={18}
                />
                Notification
              </li>
              <li
                className='list-group-item list-model-btn'
              >
                <img
                  src={mailIcon}
                  alt='Mail info'
                  loading='lazy'
                  width={18}
                  height={18}
                />
                Mail Info
              </li>
            </ul>

            <div className='search-group'>
              <div className='hstack gap-2 mb-3'>
                <form
                  className='offcanvas-form input-group-lg w-100'
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
                <button
                  type='button'
                  className='btn offcanvas-btn-filter'
                  data-bs-toggle='modal'
                  data-bs-target='#filterModal'
                >
                  <img src={filterIcon} alt='Filter' loading='lazy' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default UserHeader
