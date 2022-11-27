import React, { Fragment, useEffect, useState } from 'react'
import logo from '../../assets/img/logo.png'
import '../../assets/css/authentication.css'
import { useDidUpdate, useDocumentTitle } from '@mantine/hooks'
import { useNavigate, useSearchParams } from 'react-router-dom/dist'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { loginActionCreator } from '../../redux/action/creator/auth'
import { joiResolver } from '@hookform/resolvers/joi'
import * as Joi from 'joi'

const REACT_APP_NAME = import.meta.env.VITE_APP_TITLE

const LoginSchema = Joi.object({
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
    .required()
})

const Login = () => {
  useDocumentTitle(`${REACT_APP_NAME} - Login`)

  const [activeTab, setActiveTab] = useState('buyer')
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(LoginSchema)
  })
  const dispatch = useDispatch()
  const login = useSelector(state => state.auth.login)
  const [searchParams] = useSearchParams()
  const verification = searchParams.get('msg')

  const onLogin = (data) => {
    toast.remove()

    dispatch(loginActionCreator(data))
  }

  useDidUpdate(() => {
    toast.remove()

    if (errors.email) toast.error(errors?.email?.message)

    if (errors.password) toast.error(errors?.password?.message)
  }, [errors])

  useDidUpdate(() => {
    toast.remove()

    if (login?.isPending) toast.loading('Loading...')

    if (login?.isRejected) toast.error(login?.errorMessage)

    if (login?.isFulfilled) toast.success('Login success')
  }, [login])

  useEffect(() => {
    toast.remove()

    if (verification === 'ok') {
      toast.success('Verification success, you can signin', { duration: 5000 })
    }
  }, [verification])

  return (
    <Fragment>
      <div className='container p-4'>
        <div className='vstack'>
          <div className='vstack mx-auto gap-2 mb-5'>
            <div className='text-center mb-5'>
              <img src={logo} className='img-fluid' alt='Tokopaedi Logo' />
            </div>

            <p className='text-center caption'>
              Please login with your account
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
                  type='email'
                  className='form-control font-input'
                  id='login-email'
                  placeholder='Email'
                  {...register('email')}
                />
                <label className='font-label' htmlFor='login-email'>
                  Email
                </label>
              </div>
              <div className='form-floating mb-3 size-input'>
                <input
                  type='password'
                  className='form-control font-input'
                  id='login-password'
                  placeholder='Password'
                  {...register('password')}
                />
                <label className='font-label' htmlFor='login-password'>
                  Password
                </label>
              </div>
            </div>

            <div className='vstack align-items-center gap-5'>
                <button type='submit' className='btn rounded-pill btn-login-page'>
                    <strong className='btn-primary-auth'>Login</strong>
                </button>

                <p>
                {`Don't have a ${REACT_APP_NAME} account? `}
                <a
                    type='button'
                    className='btn-link'
                    onClick={() => navigate('/auth/signup')}
                >
                    Register
                </a>
                </p>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
