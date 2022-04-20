import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'
import courseReducer from './courseSlice'
import folderReducer from './folderSlice'
import classReducer from './classSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    folder: folderReducer,
    class: classReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
