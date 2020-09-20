import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { USER_ADDED } from "../store/types/user"
import Input from "../components/input"
import InputRadio from "../components/inputRadio"
import {
  Wrapper,
  FormRow,
  GenderWrapper,
  ProfilePicWrapper,
} from "../styledPages/signup"
import { H1, Font12 } from "../styledPages/font"
import { Button } from "../styledPages/form"

export default () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [gender, setGender] = useState("male")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const profilePicRef = useRef("")
  const history = useHistory()
  const dispatch = useDispatch()

  //Handle the signup form submission and validate all the required input fields
  const handleSubmit = (e) => {
    e.preventDefault()

    const nameValidation = /^[A-Za-z]+$/
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,8}$/

    if (!firstName.match(nameValidation) && !lastName.match(/^[A-Za-z]+$/))
      alert("Enter alphabets only in name.")
    else if (!profilePic) alert("Please upload Profile pic")
    else if (!password.match(passwordValidation))
      alert(
        "Please, Enter atleast 1 capital letter, 1 small letter, 1 digit, and 1 symbol in password,"
      )
    else if (password.length < 4)
      alert("Password's length should be in between 4 to 8.")
    else if (phone.length < 10) alert("Phone should contain exact 10 digits.")
    else if (address.length > 20 && address.length < 301)
      alert("address's length should be in between 20 to 300 characters.")
    else {
      //Created a current user for registration
      const user = {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        dateOfBirth,
        gender,
        address,
        password,
        profilePic,
      }

      //Dispatching an action to the store object that will store current user data
      dispatch({ type: USER_ADDED, payload: user })

      //Uers redirects to login screen after registration
      history.push("/login")
    }
  }

  return (
    <Wrapper>
      <H1>Please, Signup</H1>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Input
            id="fname"
            label="First Name"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            id="lname"
            label="Last Name"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Input
            id="dob"
            type="date"
            label="Enter date of birth"
            value={dateOfBirth}
            required
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <GenderWrapper>
            <Font12>Select Gender</Font12>
            <div>
              <InputRadio
                value="male"
                label="Male"
                name="gender"
                checked={gender === "male"}
                onChange={(e) => setGender("male")}
              />
              <InputRadio
                value="female"
                label="Female"
                name="gender"
                checked={gender === "female"}
                onChange={(e) => setGender("female")}
              />
              <InputRadio
                value="other"
                label="Other"
                name="gender"
                checked={gender === "other"}
                onChange={(e) => setGender("other")}
              />
            </div>
          </GenderWrapper>
        </FormRow>
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
            id="phone"
            type="number"
            label="Enter Phone"
            value={phone}
            min="1000000000"
            max="9999999999"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Input
            id="address"
            label="Enter Address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
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
        <FormRow>
          <ProfilePicWrapper showImage={profilePic !== ""}>
            <Button
              type="button"
              background={profilePic !== "" && "#52BE80"}
              onClick={() =>
                profilePicRef &&
                profilePicRef.current &&
                profilePicRef.current.click()
              }
            >
              {profilePic ? "Profile Pic Uploaded" : "Uplaod Profile Pic"}
            </Button>
            <input
              ref={profilePicRef}
              type="file"
              accept="image/*"
              name="image"
              id="file"
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  const file = e.target.files[0]
                  const fileSizeInKb = Math.round(file.size / 1000)
                  if (fileSizeInKb > 500)
                    alert("File size can not be greater then 500kb")
                  else {
                    const reader = new FileReader()
                    reader.readAsDataURL(file)
                    reader.onload = function (e) {
                      const image = new Image()
                      image.src = e.target.result
                      image.onload = function () {
                        setProfilePic(image.src)
                      }
                    }
                  }
                }
              }}
            />
            <img id="output" src={profilePic} width="200" alt="profile pic" />
          </ProfilePicWrapper>
          <Button background="#52BE80" type="submit">
            Submit
          </Button>
        </FormRow>
      </form>
    </Wrapper>
  )
}
