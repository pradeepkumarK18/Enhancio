import React from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile'

const Wrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
`;

const UserList = styled.div`
  display: block;
`;

class App extends React.Component {
  
  componentDidMount() {
      this.props.fetchUsers();
    }

    render() {

        const { users } = this.props

   
        let usersList = [];

        for(let i =0; i<users.length;i++) {
        usersList.push(<UserProfile key={i} user={users[i]} />)
      }

      return (
        <div>
          <Wrapper>
              <UserList>
            {usersList}
            </UserList>
            </Wrapper>
          </div>
      )
    }
}

export default App;