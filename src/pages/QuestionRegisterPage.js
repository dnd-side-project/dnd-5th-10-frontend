import QuestionRegister from 'components/QuestionRegister'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const QuestionRegisterPage = () => {
  return <QuestionRegister />
}
export default QuestionRegisterPage
