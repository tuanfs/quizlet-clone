import React, {useState, useEffect} from 'react'
import ChoiceItem from '../ChoiceItem'
import WriteItem from '../WriteItem'

export default function ChoiceList({listItem, countItem}) {
  const [newCard, setNewCard] = useState({})
  const [typeLearn, setTypeLearn] = useState(false)
  const [lastTerm, setLastTerm] = useState([])
  const onNewCard = () => {
    if (lastTerm.length < countItem) {
      let listRandom = []
      listRandom = listItem.filter((item) => {
        if (lastTerm.length === 0) {
          return true
        } else {
          return lastTerm.every(
            (term) => term._id.toString() !== item._id.toString()
          )
        }
      })

      listRandom.sort((a, b) => 0.5 - Math.random())
      setLastTerm([...lastTerm, listRandom[0]])
      setNewCard(listRandom[0])
    } else if (lastTerm.length === countItem) {
      setLastTerm([])
    }
  }

  useEffect(() => {
    if (listItem) {
      setNewCard(listItem[0])
    }
  }, [listItem])

  return (
    <div className='md:mt-10 md:relative z-[2] fixed top-header right-0 left-0 md:top-auto md:right-auto md:eft-auto'>
      {typeLearn
        ? newCard && (
            <ChoiceItem
              onNewCard={onNewCard}
              itemCard={newCard}
              countItem={countItem}
              typeLearn={typeLearn}
              onTypeLearn={setTypeLearn}
            />
          )
        : newCard && (
            <WriteItem
              onNewCard={onNewCard}
              itemCard={newCard}
              countItem={countItem}
              typeLearn={typeLearn}
              onTypeLearn={setTypeLearn}
            />
          )}
    </div>
  )
}
