import React from "react"
import { InputWrapper, Label, Input } from "../styledPages/form"

export default ({ label, id, ...restProps }) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...restProps} />
    </InputWrapper>
  )
}
