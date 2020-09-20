import React from "react"
import { RadioBtn } from "../styledPages/form"
import { Font12 } from "../styledPages/font"

export default ({ label, ...restProps }) => {
  return (
    <RadioBtn>
      <input type="radio" {...restProps} /> <Font12>{label}</Font12>
    </RadioBtn>
  )
}
