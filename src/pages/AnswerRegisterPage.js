import AnswerRegister from 'components/AnswerRegister'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'

axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_TOKEN}`

const AnswerRegisterPage = () => {
  return (
    <>
      <div className="body">
        <AnswerRegister />
      </div>
    </>
  )
}
export default AnswerRegisterPage
