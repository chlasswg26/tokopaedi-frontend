import React, { Fragment, useState } from 'react'
// import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import FilterHeader from '../components/filter.header'
import IndeterminateCheckbox from '../components/indeterminate.checkbox'
import { groceryList } from '../constants/cart.data'
import '../assets/css/cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [selected, setSelected] = useState([])
  const indeterminateValue = selected.length > 0 && selected.length < groceryList.length
  const handleIndeterminateChange = (event) => {
    if (event.target.checked) {
      setSelected(groceryList)
    } else {
      setSelected([])
    }
  }
  const navigate = useNavigate()

  return (
    <Fragment>
        <UserHeader />
        {/* <GuestHeader /> */}
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="vstack mb-4">
                        <h1><strong>My Bag</strong></h1>
                    </div>
                </div>
            </div>
            <div className="row gy-4">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7">
                    <div className="hstack align-items-center justify-content-between cart-card mb-5">
                        <div className="form-check cart-form-wrapper mb-0">
                            <IndeterminateCheckbox
                                checked={selected.length === groceryList.length}
                                indeterminate={indeterminateValue}
                                onChange={handleIndeterminateChange}
                                className="form-check-input cart-check-box my-auto"
                                id="checkCart"
                            />
                            <label className="form-check-label font-cart-title truncate-cart-title cart-section-title" htmlFor="checkCart">
                                Select all items <small className="text-muted">(2 items selected)</small>
                            </label>
                        </div>
                        <strong type="button" className="align-items-start delete-cart">Delete</strong>
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
                        <div className="vstack gap-5">
                            <strong>
                                Shopping summary
                            </strong>

                            <div className="vstack gap-4">
                                  <div className="hstack justify-content-between">
                                      <strong className="text-muted">Total price</strong>
                                      <strong className="price-checkout-font">$ 40.0</strong>
                                  </div>
                                    <button className="btn rounded-pill btn-buy" style={{ cursor: 'pointer' }} onClick={() => navigate('/checkout')}>
                                        Buy
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FilterHeader />
    </Fragment>
  )
}

export default Cart
