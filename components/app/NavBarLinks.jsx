import React from "react"

import Link from './Link';
import styled from 'styled-components'

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 8px;
  margin-top:0;
  transition: all 200ms ease-in;
  position: relative;
  font-family: SF Pro Text;
  font-size: 24px;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 8px;
    font-size: 1.5rem;
    z-index: 6;
    padding-left: 1.5rem;
  }
`

const NavBarLinks = () => {
  return (
      <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/categories">Categories</NavItem>
      <NavItem to="/tags">Tags</NavItem>
      <NavItem to="/all">List all</NavItem>
      <NavItem to="/about">About</NavItem>
      </>
  )
}

export default NavBarLinks