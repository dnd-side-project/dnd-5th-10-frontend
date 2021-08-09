import { useEffect, useState } from 'react'
import tagItems from 'constants/TagItems'
import 'css/Tags.css'

const Tags = (props) => {
  const [selectedTag, setSelectedTag] = useState([])

  const selectThisTag = (e) => {
    setSelectedTag(selectedTag.concat(e.target.id))
  }
  const deselectThisTag = (e) => {
    setSelectedTag(selectedTag.filter((element) => element !== e.target.id))
  }

  useEffect(() => {
    if (props.page === 'question-register') {
      localStorage.setItem('questionRegiTag', JSON.stringify(selectedTag))
    } else if (props.page === 'question-search') {
      localStorage.setItem('questionSearchTag', JSON.stringify(selectedTag))
    }
  })

  const TagButtons = tagItems.map((tagItem) => {
    if (selectedTag.includes(tagItem.name)) {
      return (
        <button className="classification-tag-selected" key={tagItem.id} id={tagItem.name} onClick={deselectThisTag}>
          {tagItem.name}
        </button>
      )
    } else {
      return (
        <button className="classification-tag-unselected" key={tagItem.id} id={tagItem.name} onClick={selectThisTag}>
          {tagItem.name}
        </button>
      )
    }
  })

  return <div className="classification-tag-btn">{TagButtons}</div>
}

export default Tags
