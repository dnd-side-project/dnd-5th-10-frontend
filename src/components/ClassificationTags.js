import 'css/ClassificationTags.css'
import Tags from 'components/Tags'

const ClassificationTags = () => {
  return (
    <div className="classification-tag">
      <div className="classification-title-submit">
        <h1>Tag</h1>
        <button>완료</button>
      </div>
      <Tags />
    </div>
  )
}

export default ClassificationTags
