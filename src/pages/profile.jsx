import React, { Fragment, useState } from 'react'
import ProfileHeader from '../components/profile.header'
import avatar from '../assets/img/avatar.png'
import { FiHome, FiShoppingCart } from 'react-icons/fi'
import { RiPencilFill } from 'react-icons/ri'
import { BsBoxSeam } from 'react-icons/bs'

const Profile = () => {
  const [menuCollapse, setMenuCollapse] = useState('')

  return (
    <Fragment>
        <ProfileHeader />
        <div className="container">
          <div className="row row-bar">
            <div className="col-4 p-5 left-side-navigation height-col-menu">
              <div className="vstack gap-5">
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
                      <div className="vstack gap-2 mb-4 list-link">
                        <a href="/">
                          Test 1
                        </a>
                        <a href="/">
                          Test 2
                        </a>
                        <a href="/">
                          Test 3
                        </a>
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
                      <div className="vstack gap-2 mb-4 list-link">
                        <a href="/">
                          Test 1
                        </a>
                        <a href="/">
                          Test 2
                        </a>
                        <a href="/">
                          Test 3
                        </a>
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
                      <div className="vstack gap-2 mb-4 list-link">
                        <a href="/">
                          Test 1
                        </a>
                        <a href="/">
                          Test 2
                        </a>
                        <a href="/">
                          Test 3
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 p-5">
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button with data-bs-target
              </button>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Profile
