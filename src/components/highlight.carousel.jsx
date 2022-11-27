import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
  Lazy,
  Autoplay
} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'
import 'swiper/css/history'
import 'swiper/css/lazy'
import '../assets/css/highlight.carousel.css'
import BlackEdition from '../assets/img/black-edition.png'
import TrendsNow from '../assets/img/trends-2020.png'

SwiperCore.use([
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
  Lazy,
  Autoplay
])

const HighlightCarousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: (_, className) => {
      return `<span class="${className}"></span>`
    }
  }

  return (
    <Fragment>
        <Swiper
          pagination={pagination}
          keyboard={true}
          loop={true}
          mousewheel={true}
          navigation
          modules={[
            Navigation,
            Pagination,
            Keyboard,
            Mousewheel,
            Lazy,
            Autoplay
          ]}
          breakpoints={{
            575.98: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            767.98: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            991.98: {
              slidesPerView: 3,
              spaceBetween: 1
            },
            1199.98: {
              slidesPerView: 3,
              spaceBetween: 3
            },
            1399.98: {
              slidesPerView: 4,
              spaceBetween: 5
            }
          }}
          lazy={{
            loadPrevNext: true
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          >
          <SwiperSlide>
              <div className="container">
                <img
                    className="img-fluid"
                    src={BlackEdition}
                    alt="Slide 2"
                />
                <div className="centered">Black Edition</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="container">
                <img
                    className="img-fluid"
                    src={TrendsNow}
                    alt="Slide 3"
                />
                <div className="centered">Trends in 2020</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="container">
                <img
                    className="img-fluid"
                    src={BlackEdition}
                    alt="Slide 4"
                />
                <div className="centered">Black Edition</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="container">
                <img
                    className="img-fluid"
                    src={TrendsNow}
                    alt="Slide 5"
                />
                <div className="centered">Trends in 2020</div>
              </div>
          </SwiperSlide>
        </Swiper>
    </Fragment>
  )
}

export default HighlightCarousel
