import React, { Fragment } from 'react'
// import GuestHeader from '../components/guest.header'
import UserHeader from '../components/user.header'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
  HashNavigation,
  Lazy,
  Autoplay
} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/hash-navigation'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'
import 'swiper/css/history'
import 'swiper/css/lazy'
import '../assets/css/carousel.css'
import FilterHeader from '../components/filter.header'

const Dashboard = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    }
  }

  return (
        <Fragment>
            <UserHeader />
            {/* <GuestHeader /> */}
            <div className="container">
              <div className="row mb-5">
                <div className="col">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={pagination}
                    modules={[
                      Navigation,
                      Pagination,
                      Keyboard,
                      Mousewheel,
                      HashNavigation,
                      Lazy,
                      Autoplay
                    ]}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 40
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 50
                      }
                    }}
                    centeredSlides={true}
                    keyboard={true}
                    loop={true}
                    hashNavigation={{
                      replaceState: true
                    }}
                    mousewheel={true}
                    autoHeight={true}
                    lazy={{
                      loadPrevNext: true
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false
                    }}
                  >
                    <SwiperSlide data-hash="slide-ads-1">Slide 1</SwiperSlide>
                    <SwiperSlide data-hash="slide-ads-2">Slide 2</SwiperSlide>
                    <SwiperSlide data-hash="slide-ads-3">Slide 3</SwiperSlide>
                    <SwiperSlide data-hash="slide-ads-4">Slide 4</SwiperSlide>
                    ...
                  </Swiper>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  1 of 3
                </div>
                <div className="col">
                  2 of 3
                </div>
                <div className="col">
                  3 of 3
                </div>
              </div>
            </div>
            <FilterHeader />
        </Fragment>
  )
}

export default Dashboard
