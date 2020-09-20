import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { USER_PASSWORD_UPDATED } from "../store/types/user"
import Input from "../components/input"
import { Wrapper, FormRow, LoginButtonWrapper } from "../styledPages/login"
import { H1 } from "../styledPages/font"
import { Button } from "../styledPages/form"

export default () => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()

  //Extract the current loggedin user id from the store
  const currentUserId = useSelector(({ currentUser }) => currentUser.id)

  //Handles the password change form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,8}$/

    if (!currentUserId) alert("OOps!, You are bot logged in.")
    else if (password !== confirmPassword) alert("Please, Enter same password")
    else if (!password.match(passwordValidation))
      alert(
        "Please, Enter atleast 1 capital letter, 1 small letter, 1 digit, and 1 symbol in password,"
      )
    else {
      //Update the password by dispatching action to store and then store to reducer
      dispatch({
        type: USER_PASSWORD_UPDATED,
        payload: { id: currentUserId, password },
      })

      //User will redirects to Home page
      history.push("/home")
    }
  }

  return (
    <Wrapper>
      <H1>Change Password</H1>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Input
            id="password"
            type="password"
            label="Enter password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            id="confirmPassword"
            type="password"
            label="Confirm password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormRow>
        <LoginButtonWrapper>
          <Button background="#52BE80" type="submit">
            Save
          </Button>
        </LoginButtonWrapper>
      </form>
    </Wrapper>
  )
}
