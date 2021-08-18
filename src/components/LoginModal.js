import React from 'react'
import 'css/LoginModal.css'
import { GOOGLE_AUTH_URL, GITHUB_AUTH_URL } from 'constants/Oauth.js'

const googleLogo = '/img/google-logo.png'
const githubLogo = '/img/github-logo.png'

function LoginModal(props) {
  const { open, close, header } = props

  return (
    // 모달이 열릴때 openModal 클래스가 생성
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            <img src="/img/LOGO2.png" alt="" />
            <h1>통합 회원가입 및 로그인</h1>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <a href={GOOGLE_AUTH_URL}>
              <button className="google-btn">
                <img id="google-logo" src={googleLogo} alt="googleLogo" />
                Google으로 계속하기
              </button>{' '}
            </a>
            <br />
            <a href={GITHUB_AUTH_URL}>
              <button className="github-btn">
                <img id="github-logo" src={githubLogo} alt="githubLogo" />
                Github으로 계속하기
              </button>
            </a>
          </main>
        </section>
      ) : null}
    </div>
  )
}

export default LoginModal
