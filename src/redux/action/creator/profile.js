import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileType, putProfileType } from '../type/profile'
import { fetchProfile, updateProfile } from '../../../utils/http'

export const getProfileActionCreator = createAsyncThunk(
  getProfileType,
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchProfile()

      return fulfillWithValue(response)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const putProfileActionCreator = createAsyncThunk(
  putProfileType,
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await updateProfile(data?.id, data?.value)

      return fulfillWithValue(response)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
