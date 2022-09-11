import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import '../assets/css/modal.css'

const Modal = (props) => {
  const {
    modalId,
    modalTitle,
    modalSize,
    styled,
    children,
    enableFooter,
    footerContent
  } = props

  return (
        <Fragment>
            <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1" aria-labelledby={modalId} aria-hidden="true">
              <div className={`modal-dialog ${modalSize} modal-dialog-centered modal-dialog-scrollable`}>
                <div className="modal-content">
                  {styled
                    ? (
                    <div className="modal-header shadow-none border-0">
                      <button type="button" className="btn-close p-3" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                      )
                    : (
                    <div className="modal-header">
                      <div className="hstack gap-4">
                        <button type="button" className="btn-close p-2" data-bs-dismiss="modal" aria-label="Close" />
                        <h5 className="modal-title">{modalTitle}</h5>
                      </div>
                    </div>
                      )}
                  <div className="modal-body">
                    {styled && (
                      <h5 className="modal-title mb-5 text-center">{modalTitle}</h5>
                    )}
                    {children}
                  </div>
                  {enableFooter && (
                    <div className={`modal-footer footer-shadow ${styled && 'border-0 p-4 shadow-none'}`}>
                      {footerContent}
                    </div>
                  )}
                </div>
              </div>
            </div>
        </Fragment>
  )
}

Modal.propTypes = {
  modalId: PropTypes.string,
  modalTitle: PropTypes.string,
  modalSize: PropTypes.string,
  styled: PropTypes.bool,
  children: PropTypes.element,
  enableFooter: PropTypes.bool,
  footerContent: PropTypes.element
}

Modal.defaultProps = {
  modalId: 'no-indexed-id',
  modalTitle: 'Modal Title',
  modalSize: 'modal-md',
  styled: false,
  enableFooter: false
}

export default Modal
