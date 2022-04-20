import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import api from '../commons/api'
import {resetClassSlice} from './classSlice'
import {resetCourseSlice} from './courseSlice'
import {resetFolderSlice} from './folderSlice'
import {getAllClass} from './classSlice'
import {getAllCourse} from './courseSlice'
import {getAllFolder} from './folderSlice'
const initialState = {
  loading: false,
  isRegister: false,
  isAuthenticated: false
}

export const logoutUser = (dispatch) => {
  dispatch(resetClassSlice())
  dispatch(resetCourseSlice())
  dispatch(resetFolderSlice())
}

export const loginUserGetData = (dispatch) => {
  dispatch(getAllClass())
  dispatch(getAllCourse())
  dispatch(getAllFolder())
}

export const loginUser = createAsyncThunk('login', async (formValue) => {
  const res = await api.post('/login', formValue)
  return res
})

export const registerUser = createAsyncThunk('register', async (formValue) => {
  const res = await api.post('/register', formValue)
  return res
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUser(state, {payload}) {
      state.isAuthenticated = payload
    },
    logOut(state) {
      state.isAuthenticated = false
      localStorage.removeItem('IS_AUTHENTICATED')
    }
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      return {...state, loading: true}
    },
    [registerUser.fulfilled]: (state, {payload}) => {
      return {...state, isRegister: payload.data.success, loading: false}
    },
    [registerUser.rejected]: (state, {payload}) => {
      return {...state, isRegister: false, loading: false}
    },
    [loginUser.pending]: (state) => {
      return {...state, loading: true}
    },
    [loginUser.fulfilled]: (state, {payload}) => {
      localStorage.setItem('IS_AUTHENTICATED', payload.status)
      return {...state, isAuthenticated: payload.status, loading: false}
    },
    [loginUser.rejected]: (state, {payload}) => {
      return {...state, isAuthenticated: payload.status, loading: false}
    }
  }
})

export const getIsAuthentication = (state) => state.auth.isAuthenticated
export const getLoadingAuth = (state) => state.auth.loading

export const {loadUser, logOut} = authSlice.actions

export default authSlice.reducer
