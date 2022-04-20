import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loadUser} from '../../features/authSlice'
import setAuthToken from '../../commons/setAuthToken'
export default function LoadUser() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('IS_AUTHENTICATED')) {
      dispatch(loadUser(true))
      setAuthToken(localStorage.getItem('LOCAL_TOKEN'))
    } else {
      dispatch(loadUser(false))
    }
  }, [dispatch])

  return <></>
}
