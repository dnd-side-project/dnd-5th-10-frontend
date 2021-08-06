import SetQuizOptions from 'components/SetQuizOptions'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const QuizPage = () => {
  return <SetQuizOptions />
}
export default QuizPage
