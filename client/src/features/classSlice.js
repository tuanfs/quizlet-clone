import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import api from '../commons/api'

const initialState = {
  loading: false,
  classList: [],
  classItem: {}
}

export const createClass = createAsyncThunk(
  'CREATE_CLASS',
  async (formValue) => {
    const res = await api.post('/class/create', formValue)
    return res
  }
)

export const getOneClass = createAsyncThunk('GET_ONE_CLASS', async (id) => {
  const res = await api.get(`/class/${id}`)
  return res.data
})

export const getAllClass = createAsyncThunk('GET_ONE_CLASS', async () => {
  const res = await api.get(`/class`)
  return res.data.classes
})

export const deleteClass = createAsyncThunk('DELETE_CLASS', async (id) => {
  const res = await api.delete(`/class/delete/${id}`)
  return res
})
const classSlice = createSlice({
  name: 'class',
  initialState,
  reducers: {
    resetClassSlice(state) {
      state.loading = false
      state.classList = []
      state.classItem = {}
    }
  },
  extraReducers: {
    [createClass.pending]: (state) => {
      return {...state, loading: true}
    },
    [createClass.fulfilled]: (state) => {
      return {...state, loading: false}
    },
    [createClass.rejected]: (state) => {
      return {...state, loading: false}
    },
    [getOneClass.pending]: (state) => {
      return {...state, loading: true}
    },
    [getOneClass.fulfilled]: (state, {payload}) => {
      return {...state, loading: false, classItem: payload}
    },
    [getOneClass.rejected]: (state) => {
      return {...state, loading: false}
    },
    [getAllClass.pending]: (state) => {
      return {...state, loading: true}
    },
    [getAllClass.fulfilled]: (state, {payload}) => {
      return {...state, loading: false, classList: payload.classList}
    },
    [getAllClass.rejected]: (state) => {
      return {...state, loading: false}
    },
    [deleteClass.pending]: (state) => {
      return {...state, loading: true}
    },
    [deleteClass.fulfilled]: (state) => {
      return {...state, loading: false}
    },
    [deleteClass.rejected]: (state) => {
      return {...state, loading: false}
    }
  }
})

export const getClassList = (state) => state.class.classList
export const getClassItem = (state) => state.class.classItem

export const {resetClassSlice} = classSlice.actions

export default classSlice.reducer
