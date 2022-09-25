import React, { Fragment } from 'react'
import profilePic from '../assets/img/profile-pic.png'

const EditProfile = () => {
  return (
    <Fragment>
        <div className="card right-menu shadow-sm">
            <h5 className="card-title right-menu-title mb-3">My profile store</h5>
            <h6 className="card-subtitle mb-2 text-muted">Manage your profile information</h6>

            <hr className="hr-right-menu" />

            <div className="row">
                <div className="col-7">
                    <div className="hstack mb-4">
                        <label htmlFor="store-name" className="profile-label">Store name</label>
                        <input className="form-control form-control-lg font-input font-input-profile" type="text" id="store-name" />
                    </div>
                    <div className="hstack mb-4">
                        <label htmlFor="profile-email" className="profile-label">Email</label>
                        <input className="form-control form-control-lg font-input font-input-profile" type="text" id="profile-email" />
                    </div>
                    <div className="hstack mb-4">
                        <label htmlFor="phone-number" className="profile-label">Phone number</label>
                        <input className="form-control form-control-lg font-input font-input-profile" type="text" id="phone-number" />
                    </div>
                    <div className="hstack mb-4">
                        <label htmlFor="store-name" className="profile-label">Store description</label>
                        <textarea className="form-control form-control-lg font-input font-input-profile textarea-store" type="text" id="store-name" />
                    </div>

                    <button className="btn rounded-pill btn-save-profile">
                        Save
                    </button>
                </div>
                <div className="col">
                    <div className="hstack">
                        <div className="vr height-vr" />

                        <hr className="profile-hr-mobile" />

                        <div className="vstack">
                            <div className="profile-photo mb-4">
                                <img
                                src={profilePic}
                                alt="Tokopaedi"
                                loading="lazy"
                                className="rounded-circle profile-badge-avatar" />

                                <button className="btn rounded-pill btn-select-image">
                                Select image
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default EditProfile
