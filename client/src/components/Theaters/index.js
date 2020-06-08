import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";
import axios from 'axios';
import { Button } from '@material-ui/core';

class Theaters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    };
  }

  handleSubmit(event){
    event.preventDefault();
    const newTheater = new FormData(event.target);
  }
  handleChange(event){
    event.preventDefault();
    this.setState({age: event.target.value});
  }


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

  componentDidMount() {
    this.getAndSaveData();
  }

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
              <AddItemForm onSubmit={this.handleSubmit}>
                  <FormHeading>Add New Theater...</FormHeading>
                  <FWrapper>
                  <FHeading htmlFor="name">Name:</FHeading>
                  <FInput id="name" name="name" type="text" />
                  </FWrapper>
                  <FWrapper>
                  <FHeading htmlFor="street">Street:</FHeading>
                  <FInput id="street" name="street" type="text" />
                  </FWrapper>
                  <FWrapper>
                  <FHeading htmlFor="city">City:</FHeading>
                  <FInput id="city" name="city" type="text" />
                  </FWrapper>
                  <FWrapper>
                  <FHeading htmlFor="zip">ZIP:</FHeading>
                  <FInput id="zip" name="zip" type="num" />
                  </FWrapper>
                  <Button variant="contained" color="primary" size="small">
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


export default Theaters;