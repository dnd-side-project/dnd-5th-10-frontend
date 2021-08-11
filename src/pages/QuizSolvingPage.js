import QuizSolving from 'components/QuizSolving'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const QuizSolvingPage = () => {
  return <QuizSolving />
}
export default QuizSolvingPage
