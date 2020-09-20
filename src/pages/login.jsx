import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { CURRENT_USER_ID } from "../store/types/user"
import Input from "../components/input"
import {
  Wrapper,
  FormRow,
  LoginButtonWrapper,
  SignupLink,
} from "../styledPages/login"
import { H1, Font12 } from "../styledPages/font"
import { Button } from "../styledPages/form"

export default () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()
  const users = useSelector(({ users }) => users)

  //Handles the Login form submission and validate the user whether user exist in our platform or not
  const handleSubmit = (e) => {
    e.preventDefault()
    const currentUser = users.find(
      (user) => user.email === email && user.password === password
    )
    if (!currentUser) alert("OOps!, Email or password is not correct")
    else {
      //Update the current user id in store object, to mark current user as loggedIn
      dispatch({ type: CURRENT_USER_ID, payload: { id: currentUser.id } })

      //redirects to Home page
      history.push("/home")
    }
  }

  return (
    <Wrapper>
      <H1>Please, Login</H1>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Input
            id="email"
            type="email"
            label="Enter Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            type="password"
            label="Enter password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRow>
        <LoginButtonWrapper>
          <Button background="#52BE80" type="submit">
            Login
          </Button>
        </LoginButtonWrapper>
        <SignupLink>
          <Font12>
            <Link to="/signup">Click here to SignUp</Link>
          </Font12>
        </SignupLink>
      </form>
    </Wrapper>
  )
}
