import React, { Fragment } from 'react'
// import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import FilterHeader from '../components/filter.header'
import HighlightCarousel from '../components/highlight.carousel'
import CategoryCarousel from '../components/category.carousel'
import '../assets/css/dashboard.css'
import ProductCard from '../components/product.card'

const Dashboard = () => {
  return (
    <Fragment>
        <UserHeader />
        {/* <GuestHeader /> */}
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col">
              <HighlightCarousel />
            </div>
          </div>
          <div className="row gap-4 mb-5">
            <div className="col">
              <div className="vstack gap-1">
                <h2 className="dashboard-title">Category</h2>
                <span className="dashboard-caption">What are you currently looking for</span>
              </div>
            </div>
            <div className="col">
              <CategoryCarousel />
            </div>
          </div>
          <div className="row gap-4 mb-5">
            <div className="col">
              <div className="vstack gap-1">
                <h2 className="dashboard-title">New</h2>
                <span className="dashboard-caption">You’ve never seen it before!</span>
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
          <div className="row gap-4">
            <div className="col">
              <div className="vstack gap-1">
                <h2 className="dashboard-title">Popular</h2>
                <span className="dashboard-caption">Find clothes that are trending recently</span>
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

export default Dashboard
