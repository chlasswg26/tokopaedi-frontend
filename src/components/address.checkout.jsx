import React, { Fragment } from 'react'
import Modal from './modal'
import '../assets/css/address.checkout.css'
import NewAddressModal from './new.address.checkout'

const AddressModal = () => {
  return (
    <Fragment>
        <Modal
            modalId="addressModal"
            modalTitle="Choose another address"
            modalSize="modal-lg"
            styled={true}>
            <Fragment>
                <div className="container">
                    <div className="vstack align-items-center gap-5">
                        <a type="button" data-bs-toggle="modal" href="#newAddressModal" className="btn-new-address new-address">
                            Add new address
                        </a>

                        <div className="vstack p-4 align-self-center card-address gap-4 mb-5">
                            <div className="vstack gap-2">
                                <strong>Andreas Jane</strong>

                                <small>
                                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
                                </small>
                            </div>

                            <a type="button" href="#" className="btn-color-address">
                                Change address
                            </a>
                        </div>
                    </div>
                </div>
            </Fragment>
        </Modal>
        <NewAddressModal />
    </Fragment>
  )
}

export default AddressModal
