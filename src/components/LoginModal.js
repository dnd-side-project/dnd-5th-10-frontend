import React from 'react'
import 'components/LoginModal.css'

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
            <button>
              <img id="googleLogo" src={googleLogo} alt="googleLogo" />
              Login with Google
            </button>{' '}
            <br />
            <button>
              <img src={facebookLogo} alt="fbLogo" />
              Login with Facebook
            </button>{' '}
            <br />
            <button>
              <img src={githubLogo} alt="githubLogo" />
              Login with Github
            </button>
          </main>
        </section>
      ) : null}
    </div>
  )
}

export default LoginModal
