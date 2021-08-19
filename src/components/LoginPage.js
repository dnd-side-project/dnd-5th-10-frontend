import LoginModal from 'components/LoginModal'
import { useState } from 'react'

const LoginPage = () => {
  const [modalOpen, setModalOpen] = useState(true)

  const closeModal = () => {
    setModalOpen(false)
  }
  return <LoginModal open={modalOpen} close={closeModal} />
}
export default LoginPage
