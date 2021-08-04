import { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import 'components/Tags.css'

const Tags = (props) => {
  const items = [
    {
      id: 1,
      name: '알고리즘',
    },
    {
      id: 2,
      name: '컴퓨터구조',
    },
    {
      id: 3,
      name: '데이터베이스',
    },
    {
      id: 4,
      name: '네트워크',
    },
    {
      id: 5,
      name: '운영체제',
    },
    {
      id: 6,
      name: '소프트웨어공학',
    },
    {
      id: 7,
      name: 'Java',
    },
    {
      id: 8,
      name: 'JavaScript',
    },
    {
      id: 9,
      name: 'Python',
    },
    {
      id: 10,
      name: '백엔드',
    },
    {
      id: 11,
      name: '프론트엔드',
    },
    {
      id: 12,
      name: '머신러닝',
    },
    {
      id: 13,
      name: 'iOS',
    },
    {
      id: 14,
      name: '안드로이드',
    },
  ]

  const [selectedTag, setSelectedTag] = useState([])

  const selectThisTag = (e) => {
    setSelectedTag(selectedTag.concat(Number(e.target.id)))
  }
  const deselectThisTag = (e) => {
    setSelectedTag(selectedTag.filter((element) => element !== Number(e.target.id)))
  }

  useEffect(() => {
    if (props.page == 'question-register') {
      let questionTags = ''
      selectedTag.map((item) => {
        questionTags += items[item - 1].name + ' '
      })
      localStorage.setItem('questionRegiTag', questionTags)
    }
  })

  const TagButtons = items.map((tagItem) => {
    if (selectedTag.includes(tagItem.id)) {
      return (
        <Button className="classification-tag-selected" key={tagItem.id} id={tagItem.id} onClick={deselectThisTag}>
          {tagItem.name}
        </Button>
      )
    } else {
      return (
        <Button className="classification-tag-unselected" key={tagItem.id} id={tagItem.id} onClick={selectThisTag}>
          {tagItem.name}
        </Button>
      )
    }
  })

  return (
    <div className="classification-tag-btn">
      {TagButtons} {console.log(selectedTag)}
    </div>
  )
}

export default Tags