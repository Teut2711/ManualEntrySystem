import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import LogoImg from "../static/niroggyan-logo-wide.png";
import { Input } from 'semantic-ui-react'


const Logo = styled.div``;


const NavBar = styled.nav`
  grid-column: 1/6;
  border-radius: 2%;
  display: flex;
  justify-content: space-between;
  margin-right: 10%;
`;



export const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #146342;
  font-weight: bold;
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap");
  label {
    margin-right: 10px;
    font-size: large;
    font-family: "Inconsolata", sans-serif;
  }
  input {
    border-radius: 20px;
    height: 25px;
    width: 400px;
  }
`;

export default (function() {
  return (<NavBar>
    <Logo>
      <img src={LogoImg} alt="Logo" width={200} />
    </Logo>
    <Input focus placeholder='Search...' />
  </NavBar>)

});