import { Fragment, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { BsArrowDown } from 'react-icons/bs'
import '../assets/css/floating.button.css'
import Modal from './modal'
import { joiResolver } from '@hookform/resolvers/joi'
import * as Joi from 'joi'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useDidUpdate } from '@mantine/hooks'
import toast from 'react-hot-toast'
import { deleteCategoryActionCreator, getCategoryActionCreator, postCategoryActionCreator } from '../redux/action/creator/category'

const columns = [
  {
    name: 'Name',
    selector: (row) => row.name
  }
]

const AddCategorySchema = Joi.object({
  name: Joi.string()
    .label('Category name')
    .required()
})

const ModalFooter = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='hstack gap-3 address-content-footer'>
          <button
            type="submit"
            className='btn rounded-pill btn-save-modal'
          >
            Save
          </button>
        </div>
      </div>
    </Fragment>
  )
}

const AddCategoryModal = (props) => {
  const { registerInput, dispatch } = props

  return (
    <Modal
      modalId='addCategory'
      modalTitle='Add New Category'
      modalSize='modal-lg'
      enableFooter={true}
      footerContent={<ModalFooter dispatch={dispatch} />}
      styled={true}
    >
      <Fragment>
        <div className='container'>
          <div className='vstack align-items-center gap-5'>
            <div className='form-floating mb-3 size-input'>
              <input
                type='text'
                className='form-control font-input'
                id='category-name'
                placeholder='Category name'
                {...registerInput('name')}
              />
              <label className='font-label' htmlFor='category-name'>
                Name
              </label>
            </div>
          </div>
        </div>
      </Fragment>
    </Modal>
  )
}

const TableAction = ({ data }) => {
  const dispatch = useDispatch()
  const deleteCategory = useSelector(state => state.category.delete)

  useDidUpdate(() => {
    toast.remove()

    if (deleteCategory?.isPending) toast.loading('Loading...')

    if (deleteCategory?.isRejected) toast.error(deleteCategory?.errorMessage)

    if (deleteCategory?.isFulfilled) {
      toast.success(`Success delete category ${data?.name}`)

      dispatch(getCategoryActionCreator())
    }
  }, [deleteCategory])

  return (
    <Fragment>
      <div className='d-flex justify-content-center align-items-center p-2'>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => dispatch(deleteCategoryActionCreator(data?.id))}
        >
          Delete {data?.name}
        </button>
      </div>
    </Fragment>
  )
}

const CategoryProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(AddCategorySchema)
  })
  const dispatch = useDispatch()
  const postCategory = useSelector(state => state.category.post)
  const categories = useSelector((state) => state.category.get)

  const onSubmitNewCategory = (data) => {
    dispatch(postCategoryActionCreator(data))
  }

  useEffect(() => {
    dispatch(getCategoryActionCreator())
  }, [])

  useDidUpdate(() => {
    toast.remove()

    if (errors?.name) toast.error(errors?.name?.message)
  }, [errors])

  useDidUpdate(() => {
    toast.remove()

    if (postCategory?.isPending) toast.loading('Loading...')

    if (postCategory?.isRejected) toast.error(postCategory?.errorMessage)

    if (postCategory?.isFulfilled) {
      toast.success('Success add new category')

      dispatch(getCategoryActionCreator())
    }

    reset()
  }, [postCategory])

  return (
    <Fragment>
      <div className='card right-menu shadow-sm w-100 flex-nowrap'>
        <h5 className='card-title right-menu-title mb-3'>Categories</h5>
        <h6 className='card-subtitle mb-2 text-muted'>List of category</h6>

        <hr className='hr-right-menu' />

        <div className='container'>
          <DataTable
            pagination
            sortIcon={<BsArrowDown />}
            direction='auto'
            expandableRows
            expandableRowsComponent={TableAction}
            fixedHeader
            fixedHeaderScrollHeight='350px'
            highlightOnHover
            responsive
            subHeaderAlign='right'
            subHeaderWrap
            columns={columns}
            data={categories?.response || []}
          />
        </div>
      </div>

      <div className='floating-container'>
        <a
          type='button'
          data-bs-toggle='modal'
          href='#addCategory'
          className='floating-button'
        >
          +
        </a>
      </div>

      <form onSubmit={handleSubmit(onSubmitNewCategory)}>
        <AddCategoryModal registerInput={register} />
      </form>
    </Fragment>
  )
}

export default CategoryProfile
