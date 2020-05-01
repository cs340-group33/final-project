import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";
import axios from 'axios';
import Table from "../../Shared/Table";
import Button from '@material-ui/core/Button';

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
                      <th>Theater</th>
                      <th>Edit/Delete</th>
                    </tr>
                  </thead>
                   <tbody>
                    <tr>
                    </tr>
                   </tbody>
                </table>
              </TheaterTable>
              <AddItemForm>
                <form onSubmit={this.handleSubmit}>
                  <FormHeading>New Movie Title:</FormHeading>
                  <input id="movieTitle" name="movieTitle" type="text"/>
                  <br/><br/>
                  <Button variant="contained" color="primary" size="small">
                    Add New Movie
                  </Button>
                </form>
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
  background-color:#E3F2FD;
`;

const RightContentBox = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #FFFFFF;
  padding: 20px 20px 20px 20px;
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
  justify-content: center;
  font-weight: 600;
  padding: 5px 5px 5px 5px;
`;

const FormHeading = styled.div`
  display: flex;
  padding-bottom: 5px;
  padding-top: 5px;
`;


export default Movies;