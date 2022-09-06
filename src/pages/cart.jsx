import React, { Fragment, useState } from 'react'
// import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import FilterHeader from '../components/filter.header'
import IndeterminateCheckbox from '../components/indeterminate.checkbox'
import { groceryList } from '../constants/cart.data'
import '../assets/css/cart.css'

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

  return (
    <Fragment>
        <UserHeader />
        {/* <GuestHeader /> */}
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="vstack mb-5">
                        <h1><strong>My Bag</strong></h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-7">
                    <div className="hstack align-items-center justify-content-between cart-card mb-5">
                        <div className="form-check cart-form-wrapper">
                            <IndeterminateCheckbox
                                checked={selected.length === groceryList.length}
                                indeterminate={indeterminateValue}
                                onChange={handleIndeterminateChange}
                                className="form-check-input cart-check-box"
                                id="checkCart"
                            />
                            <label className="form-check-label font-cart-title truncate-cart-title" htmlFor="checkCart">
                                Select all items <small className="text-muted">(2 items selected)</small>
                            </label>
                        </div>
                        <strong type="button" className="align-items-start delete-cart">Delete</strong>
                    </div>
                    <div className="vstack gap-2">
                        {groceryList.map((item, index) => (
                            <div key={index} className="hstack align-items-center justify-content-between cart-card">
                                <div className="form-check cart-form-wrapper">
                                    <IndeterminateCheckbox
                                        checked={selected.includes(item)}
                                        className="form-check-input cart-check-box"
                                        id={`cart-${index}`}
                                        onChange={() => {
                                          if (selected.includes(item)) {
                                            setSelected((s) => s.filter((i) => i !== item))
                                          } else {
                                            setSelected((s) => [...s, item])
                                          }
                                        }}
                                    />
                                    <label className="form-check-label font-cart-title truncate-cart-title" htmlFor={`cart-${index}`}>
                                        {item}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <FilterHeader />
    </Fragment>
  )
}

export default Cart
