import React, { Fragment, useState, useEffect } from 'react'
import FilterModal from './modal'

const ModalFooter = () => {
  return (
        <Fragment>
            <div className="hstack mx-auto gap-3">
                <button type="button" className="btn rounded-pill btn-outline-dark btn-discard">
                    Discard
                </button>
                <button type="button" className="btn rounded-pill btn-apply">
                    Apply
                </button>
            </div>
        </Fragment>
  )
}

const FilterHeader = () => {
  const [colorValue, setColorValue] = useState('')
  const [sizeValue, setSizeValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')

  useEffect(() => {
    if (colorValue) console.log(colorValue)
    if (sizeValue) console.log(sizeValue)
    if (categoryValue) console.log(categoryValue)
  }, [colorValue, sizeValue, categoryValue])

  return (
        <Fragment>
            <FilterModal
            modalId="filterModal"
            modalTitle="Filter"
            enableFooter={true}
            footerContent={<ModalFooter />}>
              <Fragment>
                <div className="vstack gap-4 bottom-color">
                  <p className="modal-filter-title">Colors</p>

                  <fieldset onChange={(event) => setColorValue(event.target.value)} className="hstack filter-color-gap">
                    <input type="radio" name="color" id="dark" value="dark" />
                    <label htmlFor="dark"><span className={colorValue === 'dark' ? 'dark is-color-active' : 'dark'}></span></label>

                    <input type="radio" name="color" id="white" value="white" />
                    <label htmlFor="white"><span className={colorValue === 'white' ? 'white shadow-sm is-color-active' : 'white shadow-sm'}></span></label>

                    <input type="radio" name="color" id="red-maroon" value="red-maroon" />
                    <label htmlFor="red-maroon"><span className={colorValue === 'red-maroon' ? 'red-maroon is-color-active' : 'red-maroon'}></span></label>

                    <input type="radio" name="color" id="maroon" value="maroon" />
                    <label htmlFor="maroon"><span className={colorValue === 'maroon' ? 'maroon is-color-active' : 'maroon'}></span></label>

                    <input type="radio" name="color" id="cream" value="cream" />
                    <label htmlFor="cream"><span className={colorValue === 'cream' ? 'cream is-color-active' : 'cream'}></span></label>

                    <input type="radio" name="color" id="dark-blue" value="dark-blue" />
                    <label htmlFor="dark-blue"><span className={colorValue === 'dark-blue' ? 'dark-blue is-color-active' : 'dark-blue'}></span></label>
                  </fieldset>
                </div>
                <hr className="solid" />
                <div className="vstack gap-4 bottom-content">
                  <p className="modal-filter-title">Sizes</p>

                  <div className="hstack filter-size-gap">
                    <button type="button" className={sizeValue === 'xs' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setSizeValue('xs')}>
                        XS
                    </button>
                    <button type="button" className={sizeValue === 's' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setSizeValue('s')}>
                        S
                    </button>
                    <button type="button" className={sizeValue === 'm' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setSizeValue('m')}>
                        M
                    </button>
                    <button type="button" className={sizeValue === 'l' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setSizeValue('l')}>
                        L
                    </button>
                    <button type="button" className={sizeValue === 'xl' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setSizeValue('xl')}>
                        XL
                    </button>
                  </div>
                </div>
                <hr className="solid" />
                <div className="vstack gap-4 bottom-content">
                  <p className="modal-filter-title">Category</p>

                  <div className="row row-cols-3 g-3">
                    <div className="col">
                      <button type="button" className={categoryValue === '*' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setCategoryValue('*')}>
                          All
                      </button>
                    </div>
                    <div className="col">
                      <button type="button" className={categoryValue === 'women' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setCategoryValue('women')}>
                          Women
                      </button>
                    </div>
                    <div className="col">
                      <button type="button" className={categoryValue === 'men' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setCategoryValue('men')}>
                          Men
                      </button>
                    </div>
                    <div className="col">
                      <button type="button" className={categoryValue === 'boys' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setCategoryValue('boys')}>
                          Boys
                      </button>
                    </div>
                    <div className="col">
                      <button type="button" className={categoryValue === 'girls' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setCategoryValue('girls')}>
                          Girls
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="solid mb-5" />
              </Fragment>
            </FilterModal>
        </Fragment>
  )
}

export default FilterHeader
