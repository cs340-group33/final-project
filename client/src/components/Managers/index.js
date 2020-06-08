import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";
import { Button } from '@material-ui/core';


class Managers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleSubmit(event){
    event.preventDefault();
    const newManager = new FormData(event.target);
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
              <div>Managers</div>
            </RCBHeader>
            <RCBContent>
              <TheaterTable>
                <table>
                  <thead>
                    <tr>
                      <th>Manager Name</th>
                      <th>Theaters Managing</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Test Data</td>
                    <td>Test Data</td>
                    <td>
                      <Button variant="contained" color="secondary" size="small">
                        Delete
                      </Button>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <AddItemForm onSubmit={this.handleSubmit}>
                  <FormHeading>Add New Manager...</FormHeading>
                  <FWrapper>
                    <FHeading htmlFor="first_name">First Name:</FHeading>
                    <FInput id="first_name" name="first_name" type="text" />
                  </FWrapper>
                  <FWrapper>
                    <FHeading htmlFor="last_name">Last Name:</FHeading>
                    <FInput id="last_name" name="last_name" type="num" />
                  </FWrapper>
                  <Button variant="contained" color="primary" size="small">
                    Add Manager
                  </Button>
                </AddItemForm>
              </TheaterTable>
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
  display: flex;
  flex-direction: column;
  font-size: 36px;
  font-weight: 400;
  color: #2C3A41;
  margin-bottom: 32px;
`;

const RCBContent = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 24px;
  padding-bottom: 5px;
  padding-top: 15px;
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


export default Managers;