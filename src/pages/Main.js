import MainCarousel from '../components/MainCarousel'
import Navigation from '../components/Navigation'
import ClassificationTags from '../components/ClassificationTags'

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
