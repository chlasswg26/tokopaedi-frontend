import React, { Fragment } from 'react'
// import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import ImageGallery from 'react-image-gallery'
import '../assets/css/product.css'
import Image1 from '../assets/img/product-1.png'
import Image2 from '../assets/img/product-2.png'
import Image3 from '../assets/img/product-3.png'
import Image4 from '../assets/img/product-4.png'
import Image5 from '../assets/img/product-5.png'

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
  return (
    <Fragment>
        <UserHeader />
        {/* <GuestHeader /> */}
        <div className="container">
            <div className="row">
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
                    <strong>Baju muslim pria</strong>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Product
