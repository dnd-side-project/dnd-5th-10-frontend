import MainCarousel from '../components/MainCarousel'
import Navigation from '../components/Navigation'
import ClassificationTags from '../components/ClassificationTags'
import { JWT_TOKEN } from '../constants/Oauth'
import axios from 'axios'

// header 설정
axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

function Main() {
  return (
    <div className="Main">
      <Navigation />
      <MainCarousel />
      <ClassificationTags />
    </div>
  )
}

export default Main
