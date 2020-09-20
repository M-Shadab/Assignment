import * as types from "../types/user"

const initialState = { id: null }

export default (state = initialState, action) => {
  if (action.type === types.CURRENT_USER_ID) {
    return { ...action.payload }
  } else return state
}
