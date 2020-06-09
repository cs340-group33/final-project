/*
* Managers page that pulls the associated data list from the database and renders it to the user
* Allowing them to interact with the data
* */

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SideBarNav from "../../Shared/SideNavBar";
import { Button } from '@material-ui/core';


class Managers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      isLoading: true,
      data: []
    };
  }
  handleSubmit(event){
    event.preventDefault();
    const newManager = new FormData(event.target);
  }

  //Allows fields to be changed
  handleChange = (field, event) => {
    this.setState({
      [field]: event.target.value
    })
  }

  //Allows the addition of one element by taking in the components and passing them to the
  //backend API
  handleSubmitAdd = async (event) =>{
    event.preventDefault();

    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';
    console.log("duplicate");
    const config = {
      'Content-Type': 'application/json',
    };
    const payload = {
      'first_name': this.state.first_name,
      'last_name': this.state.last_name
    };
    this.setState(async () => {
      try {
        const res = await axios.post(`${url}/managers`, payload, config);
        if (res.status === 200) {
        }
      } catch (e) {
        console.log(e);
      }
    });
    //New data is collected and displayed
    this.getAndSaveData();
    this.renderManagers();

    //Clears form data
    this.setState(
      {first_name: '',
        last_name: ''});
  }

  //similar to add, this takes the manager_ID information and passes it to the backend API
  //After this the new list is then rendered
  handleDelete = (manager_ID) => async () =>{
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';

    this.setState( async ()=> {
      try {
        const res = await axios.delete(`${url}/managers/${manager_ID}`);
        if (res.status === 200) {
        }
      } catch (e) {
        console.log(e);
      }
    });
    this.getAndSaveData();
    this.renderManagers();
  }

  //Renders the selected managers as long as the table is not loading
  //loading means it is still talking to the backend
  renderManagers () {
    if(!this.state.isLoading){
      return this.state.data.map((managers) => {
        const { manager_id, first_name, last_name } = managers
        return (
          <tr key={manager_id}>
            <td>{manager_id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>
              <Button variant="contained" color="secondary" size="small" onClick={this.handleDelete(manager_id)}>Delete</Button>
            </td>
          </tr>
        )
      })
    }
  }

  //Collects all of the data by  making a call to the backend and storing this locally so that it can be displayed
  getAndSaveData(){
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';
    this.setState( async () => {
      try {
        const res = await axios.get(`${url}/managers`);
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
              <div>Managers</div>
            </RCBHeader>
            <RCBContent>
              <TheaterTable>
                <table>
                  <thead>
                    <tr>
                      <th>Manager ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.renderManagers()}
                  </tbody>
                </table>
                <AddItemForm onSubmit={this.handleSubmitAdd}>
                  <FormHeading>Add New Manager...</FormHeading>
                  <FWrapper>
                    <FHeading htmlFor="first_name">First Name:</FHeading>
                    <FInput required name="first_name" type="text" value = {this.state.first_name} onChange={(event) => this.handleChange("first_name", event)}/>
                  </FWrapper>
                  <FWrapper>
                    <FHeading htmlFor="last_name">Last Name:</FHeading>
                    <FInput required name="last_name" type="text" value = {this.state.last_name} onChange={(event) => this.handleChange("last_name", event)}/>
                  </FWrapper>
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


export default Managers;