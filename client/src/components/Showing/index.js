import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";
import axios from 'axios';
import { Button } from '@material-ui/core';

class Showing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null
    };
  }

  handleSubmit(event){
    event.preventDefault();
    const newScreen = new FormData(event.target);
  }

  getAndSaveData(){
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';
    this.setState( async () => {
      try {
        const res = await axios.get(`${url}/showings`);
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

  componentDidMount() {
    this.getAndSaveData();
  }

  renderShowings(){
    if(!this.state.isLoading){
      return this.state.data.map((data) => {
        const { theater_name, screen_id, showing_id, start_time, title} = data
        return (
          <tr key={showing_id}>
            <td>{theater_name}</td>
            <td>{screen_id}</td>
            <td>{showing_id}</td>
            <td>{start_time}</td>
            <td>{title}</td>
            <td>
              <Button variant="contained" color="default" size="small">
                Select Showing
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
                    <th>Showing ID</th>
                    <th>Showing Time</th>
                    <th>Movie Showing</th>
                    <th>Select Movie</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.renderShowings()}
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



export default Showing;