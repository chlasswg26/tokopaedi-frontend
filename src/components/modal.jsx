import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import '../assets/css/modal.css'

const Modal = (props) => {
  const {
    modalId,
    modalTitle,
    children,
    enableFooter,
    footerContent
  } = props

  return (
        <Fragment>
            <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1" aria-labelledby={modalId} aria-hidden="true">
              <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="hstack gap-4">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      <h5 className="modal-title">{modalTitle}</h5>
                    </div>
                  </div>
                  <div className="modal-body">
                    {children}
                  </div>
                  {enableFooter && (
                    <div className="modal-footer">
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
  children: PropTypes.element,
  enableFooter: PropTypes.bool,
  footerContent: PropTypes.element
}

Modal.defaultProps = {
  modalId: 'no-indexed-id',
  modalTitle: 'Modal Title',
  enableFooter: false
}

export default Modal
