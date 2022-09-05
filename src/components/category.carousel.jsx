import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Keyboard,
  Mousewheel,
  Lazy,
  Autoplay
} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'
import 'swiper/css/history'
import 'swiper/css/lazy'
import '../assets/css/category.carousel.css'
import Accessories from '../assets/img/accessories.png'
import Bagback from '../assets/img/bagback.png'
import Cap from '../assets/img/cap.png'
import Dress from '../assets/img/dress.png'
import FormalSuite from '../assets/img/formal-suite.png'
import Glasses from '../assets/img/glasses.png'
import Handbag from '../assets/img/handbag.png'
import Handwatch from '../assets/img/handwatch.png'
import HighHeels from '../assets/img/high-heels.png'
import Socks from '../assets/img/socks.png'
import Tie from '../assets/img/tie.png'

SwiperCore.use([
  Navigation,
  Keyboard,
  Mousewheel,
  Lazy,
  Autoplay
])

const randomColor = (stringInput = 'random') => {
  const h = [...stringInput].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5 >>> 0) - acc)
  }, 0)
  const s = 95; const l = 35 / 100
  const a = s * Math.min(l, 1 - l) / 100
  const f = n => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color).toString(16).padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

const CategoryCarousel = () => {
  const randomBackgroundColor = (value) => randomColor(value)

  return (
    <Fragment>
        <Swiper
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides={true}
          keyboard={true}
          loop={true}
          mousewheel={true}
          navigation
          modules={[
            Navigation,
            Keyboard,
            Mousewheel,
            Lazy,
            Autoplay
          ]}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 2
            },
            575.98: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            767.98: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            991.98: {
              slidesPerView: 5,
              spaceBetween: 1
            },
            1199.98: {
              slidesPerView: 5,
              spaceBetween: 1
            },
            1399.98: {
              slidesPerView: 7,
              spaceBetween: 1
            }
          }}
          lazy={{
            loadPrevNext: true
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          >
            <SwiperSlide>
              <div
                className="container content-wrapper"
                style={{
                  backgroundColor: randomBackgroundColor('Accessories'),
                  backgroundImage: `url(${Accessories})`
                }}>
                <div className="category-centered">Accessories</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div
                className="container content-wrapper"
                style={{
                  backgroundColor: randomBackgroundColor('Bagback'),
                  backgroundImage: `url(${Bagback})`
                }}>
                <div className="category-centered">Bagback</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div
                className="container content-wrapper"
                style={{
                  backgroundColor: randomBackgroundColor('Cap'),
                  backgroundImage: `url(${Cap})`
                }}>
                <div className="category-centered">Cap</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div
                className="container content-wrapper"
                style={{
                  backgroundColor: randomBackgroundColor('Dress'),
                  backgroundImage: `url(${Dress})`
                }}>
                <div className="category-centered">Dress</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div
                className="container content-wrapper"
                style={{
                  backgroundColor: randomBackgroundColor('FormalSuite'),
                  backgroundImage: `url(${FormalSuite})`
                }}>
                <div className="category-centered">Formal Suite</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div
                className="container content-wrapper"
                style={{
                  backgroundColor: randomBackgroundColor('Glasses'),
                  backgroundImage: `url(${Glasses})`
                }}>
                <div className="category-centered">Glasses</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div
                className="container content-wrapper"
                style={{
                  backgroundColor: randomBackgroundColor('Handbag'),
                  backgroundImage: `url(${Handbag})`
                }}>
                <div className="category-centered">Handbag</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div
                className="container content-wrapper"
                style={{
                  backgroundColor: randomBackgroundColor('Handwatch'),
                  backgroundImage: `url(${Handwatch})`
                }}>
                <div className="category-centered">Handwatch</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div
                className="container content-wrapper"
                style={{
                  backgroundColor: randomBackgroundColor('HighHeels'),
                  backgroundImage: `url(${HighHeels})`
                }}>
                <div className="category-centered">High Heels</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div
                className="container content-wrapper"
                style={{
                  backgroundColor: randomBackgroundColor('Socks'),
                  backgroundImage: `url(${Socks})`
                }}>
                <div className="category-centered">Socks</div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div
                className="container content-wrapper"
                style={{
                  backgroundColor: randomBackgroundColor('Tie'),
                  backgroundImage: `url(${Tie})`
                }}>
                <div className="category-centered">Tie</div>
              </div>
          </SwiperSlide>
        </Swiper>

    </Fragment>
  )
}

export default CategoryCarousel
