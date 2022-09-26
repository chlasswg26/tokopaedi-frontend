import React, { Fragment, useEffect, useState } from 'react'
// import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import ImageGallery from 'react-image-gallery'
import '../assets/css/product.css'
import Image1 from '../assets/img/product-1.png'
import Image2 from '../assets/img/product-2.png'
import Image3 from '../assets/img/product-3.png'
import Image4 from '../assets/img/product-4.png'
import Image5 from '../assets/img/product-5.png'
import FilterHeader from '../components/filter.header'
import Popout from '../components/popout'
import ProductCard from '../components/product.card'
import { useNavigate } from 'react-router-dom'

const images = [
  {
    original: Image1,
    thumbnail: Image1,
    originalWidth: 367,
    originalHeight: 378
  },
  {
    original: Image2,
    thumbnail: Image2,
    originalWidth: 367,
    originalHeight: 378
  },
  {
    original: Image3,
    thumbnail: Image3,
    originalWidth: 367,
    originalHeight: 378
  },
  {
    original: Image4,
    thumbnail: Image4,
    originalWidth: 367,
    originalHeight: 378
  },
  {
    original: Image5,
    thumbnail: Image5,
    originalWidth: 367,
    originalHeight: 378
  },
  {
    original: Image5,
    thumbnail: Image5,
    originalWidth: 367,
    originalHeight: 378
  },
  {
    original: Image5,
    thumbnail: Image5,
    originalWidth: 367,
    originalHeight: 378
  },
  {
    original: Image5,
    thumbnail: Image5,
    originalWidth: 367,
    originalHeight: 378
  }
]

const Product = () => {
  const [colorValue, setColorValue] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (colorValue) console.log(colorValue)
  }, [colorValue])

  return (
    <Fragment>
      <UserHeader />
      {/* <GuestHeader /> */}
      <div className="container mb-5">
        <div className="row gx-4 mb-5">
            <div className="col-12">
                <nav className="breadcrumb-divider" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item">category</li>
                        <li className="breadcrumb-item active" aria-current="page"><p className="truncate-page-search">T-Shirt</p></li>
                    </ol>
                </nav>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
                <ImageGallery
                    items={images}
                    lazyLoad={true}
                    showNav={false}
                    showPlayButton={false}
                    showBullets={false}
                    autoPlay={false}
                    onErrorImageURL='https://via.placeholder.com/150/mediumseagreen/white?Text=Bad%20Image'
                />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8">
              <div className="vstack gap-3 mb-4">
                <strong className="product-title truncate-product-title">Baju muslim pria</strong>
                <small className="text-muted seller-title">Zalora Cloth</small>
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

              <div className="vstack gap-1 mb-4">
                <small className="text-muted seller-title">Price</small>
                <strong className="bolder-price">$ 20.0</strong>
              </div>

              <div className="vstack bottom-color p-0 mb-5">
                <p className="modal-filter-title">Color</p>

                <fieldset onChange={(event) => setColorValue(event.target.value)} className="hstack filter-color-gap">
                  <input type="radio" name="productColor" id="darker" value="darker" />
                  <label htmlFor="darker"><span className={`${colorValue === 'darker' ? 'darker is-product-color-active' : 'darker'} custom-size-btn-color`}></span></label>

                  <input type="radio" name="productColor" id="crimson" value="crimson" />
                  <label htmlFor="crimson"><span className={`${colorValue === 'crimson' ? 'crimson shadow-sm is-product-color-active' : 'crimson shadow-sm'} custom-size-btn-color`}></span></label>

                  <input type="radio" name="productColor" id="blueish" value="blueish" />
                  <label htmlFor="blueish"><span className={`${colorValue === 'blueish' ? 'blueish is-product-color-active' : 'blueish'} custom-size-btn-color`}></span></label>

                  <input type="radio" name="productColor" id="seagreen" value="seagreen" />
                  <label htmlFor="seagreen"><span className={`${colorValue === 'seagreen' ? 'seagreen is-product-color-active' : 'seagreen'} custom-size-btn-color`}></span></label>
                </fieldset>
              </div>

              <div className="hstack align-items-start gap-5 mb-5">
                <Popout />

                <div className="vstack gap-1">
                  <strong className="count-title">Jumlah</strong>
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
              </div>

              <div className="hstack gap-3 group-on-mobile mb-5">
                <button className="btn btn-chat product-btn-font-size">Chat</button>
                <button className="btn btn-add-bag product-btn-font-size" style={{ cursor: 'pointer' }} onClick={() => navigate('/cart')}>Add bag</button>
                <button className="btn btn-buying product-btn-font-size">Buy</button>
              </div>
            </div>
        </div>
        <div className="row gx-4 mb-5">
          <div className="col-12 mb-5">
            <h1>
              <strong>
                Informasi Produk
              </strong>
            </h1>
          </div>

          <div className="col-12 mb-5">
            <div className="vstack gap-2">
              <strong className="condition-title">Condition</strong>
              <strong className="condition-label">New</strong>
            </div>
          </div>

          <div className="col-12 mb-5">
            <div className="vstack gap-2">
              <strong className="description-title">Description</strong>
              <dd className="description-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
<br />
Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum.
Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.<br />
<br />
Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.<br />
<br />
In ultricies rutrum tempus. Mauris vel molestie orci.</dd>
            </div>
          </div>

          <hr />
        </div>
        <div className="row gap-4">
          <div className="col">
            <div className="vstack">
              <h2 className="dashboard-title">You can also like this</h2>
              <span className="dashboard-caption">You&apos;ve never seen it before!</span>
            </div>
          </div>
          <div className="container justify-content-center">
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
              <div className="col p-1">
                <ProductCard />
              </div>
              <div className="col p-1">
                <ProductCard />
              </div>
              <div className="col p-1">
                <ProductCard />
              </div>
              <div className="col p-1">
                <ProductCard />
              </div>
              <div className="col p-1">
                <ProductCard />
              </div>
              <div className="col p-1">
                <ProductCard />
              </div>
              <div className="col p-1">
                <ProductCard />
              </div>
              <div className="col p-1">
                <ProductCard />
              </div>
              <div className="col p-1">
                <ProductCard />
              </div>
              <div className="col p-1">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FilterHeader />
    </Fragment>
  )
}

export default Product
