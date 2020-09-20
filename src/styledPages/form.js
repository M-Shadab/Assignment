import styled from "styled-components"

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    margin-top: 0.8rem;
  }
`

export const Label = styled.label`
  font-size: 1.2rem;
  font-variant: small-caps;
  letter-spacing: 0.8px;
`

export const Input = styled.input`
  border: 1px solid #3498db;
  border-radius: 16px;
  outline: none;
  font-size: 1.2rem;
  color: #3498db;
  letter-spacing: 0.8px;
  padding: 6px 1rem;
`

export const RadioBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.6rem;
  p {
    margin-left: 0.8rem;
  }
`

export const Button = styled.button`
  width: ${({ width }) => (width ? width : "20rem")};
  text-align: center;
  border: 0;
  border-radius: 16px;
  outline: none;
  background: ${({ background }) => (background ? background : "#3498db")};
  padding: 1rem 1.6rem;
  opacity: 0.8;
  font-variant: small-caps;
  color: #fff;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`
