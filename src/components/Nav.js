import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  padding: 10px;
  background-color: #333;
  color: red;

  h1 {
    font-size: 1rem;
  }
`;

const Nav = props => <NavBar>{props.children}</NavBar>;

export default Nav;
