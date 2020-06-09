/*
* Theaters page that pulls the associated data list from the database and renders it to the user
* Allowing them to interact with the data
* */


import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";
import axios from 'axios';
import { Button } from '@material-ui/core';

//Basic class definition
class Theaters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isError: false,
      newName: '',
      newStreet: '',
      newCity: '',
      newZip: '',
      data: []
    };
  }

  /*This function handles the call to the backend API to make ad a theater*/
  handleSubmitAdd = async (event) =>{
    event.preventDefault();

    //Direct the URL depending if it is on Heroku or local
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';

      this.setState({isError: false});
      const config = {
        'Content-Type': 'application/json',
      };
      const payload = {
        'theater_name': this.state.newName,
        'street': this.state.newStreet,
        'city': this.state.newCity,
        'zip': this.state.newZip
      };
      this.setState(async () => {
        try {
          const res = await axios.post(`${url}/theaters`, payload, config);
          if (res.status === 200) {
          }
        } catch (e) {
          console.log(e);
        }
      });
      //After the data has been added to the backend we re-get the data and re-render the display table
      this.getAndSaveData();
      this.renderTheaters();

      //This clears our forms as they are not reset automatically
    this.setState(
      {newName: '',
      newStreet: '',
      newCity: '',
      newZip: '',});
  }

  //This handles our props state change
  handleChange = (field, event) => {
    this.setState({
      [field]: event.target.value
    })
  }
  //This is a special props state change for the zip to only let it be numbers
  handleChangeZip(event){
    const newZip = (event.target.validity.valid) ? event.target.value : this.state.newZip;

    this.setState({ newZip });
  }

  //Calls the backend to get and save all the data so the front end can render it
  getAndSaveData(){
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';
    this.setState( async () => {
      try {
        const res = await axios.get(`${url}/theaters`);
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

  //handles the delete button by taking the theater ID of the selected button and passing it to the backend API to delete that selected item
  handleDelete = (theater_id) => async () =>{
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';

    this.setState( async ()=> {
      try {
        const res = await axios.delete(`${url}/theaters/${theater_id}`);
        if (res.status === 200) {
        }
      } catch (e) {
        console.log(e);
      }
    });
    this.getAndSaveData();
    this.renderTheaters();
  }

  handleSelect = (theater_id) => async () =>{
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';

  }

  //Once the data has been saved locally and we are not loading the theaters can be mapped into a table
  renderTheaters () {
    if(!this.state.isLoading){
      return this.state.data.map((theaters) => {
        const { theater_id, theater_name, street, city, zip } = theaters
        return (
          <tr key={theater_id}>
            <td>{theater_name}</td>
            <td>{street}</td>
            <td>{city}</td>
            <td>{zip}</td>
            <td>
              <Button variant="contained" color="default" size="small" onClick={this.handleSelect(theater_id)}>
                Select
              </Button>
            </td>
            <td><Button variant="contained" color="secondary" size="small" onClick={this.handleDelete(theater_id)}>
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
              <div>Manage Theaters</div>
            </RCBHeader>
            <RCBContent>
              <TableInfo>
                Selecting a theater in this table will allow you to pick from the available managers to be associated with it...
              </TableInfo>
              <TheaterTable>
                <table>
                  <thead>
                  <tr>
                    <th>Theater Name</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>ZIP</th>
                    <th>Select</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.renderTheaters()}
                  </tbody>
                </table>
              </TheaterTable>
              <div>Non-Unique Names Will Not Be Added...</div>
              <AddItemForm onSubmit={this.handleSubmitAdd}>
                  <FormHeading>Add New Theater...</FormHeading>
                  <FWrapper>
                  <FHeading>Name:</FHeading>
                  <FInput required name="name" type="text" value = {this.state.newName} onChange={(event) => this.handleChange("newName", event)} />
                  </FWrapper>
                  <FWrapper>
                  <FHeading htmlFor="street">Street:</FHeading>
                  <FInput required name="street" type="text" value = {this.state.newStreet} onChange={(event) => this.handleChange("newStreet", event)}/>
                  </FWrapper>
                  <FWrapper>
                  <FHeading htmlFor="city">City:</FHeading>
                  <FInput required name="city" type="text" value = {this.state.newCity} onChange={(event) => this.handleChange("newCity", event)}/>
                  </FWrapper>
                  <FWrapper>
                  <FHeading htmlFor="zip">ZIP:</FHeading>
                  <FInput required name="zip" type="text" pattern='[0-9]*' value = {this.state.newZip} onChange={this.handleChangeZip.bind(this)} />
                  </FWrapper>
                  <Button variant="contained" color="primary" size="small" type="submit">
                    Add Theater
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

const TableInfo = styled.div`
  padding-bottom: 20px;
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
  display:flex;
  flex-direction: column;
  font-size: 36px;
  font-weight: 400;
  color: #2C3A41;
  margin-bottom: 32px;
`;

const RCBContent = styled.div`
  display:flex;
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


export default Theaters;