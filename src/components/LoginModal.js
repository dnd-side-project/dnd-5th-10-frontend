import React from 'react'
import './LoginModal.css'
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '../constants/Oauth.js'

const googleLogo = '/img/google-logo.png'
const facebookLogo = '/img/fb-logo.png'
const githubLogo = '/img/github-logo.png'

function LoginModal(props) {
  const { open, close, header } = props

  return (
    // 모달이 열릴때 openModal 클래스가 생성
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <a href={GOOGLE_AUTH_URL}>
              <button>
                <img id="googleLogo" src={googleLogo} alt="googleLogo" />
                Login with Google
              </button>{' '}
            </a>
            <br />
            <a href={FACEBOOK_AUTH_URL}>
              <button>
                <img src={facebookLogo} alt="fbLogo" />
                Login with Facebook
              </button>{' '}
            </a>
            <br />
            <a href={GITHUB_AUTH_URL}>
              <button>
                <img src={githubLogo} alt="githubLogo" />
                Login with Github
              </button>
            </a>
          </main>
        </section>
      ) : null}
    </div>
  )
}

export default LoginModal
