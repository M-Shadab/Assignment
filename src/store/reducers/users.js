import * as types from "../types/user"

const initialState = []

let userId = 0

export default (state = initialState, action) => {
  if (action.type === types.USER_ADDED) {
    const newUser = { ...action.payload }
    newUser.id = ++userId
    const prevState = [...state]
    prevState.push(newUser)
    return prevState
  } else if (action.type === types.USER_PASSWORD_UPDATED) {
    const prevUsers = [...state]
    const userIndex = prevUsers.findIndex(
      (user) => user.id === action.payload.id
    )

    prevUsers[userIndex].password = action.payload.password

    return prevUsers
  } else return state
}
