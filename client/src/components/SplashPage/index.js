import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SplashContainer>
        <div>TEST FOR UPDATE</div>
          <div>Welcome to the CS340_401 Group 33
            <br/>Theater Management App</div>
          <Link to='/dashboard'>Click Here To Continue</Link>
      </SplashContainer>
    )
  }
}

const SplashContainer = styled.div`
  display:flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #3ASDF5;
  background-color:#32a4a8;
  text-align:center;
  font-size: 24px;
  font-weight: 700;
  a {
    text-decoration: none;
    }
  
`;

export default SplashPage;