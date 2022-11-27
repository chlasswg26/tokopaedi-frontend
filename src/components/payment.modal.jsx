import React, { Fragment, useEffect, useState } from 'react'
import Modal from './modal'
import Gopay from '../assets/img/gopay.png'
import PosIndonesia from '../assets/img/pos-indonesia.png'
import Mastercard from '../assets/img/mastercard.png'
import '../assets/css/payment.modal.css'
import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const ModalFooter = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const onPay = () => setSearchParams({ msg: 'Order success!' })
  const success = searchParams.get('msg')

  useEffect(() => {
    if (success) {
      toast.success(success)
    }
  }, [success])

  return (
        <Fragment>
            <div className="hstack align-items-center justify-content-between w-100 h-auto">
                <div className="vstack gap-3">
                  <strong>
                    Shopping summary
                  </strong>
                  <strong className="price-checkout-font summary-font-color">$ 40.0</strong>
                </div>
                <button type="button" className="btn rounded-pill btn-apply btn-pay" style={{ cursor: 'pointer' }} onClick={onPay}>
                  Buy
                </button>
            </div>
        </Fragment>
  )
}

const PaymentModal = () => {
  const [payment, setPayment] = useState('')

  return (
        <Fragment>
            <Modal
              modalId="paymentModal"
              modalTitle="Payment"
              enableFooter={true}
              footerContent={<ModalFooter />}>
              <Fragment>
                <div className="vstack gap-3 bottom-content mb-0">
                  <p className="modal-filter-title">Payment method</p>

                  <div className="col-12">
                    <div className="form-check form-check-reverse">
                      <input className="form-check-input checkbox-address" type="checkbox" id="gopay" checked={payment === 'gopay'} onChange={() => setPayment(payment === 'gopay' ? '' : 'gopay')} />
                      <label className="form-check-label d-inline label-checkbox" htmlFor="gopay">
                        <div className="hstack">
                          <div className="label-box-img">
                            <img src={Gopay} alt="Gopay" className="img-fluid" />
                          </div>
                          <strong className="label-payment">Gopay</strong>
                        </div>
                      </label>
                    </div>
                    <div className="form-check form-check-reverse">
                      <input className="form-check-input checkbox-address" type="checkbox" id="posIndonesia" checked={payment === 'posIndonesia'} onChange={() => setPayment(payment === 'posIndonesia' ? '' : 'posIndonesia')} />
                      <label className="form-check-label d-inline label-checkbox" htmlFor="posIndonesia">
                        <div className="hstack">
                          <div className="label-box-img">
                            <img src={PosIndonesia} alt="Pos Indonesia" className="img-fluid" />
                          </div>
                          <strong className="label-payment">Pos Indonesia</strong>
                        </div>
                      </label>
                    </div>
                    <div className="form-check form-check-reverse">
                      <input className="form-check-input checkbox-address" type="checkbox" id="mastercard" checked={payment === 'mastercard'} onChange={() => setPayment(payment === 'mastercard' ? '' : 'mastercard')} />
                      <label className="form-check-label d-inline label-checkbox" htmlFor="mastercard">
                        <div className="hstack">
                          <div className="label-box-img">
                            <img src={Mastercard} alt="Mastercard" className="img-fluid" />
                          </div>
                          <strong className="label-payment">Mastercard</strong>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <hr className="solid mb-4" />
                <div className="vstack gap-2 bottom-content mb-5">
                  <p className="modal-filter-title">Shopping summary</p>

                  <div className="vstack gap-2">
                    <div className="hstack justify-content-between">
                      <strong className="text-muted">Order</strong>
                      <strong className="price-checkout-font">$ 40.0</strong>
                    </div>

                    <div className="hstack justify-content-between">
                      <strong className="text-muted">Delivery</strong>
                      <strong className="price-checkout-font">$ 40.0</strong>
                    </div>
                  </div>
                </div>
              </Fragment>
            </Modal>
        </Fragment>
  )
}

export default PaymentModal
