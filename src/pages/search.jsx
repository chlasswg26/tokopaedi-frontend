import React, { Fragment, useEffect, useRef, useState } from 'react'
import ProductCard from '../components/product.card'
import '../assets/css/search.css'
import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import FilterHeader from '../components/filter.header'
import Pagination from 'react-responsive-pagination'
import '../assets/css/pagination.css'
import { useSearchParams } from 'react-router-dom'
import { getProductActionCreator } from '../redux/action/creator/product'
import { getProfileActionCreator } from '../redux/action/creator/profile'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const paramsToObject = (entries) => {
    const result = {}
    for (const [key, value] of entries) {
      result[key] = value
    }
    return result
  }
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.get)
  const products = useSelector(state => state.product.get)
  const isDashboardMounted = useRef()
  const [header, setHeader] = useState(false)
  const entries = searchParams.entries()
  const objectParams = paramsToObject(entries)

  const handlePageChange = (page) => setSearchParams({
    ...objectParams,
    page
  })

  useEffect(() => {
    if (!isDashboardMounted.current) {
      if (objectParams) {
        dispatch(
          getProductActionCreator({
            ...objectParams,
            limit: 10
          })
        )
      } else {
        dispatch(getProductActionCreator({ limit: 10 }))
      }

      dispatch(getProfileActionCreator())
      isDashboardMounted.current = true
    } else {
      if (profile?.isFulfilled) {
        setHeader(true)
      } else {
        setHeader(false)
      }

      dispatch(
        getProductActionCreator({
          ...objectParams,
          limit: 10
        })
      )
    }
  }, [profile, searchParams])

  return (
    <Fragment>
      {header ? (
        <UserHeader products={products?.response} profile={profile?.response} />
      ) : (
        <GuestHeader products={products?.response} />
      )}
      <div className='container mb-5'>
        <div className='row mb-3'>
          <div className='col'>
            <nav className='breadcrumb-divider' aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='#'>Home</a>
                </li>
                <li className='breadcrumb-item'>Search</li>
                <li className='breadcrumb-item active' aria-current='page'>
                  <p className='truncate-page-search'>{objectParams?.search}</p>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className='row gap-4'>
          <div className='col'>
            <div className='vstack'>
              <h2 className='search-title truncate-search-title'>
                Result of &lsquo;{objectParams?.search}&lsquo;
              </h2>
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
          <div className='col'>
            <Pagination
              total={Math.ceil(products?.pagination?.total?.data / 10)}
              current={products?.pagination?.page?.current || 1}
              onPageChange={(page) => handlePageChange(page)}
              previousLabel='Prev'
              nextLabel='Next'
              narrowStrategy='dropEllipsis'
            />
          </div>
        </div>
      </div>
      <FilterHeader />
    </Fragment>
  )
}

export default Search
