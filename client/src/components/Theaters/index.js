import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";
import Button from '@material-ui/core/Button';


class Theaters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit(event){
    event.preventDefault();
    const newTheater = new FormData(event.target);
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
              <TheaterTable>
                <table>
                  <thead>
                  <tr>
                    <th>Theater Name</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>ZIP</th>
                    <th>Edit/Delete</th>
                  </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </TheaterTable>
              <AddItemForm>
                <form onSubmit={this.handleSubmit}>
                  <FormHeading>Add New Theater Information</FormHeading>
                  <label htmlFor="name">Name:</label>
                  <input id="name" name="name" type="text" />
                  <br/>
                  <label htmlFor="street">Street:</label>
                  <input id="street" name="street" type="text" />
                  <br/>
                  <label htmlFor="city">City:</label>
                  <input id="city" name="city" type="text" />
                  <br/>
                  <label htmlFor="zip">ZIP:</label>
                  <input id="zip" name="zip" type="num" />
                  <br/>
                  <Button variant="contained" color="primary" size="small">
                    Add Theater
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
  display: inline-block;
  font-weight: 600;
  padding: 5px 5px 5px 5px;
`;

const FormHeading = styled.div`
  display: flex;
  padding-bottom: 5px;
  padding-top: 5px;
`;


export default Theaters;