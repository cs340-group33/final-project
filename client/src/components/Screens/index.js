/*
* Screens page that pulls the associated data list from the database and renders it to the user
* Allowing them to interact with the data
* */


import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";
import axios from 'axios';
import { Button } from '@material-ui/core';


class Screens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null
    };
  }

  //Handles submit
  handleSubmit(event){
    event.preventDefault();
    const newScreen = new FormData(event.target);
  }

  //Calls the backend to get and save all the data so the front end can render it
  getAndSaveData(){
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';
    this.setState( async () => {
      try {
        const res = await axios.get(`${url}/screens`);
        if (res.status === 200) {
          let newData = res.data;
          this.setState({
            isLoading: false,
            data: newData
          })
          console.log(newData);

        }
      } catch (e) {
        console.log(e);
      }
    })
  }

  //Once the components mount the data is fetched
  componentDidMount() {
    this.getAndSaveData();
  }

  //Once the data has been saved locally and we are not loading the screens can be mapped into a table
  renderScreens(){
    if(!this.state.isLoading){
      return this.state.data.map((data) => {
        const { theater_name, screen_id, seats} = data
        return (
          <tr key={screen_id}>
            <td>{theater_name}</td>
            <td>{screen_id}</td>
            <td>{seats}</td>
            <td>
              <Button variant="contained" color="default" size="small">
                Select Screen
              </Button>
            </td>
            <td>
              <Button variant="contained" color="secondary" size="small">
                Delete
              </Button>
            </td>
          </tr>
        )
      })
    }
  }

  //This renders the entire page, items in {} are conditionally rendered depending on their state
  render() {
    return (
      <PageContainer>
        <SideBarNav>
        </SideBarNav>
        <RightBox>
          <RightContentBox>
            <RCBHeader>
              <div>Manage Screens</div>
            </RCBHeader>
            <RCBContent>
              <TheaterTable>
                <table>
                  <thead>
                  <tr>
                    <th>Theater Name</th>
                    <th>Screen Number</th>
                    <th>Seats</th>
                    <th>Select Showings</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.renderScreens()}
                  </tbody>
                </table>
              </TheaterTable>
              <AddItemForm onSubmit={this.handleSubmit}>
                <FormHeading>Add A New Screen...</FormHeading>
                <FWrapper>
                  <FHeading htmlFor="showingTime">Number of Seats:</FHeading>
                  <FInput id="showingTime" name="showingTime" type="text" />
                </FWrapper>
                <Button variant="contained" color="primary" size="small">
                  Add Screen To Selected Theater
                </Button>
              </AddItemForm>
            </RCBContent>
          </RightContentBox>
        </RightBox>
      </PageContainer>
    )
  }
}

//Styled Component Elements are defined below

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



export default Screens;