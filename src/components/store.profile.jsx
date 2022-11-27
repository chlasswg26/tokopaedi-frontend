import { joiResolver } from '@hookform/resolvers/joi'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsBox } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'
import { getCategoryActionCreator } from '../redux/action/creator/category'
import SelectCategory from './select.category'
import * as Joi from 'joi'
import { encode } from 'html-entities'
import { getProductByIdActionCreator, postProductActionCreator, putProductActionCreator } from '../redux/action/creator/product'
import { createFormData } from '../utils/form-data'
import { useDidUpdate } from '@mantine/hooks'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

const ProductSchema = Joi.object({
  title: Joi.string().label('Title').required(),
  price: Joi.number().label('Price').required()
})

const StoreProfile = () => {
  const editor = useRef()
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor
  }
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const onEditorChange = (data) => {
    setDescription(encode(data))
  }
  const categories = useSelector(state => state.category.get)
  const postProduct = useSelector((state) => state.product.post)
  const getProductById = useSelector(state => state.product.getById)
  const putProduct = useSelector((state) => state.product.put)
  const dispatch = useDispatch()
  const thumbnailProductRef = useRef()
  const [avatar, setAvatar] = useState()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(ProductSchema)
  })
  const { productId } = useParams()

  const onSubmitNewProduct = (data) => {
    toast.remove()

    if (description) data.description = description

    if (!category) toast.error('Category must be select!')
    else data.category_id = category

    dispatch(
      postProductActionCreator(
        createFormData({
          single: avatar
        }, data)
      )
    )
  }

  const onSubmitExistingProduct = (data) => {
    toast.remove()

    if (description) data.description = description

    if (!category) toast.error('Category must be select!')
    else data.category_id = category

    dispatch(
      putProductActionCreator({
        value: createFormData(
          {
            single: avatar
          },
          data
        ),
        id: parseInt(productId)
      })
    )
  }

  useEffect(() => {
    dispatch(getCategoryActionCreator())
  }, [])

  useDidUpdate(() => {
    toast.remove()

    if (errors.title) toast.error(errors?.title?.message)

    if (errors.price) toast.error(errors?.price?.message)
  }, [errors])

  useDidUpdate(() => {
    toast.remove()

    if (postProduct?.isPending) toast.loading('Loading...')

    if (postProduct?.isRejected) toast.error(postProduct?.errorMessage)

    if (postProduct?.isFulfilled) {
      toast.success('New Product created!')

      setAvatar('')

      reset()
    }
  }, [postProduct])

  useDidUpdate(() => {
    toast.remove()

    if (putProduct?.isPending) toast.loading('Loading...')

    if (putProduct?.isRejected) toast.error(putProduct?.errorMessage)

    if (putProduct?.isFulfilled) {
      toast.success('Product updated!')

      setAvatar('')

      reset()
    }
  }, [putProduct])

  useEffect(() => {
    if (productId) {
      dispatch(getProductByIdActionCreator(productId))
    } else {
      reset()
    }
  }, [productId])

  useDidUpdate(() => {
    if (getProductById?.isFulfilled) {
      setCategory(getProductById?.response?.category?.id)
    }
  }, [getProductById])

  return (
    <Fragment>
      {productId ? (
        <form onSubmit={handleSubmit(onSubmitExistingProduct)}>
          <div className='vstack gap-4'>
            <div className='card right-menu shadow-sm p-0 card-store-height-1 flex-nowrap'>
              <div className='store-card-title'>
                <h5 className='card-title right-menu-title mb-3'>Inventory</h5>
              </div>

              <hr className='hr-right-menu' />

              <div className='p-4'>
                <div className='w-50 w-mobile'>
                  <label
                    htmlFor='goods-title'
                    className='form-label d-inline store-label'
                  >
                    Name of goods
                  </label>
                  <input
                    className='form-control form-control-lg mt-2 font-input'
                    {...register('title')}
                    defaultValue={getProductById?.response?.title}
                    type='text'
                    id='goods-title'
                  />
                </div>
              </div>
            </div>

            <div className='card right-menu shadow-sm p-0 card-store-height-1 flex-nowrap'>
              <div className='store-card-title'>
                <h5 className='card-title right-menu-title mb-3'>Category</h5>
              </div>

              <hr className='hr-right-menu' />

              <div className='p-4'>
                <div className='w-100'>
                  <SelectCategory
                    categories={categories?.response?.map((item) => ({
                      value: item?.id,
                      label: item?.name
                    }))}
                    onChange={setCategory}
                  />
                </div>
              </div>
            </div>

            <div className='card right-menu flex-nowrap shadow-sm p-0 card-store-height-2'>
              <div className='store-card-title'>
                <h5 className='card-title right-menu-title mb-3'>
                  Item details
                </h5>
              </div>

              <hr className='hr-right-menu' />

              <div className='p-4'>
                <div className='w-50 w-mobile mb-4'>
                  <label
                    htmlFor='unit-price'
                    className='form-label d-inline store-label'
                  >
                    Unit price
                  </label>
                  <input
                    className='form-control form-control-lg mt-2 font-input'
                    type='number'
                    id='unit-price'
                    {...register('price')}
                    defaultValue={getProductById?.response?.price}
                  />
                </div>
                <div className='w-50 w-mobile mb-4'>
                  <label
                    htmlFor='unit-stock'
                    className='form-label d-inline store-label'
                  >
                    Stock
                  </label>
                  <div className='inner-container'>
                    <input
                      className='form-control form-control-lg mt-2 font-input'
                      type='text'
                      id='unit-stock'
                    />
                    <p className='inner-input-stock'>Buah</p>
                  </div>
                </div>
                <div className='w-50 w-mobile'>
                  <p className='store-label'>Stock</p>

                  <div className='d-flex flex-row gap-3'>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input is-radio-store-checked'
                        type='radio'
                        id='stock-baru'
                        value='baru'
                      />
                      <label
                        className='form-check-label w-100'
                        htmlFor='stock-baru'
                      >
                        Baru
                      </label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        id='stock-bekas'
                        value='bekas'
                      />
                      <label
                        className='form-check-label w-100'
                        htmlFor='stock-bekas'
                      >
                        Bekas
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card right-menu shadow-sm p-0 card-store-height-3 flex-nowrap'>
              <div className='store-card-title'>
                <h5 className='card-title right-menu-title mb-3'>
                  Photo of goods
                </h5>
              </div>

              <hr className='hr-right-menu' />

              <div className='container p-3 overflow-auto'>
                <div className='container-photo pt-3'>
                  {[1, 2, 3, 4, 5].map((value, index) => {
                    return (
                      <Fragment key={index}>
                        {index === 0 ? (
                          <div className='store-first-card'>
                            {!avatar ? (
                              <BsBox size={50} />
                            ) : (
                              <img
                                alt='Product thumbnail'
                                src={URL.createObjectURL(avatar)}
                                loading='lazy'
                                width='100%'
                                height='100%'
                                className='rounded'
                              />
                            )}
                          </div>
                        ) : (
                          <div className='store-first-card store-second-card'>
                            <BsBox size={50} />
                          </div>
                        )}
                        {index === 0 && (
                          <p className='main-photo'>Foto utama</p>
                        )}
                      </Fragment>
                    )
                  })}

                  <div className='store-widget-bottom-menu'>
                    <div className='vstack'>
                      <hr className='hr-right-menu' />
                      <input
                        type='file'
                        hidden
                        ref={thumbnailProductRef}
                        onChange={(event) => setAvatar(event.target.files[0])}
                      />

                      <button
                        type='button'
                        className='btn rounded-pill btn-select-image btn-upload-image-store'
                        onClick={() => {
                          thumbnailProductRef.current &&
                            thumbnailProductRef.current.click()
                        }}
                      >
                        Upload foto
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card right-menu shadow-sm p-0 card-store-height-3 flex-nowrap'>
              <div className='store-card-title'>
                <h5 className='card-title right-menu-title mb-3'>
                  Description
                </h5>
              </div>

              <hr className='hr-right-menu' />

              <div className='p-3'>
                <SunEditor
                  getSunEditorInstance={getSunEditorInstance}
                  setContents=''
                  onChange={onEditorChange}
                  height='400px'
                />
              </div>
            </div>
          </div>

          {watch('title') && watch('price') && (
            <div className='floating-container'>
              <button type='submit' className='floating-button'>
                Save
              </button>
            </div>
          )}
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmitNewProduct)}>
          <div className='vstack gap-4'>
            <div className='card right-menu shadow-sm p-0 card-store-height-1 flex-nowrap'>
              <div className='store-card-title'>
                <h5 className='card-title right-menu-title mb-3'>Inventory</h5>
              </div>

              <hr className='hr-right-menu' />

              <div className='p-4'>
                <div className='w-50 w-mobile'>
                  <label
                    htmlFor='goods-title'
                    className='form-label d-inline store-label'
                  >
                    Name of goods
                  </label>
                  <input
                    className='form-control form-control-lg mt-2 font-input'
                    {...register('title')}
                    defaultValue=''
                    type='text'
                    id='goods-title'
                  />
                </div>
              </div>
            </div>

            <div className='card right-menu shadow-sm p-0 card-store-height-1 flex-nowrap'>
              <div className='store-card-title'>
                <h5 className='card-title right-menu-title mb-3'>Category</h5>
              </div>

              <hr className='hr-right-menu' />

              <div className='p-4'>
                <div className='w-100'>
                  <SelectCategory
                    categories={categories?.response?.map((item) => ({
                      value: item?.id,
                      label: item?.name
                    }))}
                    onChange={setCategory}
                  />
                </div>
              </div>
            </div>

            <div className='card right-menu flex-nowrap shadow-sm p-0 card-store-height-2'>
              <div className='store-card-title'>
                <h5 className='card-title right-menu-title mb-3'>
                  Item details
                </h5>
              </div>

              <hr className='hr-right-menu' />

              <div className='p-4'>
                <div className='w-50 w-mobile mb-4'>
                  <label
                    htmlFor='unit-price'
                    className='form-label d-inline store-label'
                  >
                    Unit price
                  </label>
                  <input
                    className='form-control form-control-lg mt-2 font-input'
                    type='number'
                    id='unit-price'
                    {...register('price')}
                    defaultValue=''
                  />
                </div>
                <div className='w-50 w-mobile mb-4'>
                  <label
                    htmlFor='unit-stock'
                    className='form-label d-inline store-label'
                  >
                    Stock
                  </label>
                  <div className='inner-container'>
                    <input
                      className='form-control form-control-lg mt-2 font-input'
                      type='text'
                      id='unit-stock'
                    />
                    <p className='inner-input-stock'>Buah</p>
                  </div>
                </div>
                <div className='w-50 w-mobile'>
                  <p className='store-label'>Stock</p>

                  <div className='d-flex flex-row gap-3'>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input is-radio-store-checked'
                        type='radio'
                        id='stock-baru'
                        value='baru'
                      />
                      <label
                        className='form-check-label w-100'
                        htmlFor='stock-baru'
                      >
                        Baru
                      </label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        id='stock-bekas'
                        value='bekas'
                      />
                      <label
                        className='form-check-label w-100'
                        htmlFor='stock-bekas'
                      >
                        Bekas
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card right-menu shadow-sm p-0 card-store-height-3 flex-nowrap'>
              <div className='store-card-title'>
                <h5 className='card-title right-menu-title mb-3'>
                  Photo of goods
                </h5>
              </div>

              <hr className='hr-right-menu' />

              <div className='container p-3 overflow-auto'>
                <div className='container-photo pt-3'>
                  {[1, 2, 3, 4, 5].map((value, index) => {
                    return (
                      <Fragment key={index}>
                        {index === 0 ? (
                          <div className='store-first-card'>
                            {!avatar ? (
                              <BsBox size={50} />
                            ) : (
                              <img
                                alt='Product thumbnail'
                                src={URL.createObjectURL(avatar)}
                                loading='lazy'
                                width='100%'
                                height='100%'
                                className='rounded'
                              />
                            )}
                          </div>
                        ) : (
                          <div className='store-first-card store-second-card'>
                            <BsBox size={50} />
                          </div>
                        )}
                        {index === 0 && (
                          <p className='main-photo'>Foto utama</p>
                        )}
                      </Fragment>
                    )
                  })}

                  <div className='store-widget-bottom-menu'>
                    <div className='vstack'>
                      <hr className='hr-right-menu' />
                      <input
                        type='file'
                        hidden
                        ref={thumbnailProductRef}
                        onChange={(event) => setAvatar(event.target.files[0])}
                      />

                      <button
                        type='button'
                        className='btn rounded-pill btn-select-image btn-upload-image-store'
                        onClick={() => {
                          thumbnailProductRef.current &&
                            thumbnailProductRef.current.click()
                        }}
                      >
                        Upload foto
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card right-menu shadow-sm p-0 card-store-height-3 flex-nowrap'>
              <div className='store-card-title'>
                <h5 className='card-title right-menu-title mb-3'>
                  Description
                </h5>
              </div>

              <hr className='hr-right-menu' />

              <div className='p-3'>
                <SunEditor
                  getSunEditorInstance={getSunEditorInstance}
                  setContents=''
                  onChange={onEditorChange}
                  height='400px'
                />
              </div>
            </div>
          </div>

          {watch('title') && watch('price') && (
            <div className='floating-container'>
              <button type='submit' className='floating-button'>
                Save
              </button>
            </div>
          )}
        </form>
      )}
    </Fragment>
  )
}

export default StoreProfile
