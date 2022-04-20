import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import api from '../commons/api'

const initialState = {
  listCourse: [],
  loading: false,
  itemCourse: {},
  listCardFolder: [],
  countItem: 0
}

export const updateOneTerm = createAsyncThunk(
  'Update one term',
  async (formValue) => {
    const res = await api.put(
      `/course/update-one/${formValue.id}`,
      formValue.value
    )
    return res
  }
)

export const getCardByIdFolder = createAsyncThunk(
  'getCardByIdFolder',
  async (folderId) => {
    const res = await api.get(`/folder/${folderId}`)
    return res
  }
)

export const getCourse = createAsyncThunk('getCourse', async (id) => {
  const res = await api.get(`/course/course-item/${id}`)
  return res.data.courseItem
})

export const getAllCourse = createAsyncThunk('getAllCourse', async () => {
  const res = await api.get('/course')
  return res.data
})

export const updateCourse = createAsyncThunk(
  'updateCourse',
  async (formValue) => {
    const res = await api.put(`/course/update/${formValue.id}`, formValue.value)
    return res
  }
)

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    resetCourseSlice(state) {
      state.listCourse = []
      state.loading = false
      state.itemCourse = {}
      state.listCardFolder = []
      state.countItem = 0
    }
  },
  extraReducers: {
    [getAllCourse.pending]: (state) => {
      return {...state, loading: true}
    },
    [getAllCourse.fulfilled]: (state, {payload}) => {
      return {...state, loading: false, listCourse: payload.course}
    },
    [getAllCourse.rejected]: (state) => {
      return {...state, loading: false}
    },
    [getCourse.pending]: (state) => {
      return {...state, loading: true}
    },
    [getCourse.fulfilled]: (state, {payload}) => {
      return {...state, loading: false, itemCourse: payload}
    },
    [getCourse.rejected]: (state) => {
      return {...state, loading: false}
    },
    [getCardByIdFolder.pending]: (state) => {
      return {...state, loading: true}
    },
    [getCardByIdFolder.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        loading: false,
        listCardFolder: payload.listItem,
        countItem: payload.countItem
      }
    },
    [getCardByIdFolder.rejected]: (state) => {
      return {
        ...state,
        loading: false
      }
    },
    [updateOneTerm.pending]: (state) => {
      return {...state, loading: true}
    },
    [updateOneTerm.fulfilled]: (state) => {
      return {...state, loading: false}
    },
    [updateOneTerm.rejected]: (state) => {
      return {...state, loading: false}
    },
    [updateCourse.pending]: (state) => {
      return {...state, loading: true}
    },
    [updateCourse.fulfilled]: (state) => {
      return {...state, loading: false}
    },
    [updateCourse.rejected]: (state) => {
      return {...state, loading: false}
    }
  }
})

export const getLoadingCourse = (state) => state.course.loading
export const getAllCourseList = (state) => state.course.listCourse
export const getCourseItem = (state) => state.course.itemCourse
export const getListCardFolder = (state) => state.course.listCardFolder
export const getCountItem = (state) => state.course.itemCourse.total

export const {resetCourseSlice} = courseSlice.actions

export default courseSlice.reducer
