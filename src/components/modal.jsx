import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import '../assets/css/modal.css'

const Modal = (props) => {
  const { modalId, modalTitle, children } = props

  return (
        <Fragment>
            <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1" aria-labelledby={modalId} aria-hidden="true">
              <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header m-2">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body pt-1">
                    <h5 className="modal-title text-center pb-2">{modalTitle}</h5>
                    {children}
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
  )
}

Modal.propTypes = {
  modalId: PropTypes.string,
  modalTitle: PropTypes.string,
  children: PropTypes.element
}

Modal.defaultProps = {
  modalId: 'no-indexed-id',
  modalTitle: 'Modal Title'
}

export default Modal
