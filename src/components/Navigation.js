import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Dropdown,
  Button,
} from 'reactstrap'
import './Navigation.css'

const Navigation = (props) => {
  const [firstDropdownOpen, setFirstDropdownOpen] = useState(false)
  const [secondDropdownOpen, setSecondDropdownOpen] = useState(false)
  const firstToggle = () => {
    setFirstDropdownOpen(!firstDropdownOpen)
  }
  const secondToggle = () => {
    setSecondDropdownOpen(!secondDropdownOpen)
  }
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
        <Nav navbar className="right-tab">
          <NavItem>
            <NavLink href="/">Sign in</NavLink>
          </NavItem>
          <NavItem className="sign-up">
            <Button outline color="light" size="sm">
              Sign Up
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation
