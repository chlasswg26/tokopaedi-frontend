import React, { Fragment, useEffect, useRef, useState } from 'react'
import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import FilterHeader from '../components/filter.header'
import HighlightCarousel from '../components/highlight.carousel'
import CategoryCarousel from '../components/category.carousel'
import '../assets/css/dashboard.css'
import ProductCard from '../components/product.card'
import { useDispatch, useSelector } from 'react-redux'
import { getProductActionCreator } from '../redux/action/creator/product'
import { getProfileActionCreator } from '../redux/action/creator/profile'
import { useDocumentTitle } from '@mantine/hooks'

const REACT_APP_NAME = import.meta.env.VITE_APP_TITLE

const Dashboard = () => {
  useDocumentTitle(`${REACT_APP_NAME} - Dashboard`)

  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.get)
  const products = useSelector(state => state.product.get)
  const isDashboardMounted = useRef()
  const [header, setHeader] = useState(false)

  useEffect(() => {
    if (!isDashboardMounted.current) {
      dispatch(getProductActionCreator({ limit: 10 }))
      dispatch(getProfileActionCreator())

      isDashboardMounted.current = true
    } else {
      if (profile?.isFulfilled) {
        setHeader(true)
      } else {
        setHeader(false)
      }
    }
  }, [profile])

  return (
    <Fragment>
      {header ? (
        <UserHeader products={products?.response} profile={profile?.response} />
      ) : (
        <GuestHeader products={products?.response} />
      )}

      <div className='container mb-5'>
        <div className='row mb-5'>
          <div className='col'>
            <HighlightCarousel />
          </div>
        </div>
        <div className='row gap-4 mb-5'>
          <div className='col'>
            <div className='vstack gap-1'>
              <h2 className='dashboard-title'>Category</h2>
              <span className='dashboard-caption'>
                What are you currently looking for
              </span>
            </div>
          </div>
          <div className='col'>
            <CategoryCarousel />
          </div>
        </div>
        <div className='row gap-4 mb-5'>
          <div className='col'>
            <div className='vstack gap-1'>
              <h2 className='dashboard-title'>New</h2>
              <span className='dashboard-caption'>
                You’ve never seen it before!
              </span>
            </div>
          </div>
          <div className='container justify-content-center'>
            <div className='row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5'>
              {products?.response?.length
                ? products?.response.map((item, index) => (
                    <div key={index} className='col p-1'>
                      <ProductCard product={item} />
                    </div>
                ))
                : ''}
            </div>
          </div>
        </div>
        <div className='row gap-4'>
          <div className='col'>
            <div className='vstack gap-1'>
              <h2 className='dashboard-title'>Popular</h2>
              <span className='dashboard-caption'>
                Find clothes that are trending recently
              </span>
            </div>
          </div>
          <div className='container justify-content-center'>
            <div className='row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5'>
              {products?.response?.length
                ? products.response
                  ?.map((item, index) => (
                      <div key={index} className='col p-1'>
                        <ProductCard product={item} />
                      </div>
                  ))
                  .reverse()
                : ''}
            </div>
          </div>
        </div>
      </div>
      <FilterHeader />
    </Fragment>
  )
}

export default Dashboard
