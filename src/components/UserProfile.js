import React from 'react';
import styled from 'styled-components';

const UserListItem = styled.div`
  display: flex;
  font-size: 14px;
  padding-bottom: 12px;
  padding-top: 12px;
  justify-content: left;
  border-top: 1px solid #586069;
  width: 400px;
  margin: 0 auto;
`;

const UserAvatar = styled.img`
  left: 0;
  right: 0;
  position: relative;
  border-radius: 3px;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  border-style: none;
  width: 48px;
  height: 48px;
`;

const UserInfo = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  min-height: 48px;
  padding: 0;
  margin-left: 8px;
`;

const Username = styled.div`
  margin-left: 4px;
  display: inline;
`;

const UserBio = styled.p`
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 6px;
`;

const UserListMeta = styled.ul`
  list-style: none;
  font-size: 12px;
  margin-top: 0px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  color: #586069;
  padding: 0;
  margin-bottom: 0;
`;

const UserListMetaLi = styled.li`
  margin-right: 16px;
`;

const UserListMetaSvg = styled.svg`
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
`;

const UserLogin = styled.a`
  color: #0366d6;
  text-decoration: none;
`;

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userInfo: null };
  }

  componentDidMount() {
    fetch(this.props.user.url)
    .then(response => response.json())
    .then(data => {
      this.setState({ userInfo: data });
    });
  }

  render() {
    const { userInfo } = this.state;
      return (
            <div>
            { userInfo ? <UserListItem>
                <UserAvatar alt={userInfo.login} src={userInfo.avatar_url}/>
                <UserInfo>
                  <UserLogin href={userInfo.html_url} target="_blank" rel="noopener noreferrer">{userInfo.login}</UserLogin>
                  <Username>{userInfo.name}</Username>
                  <UserBio>{userInfo.bio}</UserBio>
                  <UserListMeta>
                    { userInfo.location ? <UserListMetaLi>
                      <UserListMetaSvg viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></UserListMetaSvg>
                      &nbsp;{userInfo.location}
                    </UserListMetaLi> : null}
                    { userInfo.email ? <UserListMetaLi>
                      <UserListMetaSvg viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></UserListMetaSvg>
                      &nbsp;{userInfo.email}
                    </UserListMetaLi> : null}
                  </UserListMeta>
                </UserInfo>
            </UserListItem> : '...loading'}
            </div>
      )
    }
}


export default UserProfile;