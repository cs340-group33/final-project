
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

//Splash page that providse a little information about the project
class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SplashContainer>
        <SplashPageText>
          <div>Welcome to the CS340_401 Group 33
            <br/>Theater Management App</div>
          <Link to='/dashboard'>Click Here To Continue</Link>
        </SplashPageText>
      </SplashContainer>
    )
  }
}

//Styled Component Elements are defined below

const SplashContainer = styled.div`
  display:flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#6ab4d9;
`;

const SplashPageText = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  padding: 25px 25px 25px 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#FFF;
  text-align:center;
  font-size: 24px;
  font-weight: 700;
  a {
    text-decoration: none;
    }
  
`;

export default SplashPage;