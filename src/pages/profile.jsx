import React, { Fragment, useEffect, useState } from 'react'
import ProfileHeader from '../components/profile.header'
import { FiHome, FiShoppingCart } from 'react-icons/fi'
import { RiPencilFill } from 'react-icons/ri'
import { BsBoxSeam } from 'react-icons/bs'
import { BiCategoryAlt } from 'react-icons/bi'
import { Outlet, Link } from 'react-router-dom/dist'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileActionCreator } from '../redux/action/creator/profile'
import { useDocumentTitle } from '@mantine/hooks'

const REACT_APP_NAME = import.meta.env.VITE_APP_TITLE

const Profile = () => {
  useDocumentTitle(`${REACT_APP_NAME} - Profile`)

  const [menuCollapse, setMenuCollapse] = useState('')
  const profile = useSelector((state) => state.profile.get)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfileActionCreator())
  }, [])

  return (
    <Fragment>
      <div className='bg-profile'>
        <ProfileHeader />
        <div className='row row-bar'>
          <div className='col-4 p-5 left-side-navigation height-col-menu'>
            <div className='vstack gap-5 stack-space'>
              <div className='hstack gap-3 mb-5'>
                <a href='#'>
                  <img
                    src={`${
                      !profile?.response?.picture
                        ? `https://avatars.dicebear.com/api/identicon/${profile?.response?.email}.svg`
                        : profile?.response?.picture
                    }`}
                    alt={`${profile?.response?.name} Avatar`}
                    loading='lazy'
                    className='rounded-circle sidebar-avatar'
                  />
                </a>

                <div className='vstack gap-1'>
                  <strong>{profile?.response?.name}</strong>

                  <div className='hstack gap-1'>
                    <RiPencilFill size={20} className='text-muted' />

                    <small className='text-muted'>Ubah Profile</small>
                  </div>
                </div>
              </div>

              <div className='list-stack'>
                <div className='mb-1'>
                  <div className='height-menu-item'>
                    <div className='form-check form-check-reverse'>
                      <label
                        className='form-check-label d-inline label-checkbox'
                        htmlFor='store'
                        onClick={() =>
                          setMenuCollapse(
                            menuCollapse === 'store' ? '' : 'store'
                          )
                        }
                      >
                        <div className='hstack gap-4'>
                          <div className='circle-icon icon-home rounded-pill'>
                            <FiHome size={17} />
                          </div>

                          <strong
                            className={`${
                              menuCollapse === 'store'
                                ? 'label-menu active-menu'
                                : 'label-menu'
                            }`}
                          >
                            {profile?.response?.role === 'seller'
                              ? 'Store'
                              : 'Profile'}
                          </strong>

                          <i
                            className={`${
                              menuCollapse === 'store'
                                ? 'fa fa-chevron-up active-menu  ms-auto'
                                : 'fa fa-chevron-down  ms-auto'
                            }`}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                  {menuCollapse === 'store' && (
                    <div className='vstack gap-3 mb-4 list-link'>
                      <Link to='/profile/edit'>
                        {profile?.response?.role === 'seller'
                          ? 'Store profile'
                          : 'Edit profile'}
                      </Link>
                    </div>
                  )}
                </div>
                {profile?.response?.role === 'admin' && (
                  <div className='mb-1'>
                    <div className='height-menu-item'>
                      <div className='form-check form-check-reverse'>
                        <label
                          className='form-check-label d-inline label-checkbox'
                          htmlFor='category'
                          onClick={() =>
                            setMenuCollapse(
                              menuCollapse === 'category' ? '' : 'category'
                            )
                          }
                        >
                          <div className='hstack gap-4'>
                            <div className='circle-icon icon-category rounded-pill'>
                              <BiCategoryAlt size={17} />
                            </div>

                            <strong
                              className={`${
                                menuCollapse === 'category'
                                  ? 'label-menu active-menu'
                                  : 'label-menu'
                              }`}
                            >
                              Categories
                            </strong>

                            <i
                              className={`${
                                menuCollapse === 'category'
                                  ? 'fa fa-chevron-up active-menu  ms-auto'
                                  : 'fa fa-chevron-down  ms-auto'
                              }`}
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                    {menuCollapse === 'category' && (
                      <div className='vstack gap-3 mb-4 list-link'>
                        <Link to='/profile/categories'>Category List</Link>
                      </div>
                    )}
                  </div>
                )}
                {profile?.response?.role === 'seller' && (
                  <div className='mb-1'>
                    <div className='height-menu-item'>
                      <div className='form-check form-check-reverse'>
                        <label
                          className='form-check-label d-inline label-checkbox'
                          htmlFor='product'
                          onClick={() =>
                            setMenuCollapse(
                              menuCollapse === 'product' ? '' : 'product'
                            )
                          }
                        >
                          <div className='hstack gap-4'>
                            <div className='circle-icon icon-product rounded-pill'>
                              <BsBoxSeam size={17} />
                            </div>

                            <strong
                              className={`${
                                menuCollapse === 'product'
                                  ? 'label-menu active-menu'
                                  : 'label-menu'
                              }`}
                            >
                              Product
                            </strong>

                            <i
                              className={`${
                                menuCollapse === 'product'
                                  ? 'fa fa-chevron-up active-menu  ms-auto'
                                  : 'fa fa-chevron-down  ms-auto'
                              }`}
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                    {menuCollapse === 'product' && (
                      <div className='vstack gap-3 mb-4 list-link'>
                        <Link to='/profile/products'>My products</Link>
                        <Link to='/profile/selling'>Selling products</Link>
                      </div>
                    )}
                  </div>
                )}
                <div className='mb-1'>
                  <div className='height-menu-item'>
                    <div className='form-check form-check-reverse'>
                      <label
                        className='form-check-label d-inline label-checkbox'
                        htmlFor='order'
                        onClick={() =>
                          setMenuCollapse(
                            menuCollapse === 'order' ? '' : 'order'
                          )
                        }
                      >
                        <div className='hstack gap-4'>
                          <div className='circle-icon icon-order rounded-pill'>
                            <FiShoppingCart size={17} />
                          </div>

                          <strong
                            className={`${
                              menuCollapse === 'order'
                                ? 'label-menu active-menu'
                                : 'label-menu'
                            }`}
                          >
                            Order
                          </strong>

                          <i
                            className={`${
                              menuCollapse === 'order'
                                ? 'fa fa-chevron-up active-menu  ms-auto'
                                : 'fa fa-chevron-down  ms-auto'
                            }`}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                  {menuCollapse === 'order' && (
                    <div className='vstack gap-3 mb-4 list-link'>
                      <Link to='/profile/transactions'>My transaction</Link>
                      <a href='/'>Order cancel</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='col p-5 height-col-menu'>
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Profile
