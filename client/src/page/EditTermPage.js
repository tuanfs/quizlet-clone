import React, {useState, useEffect, useRef} from 'react'
import HeaderAddTerm from '../components/HeaderAddTerm'
import ContentAddTerm from '../components/ContentAddTerm'
import {useDispatch, useSelector} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
import {getCourse, getCourseItem, updateCourse} from '../features/courseSlice'
import MetaData from '../components/MetaData'

export default function EditTermPage() {
  const dispatch = useDispatch()
  const itemCourse = useSelector(getCourseItem)
  const cardListRef = useRef(null)
  const [titleValue, setTitleValue] = useState('')
  const [descValue, setDescValue] = useState('')
  const [errorTitle, setErrorTitle] = useState(false)
  const [missingQuantity, setMissingQuantity] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()

  const [listTerm, setListTerm] = useState([])

  useEffect(() => {
    if (Object.keys(itemCourse).length > 0) {
      setTitleValue(itemCourse.name)
      setDescValue(itemCourse.description)
      const newCourse = itemCourse.card.map((item) => ({
        _id: item._id,
        defination: item.defination,
        term: item.term
      }))
      setListTerm(newCourse)
    }
  }, [itemCourse])

  useEffect(() => {
    dispatch(getCourse(id))
  }, [dispatch, id])

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
      if (formValue.length < 5) {
        setMissingQuantity(true)
      } else {
        setLoading(true)
        await dispatch(
          updateCourse({
            id: id,
            value: {
              card: formValue,
              name: titleValue,
              description: descValue
            }
          })
        ).then((res) => {
          if (res.payload.status) {
            navigate(`/course-detail/${id}`)
          }
        })
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
      <MetaData title='Chỉnh sửa khóa học' />
      <div className='mt-header dark:bg-bgDark'>
        <div className='w-[90%] md:w-[90%] lg:w-[70%] mx-auto'>
          <HeaderAddTerm
            onCreateCard={handleCreateCard}
            titleValue={titleValue}
            setTitleValue={setTitleValue}
            descValue={descValue}
            setDescValue={setDescValue}
            errorTitle={errorTitle}
            itemCourse={itemCourse}
            editPage={true}
          />
          <ContentAddTerm
            onCreateCard={handleCreateCard}
            cardListRef={cardListRef}
            listTerm={listTerm}
            handleKeyUp={handleKeyUp}
            setListTerm={setListTerm}
            itemCourse={itemCourse}
            editPage={true}
            loading={loading}
            setMissingQuantity={setMissingQuantity}
            missingQuantity={missingQuantity}
          />
        </div>
      </div>
    </>
  )
}
