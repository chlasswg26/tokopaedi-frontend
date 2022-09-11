import React, { Fragment } from 'react'
// import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import FilterHeader from '../components/filter.header'
import { groceryList } from '../constants/cart.data'
import '../assets/css/cart.css'
import '../assets/css/checkout.css'
import AddressModal from '../components/address.checkout'
import PaymentModal from '../components/payment.modal'

const Checkout = () => {
  return (
    <Fragment>
        <UserHeader />
        {/* <GuestHeader /> */}
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="vstack mb-4">
                        <h1><strong>Checkout</strong></h1>
                    </div>
                </div>
            </div>
            <div className="row gy-4">
                <strong>
                  Shipping Address
                </strong>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7">
                    <div className="hstack align-items-center justify-content-between cart-card mb-5">
                        <div className="vstack gap-4">
                            <div className="vstack gap-3">
                              <strong>
                                Andreas Jane
                              </strong>
                              <small>
                                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
                              </small>
                            </div>

                            <button className="btn rounded-pill btn-buy btn-select-address btn-choose-address" data-bs-toggle="modal" data-bs-target="#addressModal">
                              Choose another address
                            </button>
                        </div>
                    </div>
                    {groceryList.map((item, index) => (
                        <div key={index} className="hstack align-items-center cart-card cart-card-section-2 mb-3">
                            <div className="cart-form-wrapper">
                                <div className="box-checkout d-flex align-items-center gap-3 w-100">
                                    <img
                                        src="https://cf.shopee.co.id/file/b527293c875ee44e20d5cc3939938660_tn"
                                        className="img-fluid img-fit"
                                        alt="Product Title"
                                    />
                                    <div className="vstack align-self-center font-cart-title fill-cart-box checkout-product-title">
                                        <small className="font-cart-product text-truncate truncate-cart-item">Jas Anti AirJas Anti AirJas Anti AirJas Anti AirJas Anti AirJas Anti AirJas Anti AirJas Anti Air</small>
                                        <small className="text-muted font-cart-seller text-truncate">Zalora Cloth</small>
                                    </div>
                                    <strong className="ms-auto truncate-cart-price-item">$ 40.00000000000000000000000000</strong>
                                </div>
                            </div>
                            <strong className="text-center mobile-price-text">$ 40.00000</strong>
                        </div>
                    ))}
                </div>
                <div className="col">
                    <div className="hstack align-items-center justify-content-between cart-card mb-5">
                        <div className="vstack gap-4">
                            <strong>
                              Shopping summary
                            </strong>

                            <div className="vstack gap-5">
                                <div className="vstack gap-1">
                                  <div className="hstack justify-content-between">
                                    <strong className="text-muted">Order</strong>
                                    <strong className="price-checkout-font">$ 40.0</strong>
                                  </div>

                                  <div className="hstack justify-content-between">
                                    <strong className="text-muted">Delivery</strong>
                                    <strong className="price-checkout-font">$ 40.0</strong>
                                  </div>

                                  <hr />

                                  <div className="hstack justify-content-between">
                                    <strong>
                                      Shopping summary
                                    </strong>
                                    <strong className="price-checkout-font summary-font-color">$ 40.0</strong>
                                  </div>
                                </div>

                                <button className="btn rounded-pill btn-buy btn-pay-font" data-bs-toggle="modal" data-bs-target="#paymentModal">
                                  Select payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FilterHeader />
        <AddressModal />
        <PaymentModal />
    </Fragment>
  )
}

export default Checkout
