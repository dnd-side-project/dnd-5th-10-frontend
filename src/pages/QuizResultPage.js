import QuizResult from 'components/QuizResult'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const QuizResultPage = () => {
  return <QuizResult />
}
export default QuizResultPage
