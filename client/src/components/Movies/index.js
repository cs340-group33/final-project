import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";
import axios from 'axios';
import { Button, ButtonGroup } from '@material-ui/core';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      data: []
    };
  }

  handleSubmit(event){
    event.preventDefault();
    const newMovie = new FormData(event.target);
  }

  handleChange(event){
    event.preventDefault();
    this.setState({age: event.target.value});
  }

  /*componentDidMount() {
    axios.get('http://localhost:3000/movies/').then(
      (result) =>{
        console.log(result);
        this.setState({
          data: result.data
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }*/

  render() {
    return (
      <PageContainer>
        <SideBarNav>
        </SideBarNav>
        <RightBox>
          <RightContentBox>
            <RCBHeader>
              <div>Manage Movies</div>
            </RCBHeader>
            <RCBContent>
              <TheaterTable>
               <table>
                  <thead>
                    <tr>
                      <th>Movie Title</th>
                      <th>Is Playing</th>
                      <th>Select</th>
                    </tr>
                  </thead>
                 <tbody>
                 <tr>
                   <td>Test Data</td>
                   <td>Test Data</td>
                   <td>
                     <ButtonGroup color="primary" aria-label="small outlined primary button group">
                       <Button>Edit</Button>
                       <Button>Delete</Button>
                     </ButtonGroup>
                   </td>
                 </tr>
                 </tbody>
                </table>
              </TheaterTable>
              <AddItemForm onSubmit={this.handleSubmit}>
                <FormHeading>Add A New Movie...</FormHeading>
                <FWrapper>
                  <FHeading htmlFor="movie_title">Movie Title:</FHeading>
                  <FInput id="movie_title" name="movie_title" type="text" />
                </FWrapper>
                <Button variant="contained" color="primary" size="small">
                  Add Movie
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
  padding-bottom: 20px;
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

export default Movies;