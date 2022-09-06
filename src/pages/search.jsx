import React, { Fragment, useState } from 'react'
import ProductCard from '../components/product.card'
import '../assets/css/search.css'
// import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import FilterHeader from '../components/filter.header'
import Pagination from 'react-responsive-pagination'
import '../assets/css/pagination.css'

const Search = () => {
  const totalPages = 120
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <Fragment>
        <UserHeader />
        {/* <GuestHeader /> */}
        <div className="container mb-5">
            <div className="row mb-3">
                <div className="col">
                    <nav className="breadcrumb-divider" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item">category</li>
                            <li className="breadcrumb-item active" aria-current="page"><p className="truncate-page-search">T-Shirt</p></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="row gap-4">
                <div className="col">
                    <div className="vstack">
                        <h2 className="search-title truncate-search-title">T-Shirt</h2>
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
                <div className="col">
                    <Pagination
                        total={totalPages}
                        current={currentPage}
                        onPageChange={page => handlePageChange(page)}
                        nextLabel="Next"
                        previousLabel="Previous"
                    />
                </div>
          </div>
        </div>
        <FilterHeader />
    </Fragment>
  )
}

export default Search
