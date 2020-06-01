import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";
import axios from 'axios';
import { Button,
  ButtonGroup,
   } from '@material-ui/core';



class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: '',
      newMovieTitle: '',
      setTitle:'',
      movies: null,
      isLoading: true,
    };
  }

  handleSubmitSearch = async (event) =>{
    event.preventDefault();
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';

    const config = {
      'Content-Type': 'application/json',
    };
    const payload = {
      'title': this.state.searchTitle
    };
    this.setState( async ()=> {
      try {
        const res = await axios.post(`${url}/movies/search`, payload, config);
        if (res.status === 200) {
          let newData = res.data;
          this.setState({
            movies: newData
          })
        }
      } catch (e) {
        console.log(e);
        const {response: {status}} = e
      }
    });
    this.renderMovies();
  }


  handleChangeSearch= (event) => {
    this.setState({searchTitle: event.target.value});
  }


  handleSubmitAdd = async (event) =>{
    event.preventDefault();
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';

    const config = {
      'Content-Type': 'application/json',
    };
    const payload = {
      'title': this.state.newMovieTitle
    };
    this.setState( async ()=> {
      try {
        const res = await axios.post(`${url}/movies`, payload, config);
        if (res.status === 200) {
        }
      } catch (e) {
        console.log(e);
        const {response: {status}} = e
      }
    });
    this.getAndSaveData();
    this.renderMovies();
  }
  handleChangeMovie = (event) => {
    this.setState({newMovieTitle: event.target.value});
  }

  getAndSaveData(){
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cs340-final.herokuapp.com';
    this.setState( async () => {
      try {
        const res = await axios.get(`${url}/movies`);
        if (res.status === 200) {
          let newData = res.data;
          this.setState({
            isLoading: false,
            movies: newData
          })

        }
      } catch (e) {
        console.log(e);
        const {response: {status}} = e
      }
    })
  }

  renderMovies () {
    if(!this.state.isLoading){
      return this.state.movies.map((movies) => {
        const { movie_id, title } = movies
        return (
          <tr key={movie_id}>
            <td>{movie_id}</td>
            <td>{title}</td>
            <td><ButtonGroup color="primary" aria-label="small outlined primary button group">
              <Button>Edit Title</Button>
              <Button>Delete</Button>
            </ButtonGroup></td>
          </tr>
        )
      })
    }
  }


  componentDidMount() {
    this.getAndSaveData();
  }

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
              <TableInfo>
                <Button variant="contained" color="primary" size="medium">
                  Display Movies That Aren't Currently Shown
                </Button>
                <br/>
                <Button variant="contained" color="primary" size="medium">
                  Display All Movies
                </Button>
              </TableInfo>
              <TheaterTable>
               <table>
                  <thead>
                    <tr>
                      <th>Movie ID</th>
                      <th>Movie Title</th>
                      <th>Manage Movie</th>
                    </tr>
                  </thead>
                 <tbody>
                 {this.renderMovies()}
                 </tbody>
                </table>
              </TheaterTable>
              <SearchMovie onSubmit={this.handleSubmitSearch}>
                <FormHeading>Search for a Movie</FormHeading>
                <FWrapper>
                  <FHeading>Movie Title:</FHeading>
                  <FInput type="text" placeholder="Search"  value = {this.state.searchTitle} onChange = {this.handleChangeSearch}/>
                </FWrapper>
                <Button variant="contained" color="primary" size="small" type="submit">
                  Search
                </Button>
              </SearchMovie>
              <AddItemForm onSubmit={this.handleSubmitAdd}>
                <FormHeading>Add A New Movie...</FormHeading>
                <FWrapper>
                  <FHeading>Movie Title:</FHeading>
                  <FInput type="text" placeholder="Add New Movie" value={this.state.newMovieTitle} onChange={this.handleChangeMovie}/>
                </FWrapper>
                <Button variant="contained" color="primary" size="small" type="submit">
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

const TableInfo = styled.div`
  display: flex;
  flex-direction: column;
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


const AddItemForm = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  padding: 5px 5px 5px 5px;
`;

const SearchMovie = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  padding-bottom: 25px;
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

export default Movies;