/*
* Theaters-Managers page that pulls the associated data list from the database and renders it to the user
* Allowing them to interact with the data
* */


import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SideBarNav from "../../Shared/SideNavBar";
import { Button } from '@material-ui/core';


class TMs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      managers: []
    };
  }
  //handles basic sumbit
  handleSubmit(event){
    event.preventDefault();
    const newManager = new FormData(event.target);
  }

  //handles default change of any field
  handleChange = (field, event) => {
    this.setState({
      [field]: event.target.value
    })
  }

  //Once the data has been saved locally and we are not loading the manager theaters can be mapped into a table
  renderTMs () {
    if(!this.state.isLoading){
      return this.state.data.map((tms, i) => {
        const { theater_name, first_name, last_name } = tms
        if(first_name === null){
          return (
            <tr key={i}>
              <td><Button variant="contained" color="default" size="small" >
                Select
              </Button></td>
              <td>{theater_name}</td>
              <td>NULL</td>
              <td>
                <Button variant="contained" color="secondary" size="small" >Delete</Button>
              </td>
            </tr>
          )
        }
        return (
          <tr key={i}>
            <td><Button variant="contained" color="default" size="small" >
              Select
            </Button></td>
            <td>{theater_name}</td>
            <td>{first_name} {last_name}</td>
            <td>
              <Button variant="contained" color="secondary" size="small" >Delete</Button>
            </td>
          </tr>
        )
      })
    }
  }

  //Calls the backend to get and save all the data so the front end can render it
  getAndSaveData(){
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';
    this.setState( async () => {
      try {
        const res = await axios.get(`${url}/tms`);
        if (res.status === 200) {
          let newData = res.data;
          this.setState({
            isLoading: false,
            data: newData
          })
        }
      } catch (e) {
        console.log(e);
      }
    })
  }

  //React component that loads once it mounts
  componentDidMount() {
    this.getAndSaveData();
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
              <div>Theaters-Managers</div>
            </RCBHeader>
            <div>Select which manager is assigned to which theater</div><br></br>
            <RCBContent>
              <TheaterTable>
                <table>
                  <thead>
                  <tr>
                    <th>Select Theater</th>
                    <th>Theater Name</th>
                    <th>Manager Namn</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.renderTMs()}
                  </tbody>
                </table>
                <AddItemForm onSubmit={this.handleSubmitAdd}>
                  <FormHeading>Select Theater And Click To Add Manager...</FormHeading>
                  <Button variant="contained" color="primary" size="small" type="submit">
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

const AddItemForm = styled.form`
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


export default TMs;