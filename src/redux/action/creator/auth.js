import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  registerType,
  loginType,
  refreshTokenType,
  logoutType
} from '../type/auth'
import {
  register,
  login,
  refreshToken,
  logout
} from '../../../utils/http'

export const registerActionCreator = createAsyncThunk(registerType, async (data, {
  fulfillWithValue,
  rejectWithValue
}) => {
  try {
    const response = await register(data)

    return fulfillWithValue(response)
  } catch (error) {
    return rejectWithValue(error)
  }
})
export const loginActionCreator = createAsyncThunk(loginType, async (data, {
  fulfillWithValue,
  rejectWithValue
}) => {
  try {
    const response = await login(data)

    return fulfillWithValue(response)
  } catch (error) {
    return rejectWithValue(error)
  }
})
export const refreshTokenActionCreator = createAsyncThunk(refreshTokenType, async (data, {
  fulfillWithValue,
  rejectWithValue
}) => {
  try {
    const response = await refreshToken(data)

    return fulfillWithValue(response)
  } catch (error) {
    return rejectWithValue(error)
  }
})
export const logoutActionCreator = createAsyncThunk(logoutType, async (data, {
  fulfillWithValue,
  rejectWithValue
}) => {
  try {
    const response = await logout(data)

    return fulfillWithValue(response)
  } catch (error) {
    return rejectWithValue(error)
  }
})
