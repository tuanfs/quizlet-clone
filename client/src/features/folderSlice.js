import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import api from '../commons/api'

const initialState = {
  listFolder: [],
  loading: false,
  folder: {},
  listTerm: []
}

export const createCard = createAsyncThunk('createCard', async (formValue) => {
  const res = await api.post('/course/create', formValue)
  return res
})

export const getAllFolder = createAsyncThunk('getAllFolder', async () => {
  const res = await api.get('/folder')
  return res.data
})

export const getFolder = createAsyncThunk('getFolder', async (id) => {
  const res = await api.get(`/folder/${id}`)
  return res.data
})

export const createFolder = createAsyncThunk(
  'createFolder',
  async (formValue) => {
    const res = await api.post('/folder/create', formValue)
    return res
  }
)

export const addCourseToFolder = createAsyncThunk(
  'addCourseToFolder',
  async (idValue) => {
    const res = await api.put(`/folder/add-course/${idValue.idFolder}`, {
      idCourse: idValue.idCourse
    })

    return res.data
  }
)

export const removeCourseOutFolder = createAsyncThunk(
  'removeCourseOutFolder',
  async (idValue) => {
    const res = await api.put(`/folder/remove-course/${idValue.idFolder}`, {
      idCourse: idValue.idCourse
    })

    return res.data
  }
)

export const getAllTermByIdFolder = createAsyncThunk(
  'getAllCourseByIdFolder',
  async (id) => {
    const res = await api.get(`/folder/course/${id}`)
    return res.data
  }
)

export const deleteFolder = createAsyncThunk('deleteFolder', async (id) => {
  const res = await api.delete(`/folder/delete/${id}`)
  return res
})

const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    resetFolderSlice(state) {
      state.listFolder = []
      state.loading = false
      state.folder = {}
      state.listTerm = []
    }
  },
  extraReducers: {
    [getAllFolder.pending]: (state) => {
      return {...state, loading: true}
    },
    [getAllFolder.fulfilled]: (state, {payload}) => {
      return {...state, loading: false, listFolder: payload.folder.folderList}
    },
    [getAllFolder.rejected]: (state) => {
      return {...state, loading: false}
    },
    [createFolder.pending]: (state) => {
      return {...state, loading: true}
    },
    [createFolder.fulfilled]: (state, {payload}) => {
      console.log(payload)
      return {...state, loading: false}
    },
    [createFolder.rejected]: (state) => {
      return {...state, loading: false}
    },
    [getFolder.pending]: (state) => {
      return {...state, loading: true}
    },
    [getFolder.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        loading: false,
        folder: payload.folder
      }
    },
    [getFolder.rejected]: (state) => {
      return {...state, loading: false}
    },
    [createCard.pending]: (state) => {
      return {...state, loading: true}
    },
    [createCard.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        loading: false
      }
    },
    [addCourseToFolder.pending]: (state) => {
      return {...state}
    },
    [addCourseToFolder.fulfilled]: (state) => {
      return {
        ...state,
        loading: false
      }
    },
    [addCourseToFolder.rejected]: (state) => {
      return {...state}
    },
    [removeCourseOutFolder.pending]: (state) => {
      return {...state}
    },
    [removeCourseOutFolder.fulfilled]: (state) => {
      return {
        ...state,
        loading: false
      }
    },
    [removeCourseOutFolder.rejected]: (state) => {
      return {...state}
    },
    [getAllTermByIdFolder.pending]: (state) => {
      return {...state, loading: true}
    },
    [getAllTermByIdFolder.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        loading: false,
        listTerm: payload.courses
      }
    },
    [getAllTermByIdFolder.rejected]: (state) => {
      return {...state, loading: false}
    },
    [deleteFolder.pending]: (state) => {
      return {...state, loading: true}
    },
    [deleteFolder.fulfilled]: (state) => {
      return {...state, loading: false}
    },
    [deleteFolder.rejected]: (state) => {
      return {...state, loading: false}
    }
  }
})

export const getLoadingFolder = (state) => state.folder.loading
export const getListTerm = (state) => state.folder.listTerm
export const getFolderItem = (state) => state.folder.folder
export const getAllFolderList = (state) => state.folder.listFolder

export const {resetFolderSlice} = folderSlice.actions

export default folderSlice.reducer
