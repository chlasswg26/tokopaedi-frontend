import React, { Fragment, useState } from 'react'
import ProfileHeader from '../components/profile.header'
import avatar from '../assets/img/avatar.png'
import { FiHome, FiShoppingCart } from 'react-icons/fi'
import { RiPencilFill } from 'react-icons/ri'
import { BsBoxSeam } from 'react-icons/bs'
import { Outlet, Link } from 'react-router-dom/dist'

const Profile = () => {
  const [menuCollapse, setMenuCollapse] = useState('')

  return (
    <Fragment>
      <div className="bg-profile">
        <ProfileHeader />
        <div className="row row-bar">
          <div className="col-4 p-5 left-side-navigation height-col-menu">
            <div className="vstack gap-5 stack-space">
              <div className="hstack gap-3 mb-5">
                <a href="#">
                  <img
                    src={avatar}
                    alt="Tokopaedi"
                    loading="lazy"
                    className="rounded-circle sidebar-avatar" />
                </a>

                <div className="vstack gap-1">
                  <strong>Johanes Mikael</strong>

                  <div className="hstack gap-1">
                    <RiPencilFill size={20} className="text-muted" />

                    <small className="text-muted">
                      Ubah Profile
                    </small>
                  </div>
                </div>
              </div>

              <div className="list-stack">
                <div className="mb-1">
                  <div className="height-menu-item">
                    <div className="form-check form-check-reverse">
                      <label
                        className="form-check-label d-inline label-checkbox"
                        htmlFor="store"
                        onClick={() => setMenuCollapse(menuCollapse === 'store' ? '' : 'store')}>
                        <div className="hstack gap-4">
                          <div className="circle-icon icon-home rounded-pill">
                            <FiHome size={17} />
                          </div>

                          <strong className={`${menuCollapse === 'store' ? 'label-menu active-menu' : 'label-menu'}`}>Store</strong>

                          <i className={`${menuCollapse === 'store' ? 'fa fa-chevron-up active-menu  ms-auto' : 'fa fa-chevron-down  ms-auto'}`} />
                        </div>
                      </label>
                    </div>
                  </div>
                  {(menuCollapse === 'store') && (
                    <div className="vstack gap-3 mb-4 list-link">
                      <Link to="/profile/edit">
                        Store profile
                      </Link>
                    </div>
                  )}
                </div>
                <div className="mb-1">
                  <div className="height-menu-item">
                    <div className="form-check form-check-reverse">
                      <label
                        className="form-check-label d-inline label-checkbox"
                        htmlFor="product"
                        onClick={() => setMenuCollapse(menuCollapse === 'product' ? '' : 'product')}>
                        <div className="hstack gap-4">
                          <div className="circle-icon icon-product rounded-pill">
                            <BsBoxSeam size={17} />
                          </div>

                          <strong className={`${menuCollapse === 'product' ? 'label-menu active-menu' : 'label-menu'}`}>Product</strong>

                          <i className={`${menuCollapse === 'product' ? 'fa fa-chevron-up active-menu  ms-auto' : 'fa fa-chevron-down  ms-auto'}`} />
                        </div>
                      </label>
                    </div>
                  </div>
                  {(menuCollapse === 'product') && (
                    <div className="vstack gap-3 mb-4 list-link">
                      <a href="/">
                        My product
                      </a>
                      <Link to="/profile/selling">
                        Selling products
                      </Link>
                    </div>
                  )}
                </div>
                <div className="mb-1">
                  <div className="height-menu-item">
                    <div className="form-check form-check-reverse">
                      <label
                        className="form-check-label d-inline label-checkbox"
                        htmlFor="order"
                        onClick={() => setMenuCollapse(menuCollapse === 'order' ? '' : 'order')}>
                        <div className="hstack gap-4">
                          <div className="circle-icon icon-order rounded-pill">
                            <FiShoppingCart size={17} />
                          </div>

                          <strong className={`${menuCollapse === 'order' ? 'label-menu active-menu' : 'label-menu'}`}>Order</strong>

                          <i className={`${menuCollapse === 'order' ? 'fa fa-chevron-up active-menu  ms-auto' : 'fa fa-chevron-down  ms-auto'}`} />
                        </div>
                      </label>
                    </div>
                  </div>
                  {(menuCollapse === 'order') && (
                    <div className="vstack gap-3 mb-4 list-link">
                      <a href="/">
                        My order
                      </a>
                      <a href="/">
                        Order cancel
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col p-5 height-col-menu">
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Profile
