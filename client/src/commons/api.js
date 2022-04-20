import axios from 'axios'

// Release
const url =
  process.env.NODE_ENV !== 'production'
    ? 'https://young-shore-09999.herokuapp.com/api'
    : 'https://young-shore-09999.herokuapp.com/api'
// const url = 'http://localhost:5500/api'
// const url = 'https://young-shore-09999.herokuapp.com/api'
// const localToken = localStorage.getItem('LOCAL_TOKEN')
export default axios.create({
  baseURL: url,
  headers: {
    // Authorization: `Bearer ${localToken}`
    // ' Access-Control-Allow-Origin': 'http://localhost:3000',
    // 'Access-Control-Allow-Credentials': 'true',
    // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    // 'Access-Control-Allow-Headers': ' Origin, Content-Type, Accept'
  }
})
