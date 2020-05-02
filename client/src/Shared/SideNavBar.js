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
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/theaters">Theaters</Link></li>
            <li><Link to="/managers">Managers</Link></li>
            <li><Link to="/screens">Screens</Link></li>
            <li><Link to="/showings">Showings</Link></li>
            <li><Link to="/movies">Movies</Link></li>
          </ul>
        </LinkList>
      </LeftBox>
    )
  }
}

const LeftBox = styled.div`
  display: flex;
  width: 17vw;
  align-items: center;
  flex-direction: column;
  background: #a2e8eb;
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  padding: 7.5vh 15px 0 15px;
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
    color:#000000;
    background-color:#a2e8eb;
    padding: 5px 10px 5px 10px;
  };

  ul li a:hover {
    background-color:#6ab4d9;
  };
  ul:after {
    content: "";
    clear:both;
    display:block;
  };
`;


export default SideBarNav;

