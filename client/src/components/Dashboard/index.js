import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <PageContainer>
        <SideBarNav>
        </SideBarNav>
        <RightBox>
          <RightContentBox>
            <RCBHeader>
              <div>Welcome To The Theater Management App</div>
            </RCBHeader>
            <RCBContent>
              <div>This site meets all grading criterion for the CS340 Final Project requirements: </div>
              <ul>
                <li>Theaters and Managers are M:M relationship</li>
                <li>DELETE-ing a Theater or Manager removes associated data in the M:M Theaters:Managers  relationship table</li>
                <li>Managers can not be associated with any theater (i.e. they are NULL-ible)</li>
                <li>There are INSERT options for every table, including the relationship table of the M:M Theaters:Managers</li>
                <li>DELETE and UPDATE are available for most of the tables</li>
                <li>There is a search/filter list on the Movies table, this can be visited in the movies tab</li>
                <li>Each table has a minimum of one SELECT query, this is used to display all basic information about each table</li>
              </ul>
              <div>Please make a selection on the left...</div>
            </RCBContent>
          </RightContentBox>
        </RightBox>
      </PageContainer>
    )
  }
}

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: space-between;
  align-items: stretch;

`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85vw;
  height: 100vh;
  background-color:#ebf1f5;
`;

const RightContentBox = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #FFFFFF;
  padding: 20px 20px 20px 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const RCBHeader = styled.div`
  font-size: 36px;
  font-weight: 400;
  color: #2C3A41;
  margin-bottom: 32px;
`;

const RCBContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #2C3A41;
  margin-bottom: 32px;
`;

export default Dashboard;