import styled from "styled-components"

export const Wrapper = styled.div`
  width: 60rem;
  height: 95vh;
  h1 {
    padding-bottom: 0.8rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #d5dbdb;
  }
  form {
    > div:last-child {
      margin-top: 3rem;
    }
  }
`

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  div:first-child {
    margin-right: 1.6rem;
  }

  margin-bottom: 1rem;
`

export const GenderWrapper = styled.div`
  width: 100%;
  > div {
    margin-top: 1.5rem;
    display: flex;
  }
`

export const ProfilePicWrapper = styled.div`
  poaition: relative;
  input {
    display: none;
  }

  img {
    display: ${({ showImage }) => (showImage ? "block" : "none")};
    position: absolute;
    margin-top: 1.6rem;
  }
`
