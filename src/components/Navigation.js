import React, {useEffect, useState} from 'react'
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarText,
  NavItem,
} from 'reactstrap'
import 'css/Navigation.css'
import LoginModal from 'components/LoginModal'
import axios from 'axios'
import {JWT_TOKEN} from 'constants/Oauth'
import {removeCookie} from 'components/Cookies'
import {Link, useHistory, withRouter} from 'react-router-dom'

const Navigation = (props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [userProfile, setUserProfile] = useState(null)
  const [dropdownOpen, setOpen] = useState(false)
  const history = useHistory()
  const toggle = () => setOpen(!dropdownOpen)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    var param = new URLSearchParams(location.search).get('error');
    if (param === 'login') {
      alert('로그인 에러가 발생했습니다. 다른 소셜계정으로 로그인 해주세요.')
      return
    }
    if (JWT_TOKEN) {
      axios
        .get(`/api/v1/user/profile/`)
        .then((res) => {
          console.log(res.data)
          setUserProfile(res.data)
          localStorage.setItem('userName', res.data.username)
          localStorage.setItem('userEmail', res.data.email)
        })
        .catch((err) => {
          console.log(err)
          if (err.response.status === 401) {
            window.alert('로그인 에러입니다.')
          }
          setUserProfile(null)
          removeCookie('Authorization', { path: '/' })
          localStorage.removeItem('userName')
          localStorage.removeItem('userEmail')
          localStorage.removeItem('questionRegiTag')
        })
    }

  }, [])

  return (
    <div id="Navigation">
      <Navbar expand={true}>
        <NavbarText>
          <Link to="/">
            <img alt="iterview-logo" id="logo" src="/img/LOGO1.png"></img>
          </Link>
        </NavbarText>
        <Nav navbar className="left-tab">
          <Link to="/">
            <button className="nav-btn">
              <img className="nav-icon" src="/img/nav_icon1.png" alt="nav_icon" />
              <span>Home</span>
            </button>
          </Link>
          <Link to="/MyPage/MyRegisterQuestion">
            <button className="nav-btn">
              <img className="nav-icon" src="/img/nav_icon2.png" alt="nav_icon" />
              <span>마이페이지</span>
            </button>
          </Link>
          <Link to="/QuestionSearch">
            <button className="nav-btn">
              <img className="nav-icon" src="/img/nav_icon3.png" alt="nav_icon" />
              <span>문제검색</span>
            </button>
          </Link>
          <Link to="/QuestionRegister">
            <button className="nav-btn">
              <img className="nav-icon" src="/img/nav_icon4.png" alt="nav_icon" />
              <span>문제등록</span>
            </button>
          </Link>
          <Link to="/SetQuizOptions">
            <button className="nav-btn">
              <img className="nav-icon" src="/img/nav_icon5.png" alt="nav_icon" />
              <span>퀴즈</span>
            </button>
          </Link>
        </Nav>
        {/* jwt_token이 존재하면 login 처리 */}
        {userProfile ? (
          <ButtonDropdown className="dropdown-btn-par" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="dropdown-btn" caret>
              {userProfile?.username}님
              <img src="/img/nav_icon6.png" alt="nav_icon" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu">
              <DropdownItem
                onClick={() => {
                  history.push('/MyPage/MyRegisterQuestion')
                }}>
                내가 등록한 문제
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  history.push('/MyPage/MyRegisterAnswer')
                }}>
                내가 등록한 답변
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  history.push('/MyPage/MyLikeAnswer')
                }}>
                좋아요한 답변
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  history.push('/MyPage/MyBookmarkQuestion')
                }}>
                북마크한 문제
              </DropdownItem>
              <DropdownItem divider />
              <a
                className="logout-btn"
                href="/"
                onClick={() => {
                  removeCookie('Authorization', { path: '/' })
                  localStorage.removeItem('userName')
                  localStorage.removeItem('userEmail')
                  localStorage.removeItem('questionRegiTag')
                }}>
                로그아웃
              </a>
            </DropdownMenu>
          </ButtonDropdown>
        ) : (
          <Nav navbar className="right-tab">
            <NavItem>
              <Button className="sign-in" onClick={openModal}>
                LOGIN
                <img src="/img/nav_icon6.png" alt="nav_icon" />
              </Button>
              <LoginModal open={modalOpen} close={closeModal}></LoginModal>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  )
}

export default withRouter(Navigation)
