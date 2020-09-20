import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { H3, Font12 } from "../styledPages/font"
import {
  Wrapper,
  Header,
  Nav,
  DetailsWrapper,
  UserDetails,
  ProfilePicWrapper,
  PasswordWrapper,
} from "../styledPages/home"

class Home extends Component {
  state = {
    user: {},
  }

  componentDidMount = () => {
    this.setState({ user: this.props.user })
  }

  render = () => {
    const {
      name,
      email,
      phone,
      dateOfBirth,
      gender,
      address,
      profilePic,
    } = this.state.user
    return (
      <Wrapper>
        <Header>
          <H3>Welcome! {name} </H3>
          <Nav>
            <Link to="/home">Home</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/">Login</Link>
          </Nav>
        </Header>
        <DetailsWrapper>
          <UserDetails>
            <Font12>Email: {email}</Font12>
            <Font12>phone: {phone}</Font12>
            <Font12>Date of Birth: {dateOfBirth}</Font12>
            <Font12>Gender: {gender}</Font12>
            <Font12>Address: {address}</Font12>
            <PasswordWrapper>
              <Font12>Password: *****</Font12>
              <Link to="/change-password">Change Password</Link>
            </PasswordWrapper>
          </UserDetails>
          <ProfilePicWrapper>
            <img src={profilePic} alt="profilePic" width="200" />
          </ProfilePicWrapper>
        </DetailsWrapper>
      </Wrapper>
    )
  }
}

//map the loggedIn user to the props to Home Component
const mapStateToProps = ({ users, currentUser }) => {
  const user = users.find((user) => user.id === currentUser.id)
  return { user }
}

//Home component subscribes to the redux store
export default connect(mapStateToProps, null)(Home)
