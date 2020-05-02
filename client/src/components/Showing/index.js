import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";
import { Button, ButtonGroup } from '@material-ui/core';


class Showing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit(event){
    event.preventDefault();
    const newScreen = new FormData(event.target);
  }

  handleChange(event){
    event.preventDefault();
    this.setState({age: event.target.value});
  }

  render() {
    return (
      <PageContainer>
        <SideBarNav>
        </SideBarNav>
        <RightBox>
          <RightContentBox>
            <RCBHeader>
              <div>Manage Showings</div>
            </RCBHeader>
            <RCBContent>
              <TheaterTable>
                <table>
                  <thead>
                  <tr>
                    <th>Theater Name</th>
                    <th>Screen Number</th>
                    <th>Showing Time</th>
                    <th>Movie Showing</th>
                    <th>Edit/Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Test Data</td>
                      <td>Test Data</td>
                      <td>Test Data</td>
                      <td>Test Data</td>
                      <td>
                        <ButtonGroup color="primary" aria-label="small outlined primary button group">
                          <Button>Select Movie</Button>
                          <Button>Edit</Button>
                          <Button>Delete</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TheaterTable>
              <AddItemForm onSubmit={this.handleSubmit}>
                <FormHeading>Add A New Showing...</FormHeading>
                <FWrapper>
                  <FHeading htmlFor="showingTime">Showing Time:</FHeading>
                  <FInput id="showingTime" name="showingTime" type="text" />
                </FWrapper>
                <Button variant="contained" color="primary" size="small">
                  Add Showing To Selected Screen
                </Button>
              </AddItemForm>
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

const TheaterTable = styled.div`
   table {
    border-collapse: collapse;
  }

  table, th, td {
   border: 1px solid black;
   padding: 5px;
  }
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

const AddItemForm = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  padding: 5px 5px 5px 5px;
`;

const FormHeading = styled.div`
  display: flex;
  padding-bottom: 5px;
  padding-top: 5px;
`;

const FWrapper = styled.div`
  display: inline-block;
  margin-bottom: 16px;
`;

const FHeading = styled.div`
  color: #212b31;
  margin-bottom: 5px;
`;

const FInput = styled.input`
  box-sizing: border-box;
  border-radius: 3px;  
  font-size: 14px;
  width: 10vw;
  padding-left: 8px;
`;



export default Showing;