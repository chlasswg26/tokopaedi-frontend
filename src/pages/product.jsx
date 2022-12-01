import React, { Fragment, useEffect, useRef, useState } from 'react'
import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import ImageGallery from 'react-image-gallery'
import '../assets/css/product.css'
import FilterHeader from '../components/filter.header'
import SelectSize from '../components/select.size'
import ProductCard from '../components/product.card'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductActionCreator, getProductByIdActionCreator } from '../redux/action/creator/product'
import { getProfileActionCreator } from '../redux/action/creator/profile'
import { useDidUpdate } from '@mantine/hooks'
import { decode } from 'html-entities'
import { postTransactionActionCreator } from '../redux/action/creator/transaction'
import toast from 'react-hot-toast'

const Product = () => {
  const [colorValue, setColorValue] = useState('')
  const profile = useSelector((state) => state.profile.get)
  const products = useSelector((state) => state.product.get)
  const productById = useSelector((state) => state.product.getById)
  const navigate = useNavigate()
  const isDashboardMounted = useRef()
  const [header, setHeader] = useState(false)
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const { productId } = useParams()
  const postTransaction = useSelector(state => state.transaction.post)
  const rupiahFormat = new Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR'
  })
    .format(productById?.response?.price)
    .replace(/[IDR]/gi, '')
    .replace(/(\.+\d{2})/, '')
    .replace(',', '.')
    .replace(',', '.')
    .trimStart()

  const onBuyProduct = () => {
    dispatch(postTransactionActionCreator({
      product_id: productId,
      quantity: count,
      price: count * productById?.response?.price
    }))
  }

  useEffect(() => {
    if (!isDashboardMounted.current) {
      dispatch(getProductActionCreator({ limit: 10 }))
      dispatch(getProfileActionCreator())
      dispatch(getProductByIdActionCreator(productId))

      isDashboardMounted.current = true
    } else {
      if (profile?.isFulfilled) {
        setHeader(true)
      } else {
        setHeader(false)
      }
    }
  }, [profile])

  useDidUpdate(() => {
    dispatch(getProductByIdActionCreator(productId))
  }, [productId])

  useDidUpdate(() => {
    if (productById?.isFulfilled) {
      dispatch(
        getProductActionCreator({
          limit: 10,
          search: productById?.response?.category?.name
        })
      )
    }
  }, [productById])

  useDidUpdate(() => {
    toast.remove()

    if (postTransaction?.isPending) toast.loading('Loading...')

    if (postTransaction?.isRejected) toast.error(postTransaction?.errorMessage)

    if (postTransaction?.isFulfilled) toast.success('Transaction Success!', { duration: 2000 })
  }, [postTransaction])

  return (
    <Fragment>
      {header ? (
        <UserHeader products={products?.response} profile={profile?.response} />
      ) : (
        <GuestHeader products={products?.response} />
      )}

      <div className='container mb-5'>
        <div className='row gx-4 mb-5'>
          <div className='col-12'>
            <nav className='breadcrumb-divider' aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='#'>Home</a>
                </li>
                <li className='breadcrumb-item'>Product</li>
                <li className='breadcrumb-item active' aria-current='page'>
                  <p className='truncate-page-search'>{productById?.response?.title}</p>
                </li>
              </ol>
            </nav>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4'>
            <ImageGallery
              items={[
                {
                  original: productById?.response?.thumbnail,
                  thumbnail: productById?.response?.thumbnail,
                  originalWidth: 367,
                  originalHeight: 378
                }
              ]}
              lazyLoad={true}
              showNav={false}
              showPlayButton={false}
              showBullets={false}
              autoPlay={false}
              onErrorImageURL='https://via.placeholder.com/150/3cb371/white?Text=Bad%20Image'
            />
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8'>
            <div className='vstack gap-3 mb-4'>
              <strong className='product-title truncate-product-title'>
                {productById?.response?.title}
              </strong>
              <small className='text-muted seller-title'>
                {productById?.response?.seller?.name}
              </small>
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

            <div className='vstack gap-1 mb-4'>
              <small className='text-muted seller-title'>Price</small>
              <strong className='bolder-price'>Rp {rupiahFormat}</strong>
            </div>

            <div className='vstack bottom-color p-0 mb-5'>
              <p className='modal-filter-title'>Color</p>

              <fieldset
                onChange={(event) => setColorValue(event.target.value)}
                className='hstack filter-color-gap'
              >
                <input
                  type='radio'
                  name='productColor'
                  id='darker'
                  value='darker'
                />
                <label htmlFor='darker'>
                  <span
                    className={`${
                      colorValue === 'darker'
                        ? 'darker is-product-color-active'
                        : 'darker'
                    } custom-size-btn-color`}
                  ></span>
                </label>

                <input
                  type='radio'
                  name='productColor'
                  id='crimson'
                  value='crimson'
                />
                <label htmlFor='crimson'>
                  <span
                    className={`${
                      colorValue === 'crimson'
                        ? 'crimson shadow-sm is-product-color-active'
                        : 'crimson shadow-sm'
                    } custom-size-btn-color`}
                  ></span>
                </label>

                <input
                  type='radio'
                  name='productColor'
                  id='blueish'
                  value='blueish'
                />
                <label htmlFor='blueish'>
                  <span
                    className={`${
                      colorValue === 'blueish'
                        ? 'blueish is-product-color-active'
                        : 'blueish'
                    } custom-size-btn-color`}
                  ></span>
                </label>

                <input
                  type='radio'
                  name='productColor'
                  id='seagreen'
                  value='seagreen'
                />
                <label htmlFor='seagreen'>
                  <span
                    className={`${
                      colorValue === 'seagreen'
                        ? 'seagreen is-product-color-active'
                        : 'seagreen'
                    } custom-size-btn-color`}
                  ></span>
                </label>
              </fieldset>
            </div>

            <div className='hstack align-items-start gap-5 mb-5'>
              <SelectSize />

              <div className='vstack gap-1'>
                <strong className='count-title'>Jumlah</strong>
                <div className='d-flex gap-3 cart-btn-group'>
                  <button
                    type='button'
                    className='btn rounded-pill quantity-left-minus'
                    onClick={() =>
                      setCount((state) => (state > 0 ? state - 1 : 0))
                    }
                  >
                    -
                  </button>
                  <span className='cart-card-counter-input'>{count}</span>
                  <button
                    type='button'
                    className='btn rounded-pill quantity-right-plus'
                    onClick={() =>
                      setCount((state) => (state >= 0 ? state + 1 : 0))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className='hstack gap-3 group-on-mobile mb-5'>
              <button
                type='button'
                className='btn btn-chat product-btn-font-size'
              >
                Chat
              </button>
              <button
                type='button'
                className='btn btn-add-bag product-btn-font-size'
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/cart')}
              >
                Add bag
              </button>
              <button
                type='button'
                className='btn btn-buying product-btn-font-size'
                onClick={header ? onBuyProduct : () => navigate('/auth/signin')}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
        <div className='row gx-4 mb-5'>
          <div className='col-12 mb-5'>
            <h1>
              <strong>Informasi Produk</strong>
            </h1>
          </div>

          <div className='col-12 mb-5'>
            <div className='vstack gap-2'>
              <strong className='condition-title'>Condition</strong>
              <strong className='condition-label'>New</strong>
            </div>
          </div>

          <div className='col-12 mb-5'>
            <div className='vstack gap-2'>
              <strong className='description-title'>Description</strong>
              <dd className='description-content'>
                {`${decode(productById?.response?.description)}`}
              </dd>
            </div>
          </div>

          <hr />
        </div>
        <div className='row gap-4'>
          <div className='col'>
            <div className='vstack'>
              <h2 className='dashboard-title'>You can also like this</h2>
              <span className='dashboard-caption'>
                You&apos;ve never seen it before!
              </span>
            </div>
          </div>
          <div className='container justify-content-center'>
            <div className='row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5'>
              {products?.response?.length
                ? products.response
                  ?.filter((item) =>
                    item?.category?.name?.includes(
                      productById?.response?.category?.name
                    )
                  )
                  .map((item, index) =>
                    item?.title !== productById?.response?.title ? (
                        <div key={index} className='col p-1'>
                          <ProductCard product={item} />
                        </div>
                    ) : (
                      ''
                    )
                  )
                : ''}
            </div>
          </div>
        </div>
      </div>
      <FilterHeader />
    </Fragment>
  )
}

export default Product
