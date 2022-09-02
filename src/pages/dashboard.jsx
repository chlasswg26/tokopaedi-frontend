import React, { Fragment } from 'react'
import GuestHeader from '../components/guest.header'
// import UserHeader from '../components/user.header'

const Dashboard = () => {
  return (
        <Fragment>
            {/* <UserHeader /> */}
            <GuestHeader />
            <div className="container">
              <div className="row">
                <div className="col">
                  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false" data-bs-touch="false">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://images.squarespace-cdn.com/content/v1/5810fd3520099ebb7c304192/1525148043894-332VS8NKW95SBRMO000L/black-banner-noise.png?format=2500w" className="d-block w-100" alt="..." />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                          </div>
                      </div>
                      <div className="carousel-item">
                        <img src="https://images.squarespace-cdn.com/content/v1/5810fd3520099ebb7c304192/1525148043894-332VS8NKW95SBRMO000L/black-banner-noise.png?format=2500w" className="d-block w-100" alt="..." />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                          </div>
                      </div>
                      <div className="carousel-item">
                        <img src="https://images.squarespace-cdn.com/content/v1/5810fd3520099ebb7c304192/1525148043894-332VS8NKW95SBRMO000L/black-banner-noise.png?format=2500w" className="d-block w-100" alt="..." />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                          </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
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
        </Fragment>
  )
}

export default Dashboard
