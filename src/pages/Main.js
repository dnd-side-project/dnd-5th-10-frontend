import MainCarousel from '../components/MainCarousel'
import Navigation from '../components/Navigation'
import ClassificationTags from '../components/ClassificationTags'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function Main() {
  return (
    <div className="Main">
      <MainCarousel />
      <ClassificationTags />
      <Link to="/QuestionRegister">zz</Link>
    </div>
  )
}

export default Main
