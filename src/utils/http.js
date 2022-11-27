import axios from 'axios'
import { Duration } from '@icholy/duration'
import qs from 'qs'
import { refreshTokenActionCreator } from '../redux/action/creator/auth'
import { customHistory as history } from '../routers/browserHistory'

let store
export const injectStore = _store => {
  store = _store
}

const REACT_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL
const REACT_APP_REQUEST_TIMEOUT = import.meta.env.VITE_APP_REQUEST_TIMEOUT

const axiosInstance = axios.create()
const duration = new Duration(REACT_APP_REQUEST_TIMEOUT)

axiosInstance.defaults.baseURL = REACT_APP_BACKEND_URL
axiosInstance.defaults.timeout = duration.milliseconds()
axiosInstance.defaults.withCredentials = true
axiosInstance.defaults.paramsSerializer = (params) => qs.stringify(params, {
  arrayFormat: 'brackets'
})

axiosInstance.interceptors.request.use(
  (config) => {
    const isFormDataInstance = config.data instanceof FormData

    if (!isFormDataInstance) config.data = qs.stringify(config.data)

    const token = localStorage.getItem('@acc_token')

    if (token !== null) config.headers.common.Authorization = `Bearer ${token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use(
  (response) => {
    const token = response.data?.data?.accessToken

    if (token) localStorage.setItem('@acc_token', token)

    return response
  },
  async (error) => {
    const originalRequest = error.config

    if (
      originalRequest.url.includes('/auth/refresh-token') &&
      (error?.response?.data.data.message === 'jwt expired' ||
        error?.response?.data?.data?.message === 'Session unavailable' ||
        error?.response?.data?.data?.message === 'Refresh token unavailable' ||
        error?.response?.data?.data?.message ===
          'Refresh token must be conditioned')
    ) {
      localStorage.clear()
      history.replace('/')

      return Promise.reject()
    }

    if (
      !originalRequest.url.includes('/auth/refresh-token') &&
      error?.response?.data?.data?.message === 'Session unavailable'
    ) {
      localStorage.clear()

      return Promise.reject()
    }

    if (
      !originalRequest.url.includes('/auth/refresh-token') &&
        (error?.response?.data.data.message === 'jwt expired' ||
          error?.response?.data?.data?.message ===
            'Bearer token must be conditioned') &&
        !originalRequest?._retry
    ) {
      try {
        await store.dispatch(refreshTokenActionCreator())

        originalRequest.headers.Authorization = `Bearer ${
            store.getState().auth.refreshToken?.response?.token
          }`
        originalRequest._retry = true

        return Promise.resolve(axios(originalRequest))
      } catch (errorDispatchRefreshTokenActionCreator) {
        return Promise.reject(errorDispatchRefreshTokenActionCreator)
      }
    }

    return Promise.reject(error)
  }
)

const AUTHENTICATION_PATH = '/auth'
const CATEGORY_PATH = '/categories'
const PROFILE_PATH = '/profile'
const PRODUCT_PATH = '/products'
const TRANSACTION_PATH = '/transactions'
const USER_PATH = '/users'

const queryParams = (value = {}) => {
  return {
    params: value
  }
}

export const register = async (data = {}) => await axiosInstance.post(`${AUTHENTICATION_PATH}/register`, data)
export const login = async (data = {}) => await axiosInstance.post(`${AUTHENTICATION_PATH}/login`, data)
export const refreshToken = async () => await axiosInstance.get(`${AUTHENTICATION_PATH}/refresh-token`)
export const logout = async () => await axiosInstance.get(`${AUTHENTICATION_PATH}/logout`)

export const fetchProfile = async () => await axiosInstance.get(PROFILE_PATH)
export const updateProfile = async (profileId = '', profileData = {}) =>
  await axiosInstance.put(`${PROFILE_PATH}/${profileId}`, profileData)

export const getAllCategory = async (filter = {}) => await axiosInstance.get(CATEGORY_PATH, queryParams(filter))
export const getCategoryById = async (id = '') => await axiosInstance.get(`${CATEGORY_PATH}/${id}`)
export const postCategory = async (data = {}) => await axiosInstance.post(CATEGORY_PATH, data)
export const putCategory = async (id = '', data = {}) => await axiosInstance.put(`${CATEGORY_PATH}/${id}`, data)
export const deleteCategory = async (id = '') => await axiosInstance.delete(`${CATEGORY_PATH}/${id}`)

export const getAllProduct = async (filter = {}) => await axiosInstance.get(PRODUCT_PATH, queryParams(filter))
export const getAllProductByUser = async (filter = {}) => await axiosInstance.get(`${PRODUCT_PATH}/profile/user`, queryParams(filter))
export const getProductById = async (id = '') => await axiosInstance.get(`${PRODUCT_PATH}/${id}`)
export const postProduct = async (data = {}) => await axiosInstance.post(PRODUCT_PATH, data)
export const putProduct = async (id = '', data = {}) => await axiosInstance.put(`${PRODUCT_PATH}/${id}`, data)
export const deleteProduct = async (id = '') => await axiosInstance.delete(`${PRODUCT_PATH}/${id}`)

export const getAllTransaction = async (filter = {}) => await axiosInstance.get(TRANSACTION_PATH, queryParams(filter))
export const getTransactionById = async (id = '') => await axiosInstance.get(`${TRANSACTION_PATH}/${id}`)
export const postTransaction = async (data = {}) => await axiosInstance.post(TRANSACTION_PATH, data)
export const putTransaction = async (id = '', data = {}) => await axiosInstance.put(`${TRANSACTION_PATH}/${id}`, data)

export const getAllUser = async (filter = {}) => await axiosInstance.get(USER_PATH, queryParams(filter))
export const getUserById = async (id = '') => await axiosInstance.get(`${USER_PATH}/${id}`)
export const postUser = async (data = {}) => await axiosInstance.post(USER_PATH, data)
export const putUser = async (id = '', data = {}) => await axiosInstance.put(`${USER_PATH}/${id}`, data)
export const deleteUser = async (id = '') => await axiosInstance.delete(`${USER_PATH}/${id}`)
