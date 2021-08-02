import React, { useState } from 'react'
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
import { getCookie } from 'components/Cookies'

const Navigation = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [firstDropdownOpen, setFirstDropdownOpen] = useState(false)
  const [secondDropdownOpen, setSecondDropdownOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)

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

  const logIn = getCookie('Authorization')

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
        {logIn ? (
          <Nav navbar className="profile-tab">
            {console.log(logIn)}
            <Dropdown isOpen={profileDropdownOpen} toggle={profileToggle}>
              <DropdownToggle nav caret>
                <img
                  id="profile-img"
                  src="https://mblogthumb-phinf.pstatic.net/MjAxODA0MTBfODYg/MDAxNTIzMjk5NjMyNzcw.CqPIwxjy-Og7GnIho2vbO9CKvDcbE87kq6795zqgXDQg.XSGZAMbi04FtIotEg2gAAPMykMu7C-RsiMI3gr1pGc8g.PNG.dlqlwm14/%EC%82%AC5.png?type=w800"
                />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>profile-1</DropdownItem>
                <DropdownItem>profile-2</DropdownItem>
                <DropdownItem>profile-3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        ) : (
          <Nav navbar className="right-tab">
            <NavItem>
              <Button className="sign-in" onClick={openModal}>
                Sign in
              </Button>
              <LoginModal open={modalOpen} close={closeModal} header="Login to ITerview"></LoginModal>
            </NavItem>
            {console.log(logIn)}
            {/* <NavItem className="sign-up">
              <Button outline color="light" size="sm">
                Sign Up
              </Button>
            </NavItem> */}
          </Nav>
        )}
      </Navbar>
    </div>
  )
}

export default Navigation
