import React from 'react';
import styled from 'styled-components';
import SideBarNav from "../../Shared/SideNavBar";
import Button from '@material-ui/core/Button';


class Managers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleSubmit(event){
    event.preventDefault();
    const newManager = new FormData(event.target);
  }

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
                      <th>Manager Name</th>
                      <th>Theaters Managing</th>
                      <th>Edit/Delete</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
                <AddItemForm>
                  <form onSubmit={this.handleSubmit}>
                    <FormHeading>Add New Manager Information</FormHeading>
                    <label htmlFor="first_name">First Name:</label>
                    <input id="first_name" name="first_name" type="text" />
                    <br/>
                    <label htmlFor="last_name">Last Name:</label>
                    <input id="last_name" name="last_name" type="text" />
                    <br/>
                    <Button variant="contained" color="primary" size="small">
                      Add Manager
                    </Button>
                  </form>
                </AddItemForm>
              </TheaterTable>
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

export default Managers;