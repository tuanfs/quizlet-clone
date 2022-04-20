import React from 'react'
import ReactLoading from 'react-loading'

export default function LoadingBtn({height, width}) {
  return (
    <ReactLoading type={'spin'} color={'#333'} height={height} width={width} />
  )
}
