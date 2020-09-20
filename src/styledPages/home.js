import styled from "styled-components"

export const Wrapper = styled.div`
  width: 60rem;
  h1 {
    padding-bottom: 0.8rem;
    margin-bottom: 1rem;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d5dbdb;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  a {
    opacity: 0.9;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.2rem;
    letter-spacing: 0.8px;
    margin-right: 1.6rem;
    :hover {
      opacity: 1;
    }
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`

export const UserDetails = styled.div`
  width: 100%;
  p {
    margin-bottom: 1rem;
  }
`
export const ProfilePicWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`

export const PasswordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
