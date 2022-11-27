import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Select, { defaultTheme } from 'react-select'
import Button from '@atlaskit/button'
import '../assets/css/popout.css'

const { colors } = defaultTheme

const selectStyles = {
  control: (provided) => ({
    ...provided,
    minWidth: 340,
    margin: 8,
    borderColor: 'mediumseagreen',
    boxShadow: '0 0 0 1px mediumseagreen',
    '&:hover': {
      borderColor: 'mediumseagreen'
    }
  }),
  menu: () => ({ boxShadow: 'inset 0px 1px 0px rgba(0, 0, 0, 0.1)' }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: isDisabled
        ? undefined
        : isSelected
          ? 'white'
          : isFocused
            ? '#00804c'
            : undefined,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? 'mediumseagreen'
          : isFocused
            ? '#e6fff5'
            : undefined
    }
  }
}

const Menu = (props) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)'

  return (
        <div
            style={{
              backgroundColor: 'white',
              borderRadius: 4,
              boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
              marginTop: 8,
              position: 'absolute',
              zIndex: 2
            }}
            {...props}
        />
  )
}

const Blanket = (props) => (
    <div
        style={{
          bottom: 0,
          left: 0,
          top: 0,
          right: 0,
          position: 'fixed',
          zIndex: 1
        }}
        {...props}
    />
)

const Dropdown = ({
  children,
  isOpen,
  target,
  onClose
}) => (
    <div style={{ position: 'relative' }}>
        {target}
        {isOpen ? <Menu>{children}</Menu> : null}
        {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
)

const DropdownIndicator = () => (
    <div style={{ color: colors.neutral20, height: 24, width: 32 }}>
        <Svg>
            <path
                d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </Svg>
    </div>
)

const ChevronDown = () => (
    <Svg style={{ marginRight: -6 }}>
        <path
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </Svg>
)

const Svg = (props) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        {...props}
    />
)

const SelectCategory = (props) => {
  const { categories, onChange } = props
  const [data, setData] = useState({
    isOpen: false,
    value: undefined
  })

  const toggleOpen = () => {
    setData((state) => ({ ...state, isOpen: !state.isOpen }))
  }

  const onSelectChange = (data) => {
    onChange(data.value)
    toggleOpen()
    setData({ value: data })
  }

  return (
    <Fragment>
      <Dropdown
        isOpen={data.isOpen}
        onClose={toggleOpen}
        target={
          <Button
            iconAfter={<ChevronDown />}
            onClick={toggleOpen}
            isSelected={data.isOpen}
            className='btn-dropdown width-selection'
          >
            {data.value ? `Category: ${data.value.label}` : 'Category'}
          </Button>
        }
      >
        <Select
          autoFocus
          backspaceRemovesValue={false}
          components={{ DropdownIndicator, IndicatorSeparator: null }}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          onChange={onSelectChange}
          options={categories}
          placeholder='Search...'
          styles={selectStyles}
          tabSelectsValue={false}
          value={data.value}
        />
      </Dropdown>
    </Fragment>
  )
}

Dropdown.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  target: PropTypes.element,
  onClose: PropTypes.func
}

export default SelectCategory
