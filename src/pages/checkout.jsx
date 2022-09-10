import React, { Fragment, useState } from 'react'
// import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import FilterHeader from '../components/filter.header'
import IndeterminateCheckbox from '../components/indeterminate.checkbox'
import { groceryList } from '../constants/cart.data'
import '../assets/css/cart.css'
import '../assets/css/checkout.css'
import AddressModal from '../components/address.checkout'

const Checkout = () => {
  const [selected, setSelected] = useState([])
  // const indeterminateValue = selected.length > 0 && selected.length < groceryList.length
  // const handleIndeterminateChange = (event) => {
  //   if (event.target.checked) {
  //     setSelected(groceryList)
  //   } else {
  //     setSelected([])
  //   }
  // }

  return (
    <Fragment>
        <UserHeader />
        {/* <GuestHeader /> */}
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="vstack mb-5">
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

                            <button className="btn rounded-pill btn-buy btn-select-address" data-bs-toggle="modal" data-bs-target="#addressModal">
                              Choose another address
                            </button>
                        </div>
                    </div>
                    {groceryList.map((item, index) => (
                        <div key={index} className="hstack align-items-center cart-card cart-card-section-2 mb-3">
                            <div className="form-check cart-form-wrapper">
                                <IndeterminateCheckbox
                                    checked={selected.includes(item)}
                                    className="form-check-input cart-check-box my-auto"
                                    id={`cart-${index}`}
                                    onChange={() => {
                                      if (selected.includes(item)) {
                                        setSelected((s) => s.filter((i) => i !== item))
                                      } else {
                                        setSelected((s) => [...s, item])
                                      }
                                    }}
                                />
                                <div className="box-cart d-flex align-items-center gap-3 w-100">
                                    <img
                                        src="https://cf.shopee.co.id/file/b527293c875ee44e20d5cc3939938660_tn"
                                        className="img-fluid img-fit"
                                        alt="Product Title"
                                    />
                                    <div className="vstack align-self-center font-cart-title fill-cart-box">
                                        <small className="font-cart-product text-truncate truncate-cart-item">Jas Anti AirJas Anti AirJas Anti AirJas Anti AirJas Anti AirJas Anti AirJas Anti AirJas Anti Air</small>
                                        <small className="text-muted font-cart-seller text-truncate">Zalora Cloth</small>
                                    </div>
                                    <div className="d-flex gap-3 cart-btn-group">
                                        <button type="button" className="btn rounded-pill quantity-left-minus">
                                            -
                                        </button>
                                        <span className="cart-card-counter-input">1</span>
                                        <button type="button" className="btn rounded-pill quantity-right-plus">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <strong className="ms-auto truncate-cart-price-item">$ 40.00000000000000000000000000</strong>
                            </div>
                            <strong className="text-center mobile-price-text">$ 40.00000000000000000000000000</strong>
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

                                <button className="btn rounded-pill btn-buy btn-pay-font">
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
    </Fragment>
  )
}

export default Checkout
