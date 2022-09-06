import React, { Fragment, useRef, useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types'

const forwardedRef = forwardRef
const IndeterminateCheckbox = forwardedRef(({ indeterminate, ...inputProps }, ref) => {
  const internalRef = useRef(null)

  const synchronizeRefs = (el) => {
    internalRef.current = el

    if (!ref) {
      // nothing to update
    } else if (typeof ref === 'object') {
      ref.current = el
    } else {
      ref(el)
    }
  }

  useEffect(() => {
    if (internalRef.current) internalRef.current.indeterminate = indeterminate
  }, [indeterminate])

  return (
    <Fragment>
      <input ref={synchronizeRefs} type="checkbox" {...inputProps} />
    </Fragment>
  )
})

IndeterminateCheckbox.propTypes = {
  indeterminate: PropTypes.bool
}

IndeterminateCheckbox.defaultProps = {
  indeterminate: false
}

export default IndeterminateCheckbox
