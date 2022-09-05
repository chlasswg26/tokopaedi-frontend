import React, { Fragment } from 'react'
import '../assets/css/product.card.css'

const ProductCard = () => {
  return (
    <Fragment>
        <div className="card card-product-1">
            <img src="https://cf.shopee.co.id/file/d03bb07aa7c42b05c479bcc5d867c2bb_tn" className="card-img-top" alt="Demo" />
            <div className="card-body">
                <h5 className="card-title truncate-title-product">{'Men\'s formal suit - Black & White'}</h5>
                <h5 className="card-price truncate-price-product">$ 40.0</h5>
                <p className="card-text truncate-seller-product"><small className="text-muted">Zalora Cloth</small></p>
                <div className="wrapper-rating">
                    <div className="ratings">
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h5 className="review-count">(10)</h5>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default ProductCard
