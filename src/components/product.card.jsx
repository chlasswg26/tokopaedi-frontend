import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/product.card.css'

const ProductCard = (props) => {
  const { product } = props
  const navigate = useNavigate()

  const rupiahFormat = new Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR'
  })
    .format(product?.price)
    .replace(/[IDR]/gi, '')
    .replace(/(\.+\d{2})/, '')
    .replace(',', '.')
    .replace(',', '.')
    .trimStart()

  return (
    <Fragment>
      <div
        className='card card-product-1'
        style={{ cursor: 'pointer' }}
        onClick={() => navigate(`/product/${product?.id}`)}
      >
        <img
          src={product?.thumbnail}
          alt={`${product?.title} thumbnail`}
          className='card-img-top'
        />
        <div className='card-body'>
          <h5 className='card-title truncate-title-product'>
            {product?.title}
          </h5>
          <h5 className='card-price truncate-price-product'>Rp {rupiahFormat}</h5>
          <p className='card-text truncate-seller-product'>
            {product?.seller?.name}
          </p>
          <div className='wrapper-rating'>
            <div className='ratings'>
              <i className='fa fa-star rating-color'></i>
              <i className='fa fa-star rating-color'></i>
              <i className='fa fa-star rating-color'></i>
              <i className='fa fa-star rating-color'></i>
              <i className='fa fa-star'></i>
            </div>
            <h5 className='review-count'>(10)</h5>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductCard
