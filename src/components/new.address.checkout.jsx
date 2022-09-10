import React, { Fragment } from 'react'
import Modal from './modal'
import '../assets/css/new.address.checkout.css'

const ModalFooter = () => {
  return (
    <Fragment>
        <div className="container">
            <div className="hstack gap-3 address-content-footer">
                <button className="btn rounded-pill btn-cancel-modal" data-bs-target="#addressModal" data-bs-toggle="modal">
                    Cancel
                </button>
                <button className="btn rounded-pill btn-save-modal" data-bs-target="#addressModal" data-bs-toggle="modal">
                    Save
                </button>
            </div>
        </div>
    </Fragment>
  )
}

const NewAddressModal = () => {
  return (
        <Fragment>
            <Modal
                modalId="newAddressModal"
                modalTitle="Add new address"
                modalSize="modal-lg"
                styled={true}
                enableFooter={true}
                footerContent={<ModalFooter />}>
                <Fragment>
                    <div className="container row-input-address">
                      <div className="row gy-3">
                        <div className="col-12">
                            <label htmlFor="address-rumah" className="form-label d-inline new-address-label">Save address as (ex : home address, office address)</label>
                            <input className="form-control form-control-lg mt-2 font-input" type="text" id="address-rumah" placeholder="Rumah" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="address-recipient" className="form-label d-inline new-address-label">Recipient&apos;s name</label>
                            <input className="form-control form-control-lg mt-2 font-input" type="text" id="address-recipient" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="address-phone" className="form-label d-inline new-address-label">Recipient&apos;s telephone number</label>
                            <input className="form-control form-control-lg mt-2 font-input" type="text" id="address-phone" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="address" className="form-label d-inline new-address-label">Address</label>
                            <input className="form-control form-control-lg mt-2 font-input" type="text" id="address" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="address-postal" className="form-label d-inline new-address-label">Postal code</label>
                            <input className="form-control form-control-lg mt-2 font-input" type="text" id="address-postal" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="address-city" className="form-label d-inline new-address-label">City</label>
                            <input className="form-control form-control-lg mt-2 font-input" type="text" id="address-city" />
                        </div>
                      </div>
                    </div>
                </Fragment>
            </Modal>
        </Fragment>
  )
}

export default NewAddressModal
