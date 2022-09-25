import React, { Fragment, useRef } from 'react'
import { BsBox } from 'react-icons/bs'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'

const StoreProfile = () => {
  const editor = useRef()
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor
  }
  const onEditorChange = (event) => console.log(event)

  return (
    <Fragment>
        <div className="vstack gap-4">
            <div className="card right-menu shadow-sm p-0 card-store-height-1">
                <div className="store-card-title">
                    <h5 className="card-title right-menu-title mb-3">Inventory</h5>
                </div>

                <hr className="hr-right-menu" />

                <div className="p-4">
                    <div className="w-50 w-mobile">
                        <label htmlFor="goods-title" className="form-label d-inline store-label">Name of goods</label>
                        <input className="form-control form-control-lg mt-2 font-input" type="text" id="goods-title" />
                    </div>
                </div>
            </div>

            <div className="card right-menu flex-nowrap shadow-sm p-0 card-store-height-2">
                <div className="store-card-title">
                    <h5 className="card-title right-menu-title mb-3">Item details</h5>
                </div>

                <hr className="hr-right-menu" />

                <div className="p-4">
                    <div className="w-50 w-mobile mb-4">
                        <label htmlFor="unit-price" className="form-label d-inline store-label">Unit price</label>
                        <input className="form-control form-control-lg mt-2 font-input" type="text" id="unit-price" />
                    </div>
                    <div className="w-50 w-mobile mb-4">
                        <label htmlFor="unit-stock" className="form-label d-inline store-label">Stock</label>
                        <div className="inner-container">
                            <input className="form-control form-control-lg mt-2 font-input" type="text" id="unit-stock" />
                            <p className="inner-input-stock">Buah</p>
                        </div>
                    </div>
                    <div className="w-50 w-mobile">
                        <p className="store-label">Stock</p>

                        <div className="d-flex flex-row gap-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input is-radio-store-checked" type="radio" id="stock-baru" value="baru" />
                                <label className="form-check-label w-100" htmlFor="stock-baru">
                                    Baru
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="stock-bekas" value="bekas" />
                                <label className="form-check-label w-100" htmlFor="stock-bekas">
                                    Bekas
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card right-menu shadow-sm p-0 card-store-height-3">
                <div className="store-card-title">
                    <h5 className="card-title right-menu-title mb-3">Photo of goods</h5>
                </div>

                <hr className="hr-right-menu" />

                <div className="container p-3">
                    <div className="container-photo pt-3">
                        {[1, 2, 3, 4, 5].map((value, index) => {
                          return (
                            <Fragment key={index}>
                                <div className={index === 0 ? 'store-first-card' : 'store-first-card store-second-card'}>
                                    <BsBox size={50} />
                                </div>
                                {(index === 0) && <p className="main-photo">Foto utama</p>}
                            </Fragment>
                          )
                        })}

                        <div className="store-widget-bottom-menu">
                            <div className="vstack">
                                <hr className="hr-right-menu" />

                                <button className="btn rounded-pill btn-select-image btn-upload-image-store">
                                    Upload foto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card right-menu shadow-sm p-0 card-store-height-3">
                <div className="store-card-title">
                    <h5 className="card-title right-menu-title mb-3">Description</h5>
                </div>

                <hr className="hr-right-menu" />

                <div className="p-3">
                    <SunEditor
                        getSunEditorInstance={getSunEditorInstance}
                        setContents=""
                        onChange={onEditorChange}
                        height="400px"
                    />
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default StoreProfile
