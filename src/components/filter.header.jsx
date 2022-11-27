import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCategoryActionCreator } from '../redux/action/creator/category'
import Modal from './modal'

const ModalFooter = () => {
  const navigate = useNavigate()

  return (
    <Fragment>
      <div className='hstack mx-auto gap-3'>
        <button
          type='button'
          className='btn rounded-pill btn-outline-dark btn-discard'
          data-bs-dismiss='modal'
          aria-label='Close'
        >
          Discard
        </button>
        <button
          type='button'
          className='btn rounded-pill btn-apply'
          onClick={() =>
            navigate(
              `/search?search=${localStorage.getItem(
                'category_name'
              )}&sortBy=${localStorage.getItem('order')}`
            )
          }
          data-bs-dismiss='modal'
          aria-label='Close'
        >
          Apply
        </button>
      </div>
    </Fragment>
  )
}

const FilterHeader = () => {
  const [colorValue, setColorValue] = useState('')
  const [orderBy, setOrderBy] = useState('')
  const [categoryValue, setCategoryValue] = useState('')
  const dispatch = useDispatch()
  const categories = useSelector(state => state.category.get)

  useEffect(() => {
    dispatch(getCategoryActionCreator())
  }, [])

  useEffect(() => {
    if (orderBy) localStorage.setItem('order', orderBy)
    if (categoryValue) localStorage.setItem('category', categoryValue)
  }, [orderBy, categoryValue])

  return (
        <Fragment>
            <Modal
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
                  <p className="modal-filter-title">Sorting</p>

                  <div className="hstack filter-size-gap">
                    <button type="button" className={orderBy === 'ASC' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setOrderBy('ASC')}>
                        Ascending
                    </button>
                    <button type="button" className={orderBy === 'DESC' ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => setOrderBy('DESC')}>
                        Descending
                    </button>
                  </div>
                </div>
                <hr className="solid" />
                <div className="vstack gap-4 bottom-content">
                  <p className="modal-filter-title">Category</p>

                  <div className="row row-cols-3 g-3">
                    {categories?.response?.map((item, index) => (
                      <div key={index} className="col">
                        <button type="button" className={categoryValue === item?.id ? 'btn btn-content is-content-active' : 'btn btn-content'} onClick={() => {
                          setCategoryValue(item?.id)

                          localStorage.setItem('category_name', item?.name)
                        }}>
                            {item?.name}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <hr className="solid mb-5" />
              </Fragment>
            </Modal>
        </Fragment>
  )
}

export default FilterHeader
