import React, { useEffect, useState } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Dropdown,
  Button,
} from 'reactstrap'
import 'components/Navigation.css'
import LoginModal from 'components/LoginModal'
import axios from 'axios'
import { JWT_TOKEN } from 'constants/Oauth'
import { removeCookie } from 'components/Cookies'
import { Route } from 'react-router-dom'

const Navigation = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [firstDropdownOpen, setFirstDropdownOpen] = useState(false)
  const [secondDropdownOpen, setSecondDropdownOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [userProfile, setUserProfile] = useState(null)

  const firstToggle = () => {
    setFirstDropdownOpen(!firstDropdownOpen)
  }
  const secondToggle = () => {
    setSecondDropdownOpen(!secondDropdownOpen)
  }

  const profileToggle = () => {
    setProfileDropdownOpen(!profileDropdownOpen)
  }

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    if (JWT_TOKEN) {
      axios
        .get(`/api/v1/user/profile/`)
        .then((res) => {
          console.log(res.data)
          setUserProfile(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [JWT_TOKEN])

  return (
    <div id="Navigation">
      <Navbar expand={true}>
        <NavbarText>
          <img id="logo" src="https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg"></img>
        </NavbarText>
        <Nav navbar className="left-tab">
          <NavItem>
            <Dropdown isOpen={firstDropdownOpen} toggle={firstToggle}>
              <DropdownToggle nav caret>
                new1
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>1-1</DropdownItem>
                <DropdownItem>1-2</DropdownItem>
                <DropdownItem>1-3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
          <NavItem>
            <NavLink href="/">new2</NavLink>
          </NavItem>
          <NavItem>
            <Dropdown isOpen={secondDropdownOpen} toggle={secondToggle}>
              <DropdownToggle nav caret>
                new3
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>3-1</DropdownItem>
                <DropdownItem>3-2</DropdownItem>
                <DropdownItem>3-3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
          <NavItem>
            <NavLink href="/">new4</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">new5</NavLink>
          </NavItem>
        </Nav>
        {/* jwt_token이 존재하면 login 처리 */}
        {JWT_TOKEN ? (
          <Route exact path="/login">
            <Nav navbar className="profile-tab">
              <Dropdown isOpen={profileDropdownOpen} toggle={profileToggle}>
                <DropdownToggle nav caret>
                  {console.log(userProfile?.username)}
                  {userProfile?.username}님 &nbsp;
                  {console.log(JWT_TOKEN)}
                  <img
                    id="profile-img"
                    src="https://mblogthumb-phinf.pstatic.net/MjAxODA0MTBfODYg/MDAxNTIzMjk5NjMyNzcw.CqPIwxjy-Og7GnIho2vbO9CKvDcbE87kq6795zqgXDQg.XSGZAMbi04FtIotEg2gAAPMykMu7C-RsiMI3gr1pGc8g.PNG.dlqlwm14/%EC%82%AC5.png?type=w800"
                  />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>profile-1</DropdownItem>
                  <DropdownItem>profile-2</DropdownItem>
                  <DropdownItem>profile-3</DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      removeCookie('Authorization', { path: '/' })
                    }}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Route>
        ) : (
          <Route exact path="/">
            <Nav navbar className="right-tab">
              <NavItem>
                <Button className="sign-in" onClick={openModal}>
                  Sign in
                </Button>
                <LoginModal open={modalOpen} close={closeModal} header="Login to ITerview"></LoginModal>
              </NavItem>
              {/* <NavItem className="sign-up">
              <Button outline color="light" size="sm">
                Sign Up
              </Button>
            </NavItem> */}
            </Nav>
          </Route>
        )}
      </Navbar>
    </div>
  )
}

export default Navigation
