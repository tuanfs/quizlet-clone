module.exports = function randomChoiceItem(listCourse) {
  return listCourse.map((item, indexParent) => {
    const choiceItem1 = {
      term: item.term,
      defination: item.defination
    }
    const choiceItem2 = []

    const listNew = listCourse.filter((item, index) => {
      return index !== indexParent
    })
    listNew.sort(function (a, b) {
      return 0.5 - Math.random()
    })
    listNew.forEach((item, index) => {
      if (choiceItem2.length < 3) {
        choiceItem2.push({term: item.term, defination: item.defination})
      }
    })

    item.choiceItem = [choiceItem1, ...choiceItem2]

    return item
  })
}
