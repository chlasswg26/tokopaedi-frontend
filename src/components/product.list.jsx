import { useDidUpdate } from '@mantine/hooks'
import React, { Fragment, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import toast from 'react-hot-toast'
import { BsArrowDown } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteProductActionCreator, getProductByUserActionCreator } from '../redux/action/creator/product'

const columns = [
  {
    name: 'Title',
    selector: (row) => row.title
  },
  {
    name: 'Price',
    selector: (row) => row.price
  },
  {
    name: 'Category',
    selector: (row) => row.category.name
  }
]

const TableAction = ({ data }) => {
  const dispatch = useDispatch()
  const deleteCategory = useSelector(state => state.category.delete)
  const navigate = useNavigate()

  useDidUpdate(() => {
    toast.remove()

    if (deleteCategory?.isPending) toast.loading('Loading...')

    if (deleteCategory?.isRejected) toast.error(deleteCategory?.errorMessage)

    if (deleteCategory?.isFulfilled) {
      toast.success(`Success delete category ${data?.name}`)

      dispatch(getProductByUserActionCreator())
    }
  }, [deleteCategory])

  return (
    <Fragment>
      <div className='d-flex flex-column justify-content-center gap-2 align-items-center p-2'>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => navigate(`/profile/edit-product/${data?.id}`)}
        >
          Edit {data?.title}
        </button>

        <button
          type='button'
          className='btn btn-danger'
          onClick={() => dispatch(deleteProductActionCreator(data?.id))}
        >
          Delete {data?.title}
        </button>
      </div>
    </Fragment>
  )
}

const ProductList = () => {
  const products = useSelector(state => state.product.getByUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductByUserActionCreator())
  }, [])

  return (
    <Fragment>
      <div className='card right-menu shadow-sm flex-nowrap'>
        <h5 className='card-title right-menu-title mb-3'>My Products</h5>
        <h6 className='card-subtitle mb-2 text-muted'>List of your products</h6>

        <hr className='hr-right-menu' />

        <DataTable
          pagination
          sortIcon={<BsArrowDown />}
          direction='auto'
          expandableRows
          expandableRowsComponent={TableAction}
          fixedHeader
          fixedHeaderScrollHeight='500px'
          highlightOnHover
          responsive
          subHeaderAlign='right'
          subHeaderWrap
          columns={columns}
          data={products?.response}
        />
      </div>
    </Fragment>
  )
}

export default ProductList
