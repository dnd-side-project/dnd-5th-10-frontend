import AnswerRegister from 'components/AnswerRegister'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const AnswerRegisterPage = () => {
  const questionRegisterImg = '/img/questionRegister.jpg'
  return (
    <>
      <div className="body">
        <AnswerRegister />
      </div>
    </>
  )
}
export default AnswerRegisterPage
