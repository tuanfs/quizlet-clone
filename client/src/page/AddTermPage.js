import React, {useRef, useState} from 'react'
import HeaderAddTerm from '../components/HeaderAddTerm'
import ContentAddTerm from '../components/ContentAddTerm'
import {createCard} from '../features/folderSlice'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import MetaData from '../components/MetaData'

export default function AddTermPage() {
  const dispatch = useDispatch()
  const cardListRef = useRef(null)
  const [titleValue, setTitleValue] = useState('')
  const [descValue, setDescValue] = useState('')
  const [errorTitle, setErrorTitle] = useState(false)
  const [loading, setLoading] = useState(false)
  const [missingQuantity, setMissingQuantity] = useState(false)
  const navigate = useNavigate()

  const [listTerm, setListTerm] = useState([
    {
      term: '',
      defination: ''
    },
    {term: '', defination: ''},
    {
      term: '',
      defination: ''
    },
    {term: '', defination: ''},
    {term: '', defination: ''}
  ])

  const handleCreateCard = async (formValue) => {
    const arrError = []
    if (!titleValue) {
      setErrorTitle(true)
    } else {
      setErrorTitle(false)
    }
    listTerm.forEach((term, index) => {
      if (term.term === '' || term.defination === '') {
        arrError.push(index)
      }
    })
    if (arrError.length > 0) {
      if (cardListRef.current && cardListRef.current.childNodes.length > 0) {
        arrError.forEach((item) => {
          cardListRef.current.childNodes[item].classList.add('error')
        })
        return false
      }
    } else {
      setLoading(true)
      if (formValue.length < 5) {
        setMissingQuantity(true)
      } else {
        await dispatch(
          createCard({
            card: formValue,
            name: titleValue,
            description: descValue
          })
        ).then((res) => {
          if (res.payload.data.success) {
            navigate(`/course-detail/${res.payload.data.course._id}`)
          }
        })
        setLoading(false)
      }
    }
  }

  const handleKeyUp = (element, index, type) => {
    if (type === 'defination') {
      listTerm[index].defination = element
    } else {
      listTerm[index].term = element
    }
    if (element !== '' && cardListRef.current) {
      cardListRef.current.childNodes[index].classList.remove('error')
    }
  }

  return (
    <>
      <MetaData title='Tạo học phần mới'></MetaData>
      <div className='mt-header dark:bg-bgDark'>
        <div className='w-[90%] md:w-[90%] lg:w-[70%] mx-auto'>
          <HeaderAddTerm
            onCreateCard={handleCreateCard}
            titleValue={titleValue}
            setTitleValue={setTitleValue}
            descValue={descValue}
            setDescValue={setDescValue}
            errorTitle={errorTitle}
            editPage={false}
          />
          <ContentAddTerm
            onCreateCard={handleCreateCard}
            cardListRef={cardListRef}
            listTerm={listTerm}
            handleKeyUp={handleKeyUp}
            setListTerm={setListTerm}
            editPage={false}
            loading={loading}
            setMissingQuantity={setMissingQuantity}
            missingQuantity={missingQuantity}
          />
        </div>
      </div>
    </>
  )
}
