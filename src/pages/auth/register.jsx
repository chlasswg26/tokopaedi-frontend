import React, { Fragment, useState } from 'react'
import logo from '../../assets/img/logo.png'
import '../../assets/css/authentication.css'
import { useDidUpdate, useDocumentTitle } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom/dist'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { joiResolver } from '@hookform/resolvers/joi'
import { registerActionCreator } from '../../redux/action/creator/auth'
import toast from 'react-hot-toast'
import * as Joi from 'joi'

const REACT_APP_NAME = import.meta.env.VITE_APP_TITLE

const RegisterSchema = Joi.object({
  name: Joi.string().label('Name').min(4).required(),
  email: Joi.string()
    .label('Email')
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .label('Password')
    .pattern(/^[a-zA-Z0-9]{8,30}$/)
    .message(
      'Must include lower case character or uppercase character, number 0-9 and min 8 character or max 30 character'
    )
    .required(),
  store: Joi.string().label('Store name').max(120).allow('').optional(),
  phone: Joi.number().label('Phone').min(10).allow('').optional()
})

const Register = () => {
  useDocumentTitle(`${REACT_APP_NAME} - Registration`)

  const [activeTab, setActiveTab] = useState('buyer')
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(RegisterSchema)
  })
  const dispatch = useDispatch()
  const registration = useSelector((state) => state.auth.register)

  const onLogin = (data) => {
    data.role = activeTab

    dispatch(registerActionCreator(data))
  }

  useDidUpdate(() => {
    toast.remove()

    if (errors.name) toast.error(errors?.name?.message)

    if (errors.email) toast.error(errors?.email?.message)

    if (errors.store) toast.error(errors?.store?.message)

    if (errors.phone) toast.error(errors?.phone?.message)

    if (errors.password) toast.error(errors?.password?.message)
  }, [errors])

  useDidUpdate(() => {
    toast.remove()

    if (registration?.isPending) toast.loading('Loading...')

    if (registration?.isRejected) toast.error(registration?.errorMessage)

    if (registration?.isFulfilled) {
      reset()

      toast.success('Registration success, check your email', {
        duration: 10000
      })
    }
  }, [registration])

  return (
    <Fragment>
      <div className='container p-4'>
        <div className='vstack'>
          <div className='vstack mx-auto gap-2 mb-5'>
            <div className='text-center mb-5'>
              <img src={logo} className='img-fluid' alt='Tokopaedi Logo' />
            </div>

            <p className='text-center caption'>
              Please sign up with your account
            </p>

            <nav className='nav nav-fill'>
              <a
                type='button'
                className={`nav-link rounded-start ${
                  activeTab === 'buyer'
                    ? 'custom-btn-active'
                    : 'custom-btn-unactive'
                }`}
                aria-current='buyer'
                onClick={() => setActiveTab('buyer')}
              >
                Customer
              </a>
              <a
                type='button'
                className={`nav-link rounded-end ${
                  activeTab === 'seller'
                    ? 'custom-btn-active'
                    : 'custom-btn-unactive'
                }`}
                aria-current='seller'
                onClick={() => setActiveTab('seller')}
              >
                Seller
              </a>
            </nav>
          </div>

          <form onSubmit={handleSubmit(onLogin)}>
            <div className='vstack align-items-center mb-5'>
              <div className='form-floating mb-3 size-input'>
                <input
                  type='text'
                  {...register('name')}
                  className='form-control font-input'
                  id='register-name'
                  placeholder='Name'
                />
                <label className='font-label' htmlFor='register-name'>
                  Name
                </label>
              </div>
              <div className='form-floating mb-3 size-input'>
                <input
                  type='email'
                  {...register('email')}
                  className='form-control font-input'
                  id='register-email'
                  placeholder='Email'
                />
                <label className='font-label' htmlFor='register-email'>
                  Email
                </label>
              </div>
              {activeTab === 'seller' && (
                <Fragment>
                  <div className='form-floating mb-3 size-input'>
                    <input
                      type='text'
                      {...register('phone')}
                      className='form-control font-input'
                      id='register-phone'
                      placeholder='Phone number'
                    />
                    <label className='font-label' htmlFor='register-phone'>
                      Phone number
                    </label>
                  </div>
                  <div className='form-floating mb-3 size-input'>
                    <input
                      type='text'
                      {...register('store')}
                      className='form-control font-input'
                      id='register-store'
                      placeholder='Store name'
                    />
                    <label className='font-label' htmlFor='register-store'>
                      Store name
                    </label>
                  </div>
                </Fragment>
              )}
              <div className='form-floating mb-3 size-input'>
                <input
                  type='password'
                  {...register('password')}
                  className='form-control font-input'
                  id='register-password'
                  placeholder='Password'
                />
                <label className='font-label' htmlFor='register-password'>
                  Password
                </label>
              </div>
            </div>

            <div className='vstack align-items-center gap-5'>
              <button
                type='submit'
                className='btn rounded-pill btn-login-page'
              >
                <strong className='btn-primary-auth'>Register</strong>
              </button>

              <span>
                {`Already have a ${REACT_APP_NAME} account? `}
                <a
                  type='button'
                  className='btn-link'
                  onClick={() => navigate('/auth/signin')}
                >
                  Login
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Register
