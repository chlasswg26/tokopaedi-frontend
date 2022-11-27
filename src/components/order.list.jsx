import React, { Fragment, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { BsArrowDown } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactionActionCreator } from '../redux/action/creator/transaction'

const columns = [
  {
    name: 'Product',
    selector: (row) => row.product.title
  },
  {
    name: 'Price',
    selector: (row) => row.product.price
  },
  {
    name: 'Quantity',
    selector: (row) => row.quantity
  },
  {
    name: 'Total',
    selector: (row) => row.price
  },
  {
    name: 'Category',
    selector: (row) => row.product.category.name
  }
]

const OrderList = () => {
  const transactions = useSelector(state => state.transaction.get)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTransactionActionCreator())
  }, [])

  return (
    <Fragment>
      <div className='card right-menu shadow-sm flex-nowrap'>
        <h5 className='card-title right-menu-title mb-3'>Transactions</h5>
        <h6 className='card-subtitle mb-2 text-muted'>
          List of your transaction
        </h6>

        <hr className='hr-right-menu' />

        <DataTable
          pagination
          sortIcon={<BsArrowDown />}
          direction='auto'
          fixedHeader
          fixedHeaderScrollHeight='500px'
          highlightOnHover
          responsive
          subHeaderAlign='right'
          subHeaderWrap
          columns={columns}
          data={transactions?.response}
        />
      </div>
    </Fragment>
  )
}

export default OrderList
