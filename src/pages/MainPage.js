import MainCarousel from 'components/MainCarousel'
import ClassificationTags from 'components/ClassificationTags'
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div className="Main">
      <MainCarousel />
      <ClassificationTags />
      <Link to="/QuestionRegister">zz</Link>
    </div>
  )
}

export default MainPage
