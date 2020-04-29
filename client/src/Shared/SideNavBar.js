import React from 'react';
import styled from 'styled-components';
import Logo from '../svg/logo.svg'

import {
  Link
} from "react-router-dom";

class SideBarNav extends React.Component {
  render() {
    return (
      <LeftBox>
        <img src={Logo} alt='logo' height='150vh'/>
        {/*<AttributeImage>Icons made by Freepi <br>from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></AttributeImage>*/}
        <ListHeader>
          Theater Management App
        </ListHeader>
        <LinkList>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/managers">Managers</Link></li>
            <li><Link to="/theaters">Theaters</Link></li>
            <li><Link to="/screens">Screens</Link></li>
            <li><Link to="/movies">Movies</Link></li>
          </ul>
        </LinkList>
      </LeftBox>
    )
  }
}

const LeftBox = styled.div`
  display: flex;
  width: 15vw;
  align-items: center;
  flex-direction: column;
  background: #32a4a8;
  color: #fff;
  font-size: 16px;
  padding-top: 7.5vh;
`;

const AttributeImage =styled.div`
  text-align: center;
  font-size: 8px;
  color: #FFF;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ListHeader = styled.div`
  display:flex;
  padding-top: 5vh;
`;

const LinkList = styled.div`
  display:flex;
  justify-content: flex-start;
  
  ul {
    list-style-type:none;
    padding:0;
      
  };
  ul li {
    margin-bottom:15px;
  };
  ul li a {
    text-decoration:none;
    color:#FFFFFF;
    background-color:#32a4a8;
    padding: 5px 10px 5px 10px;
  };

  ul li a:hover {
    background-color:#39667d;
  };
  ul:after {
    content: "";
    clear:both;
    display:block;
  };
`;


export default SideBarNav;

