import SetQuizOptions from 'components/SetQuizOptions'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const SetQuizOptionsPage = () => {
  return (
    <>
      <Navigation />
      <SetQuizOptions />
      <Footer />
    </>
  )
}
export default SetQuizOptionsPage
