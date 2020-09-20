import { combineReducers } from "redux"
import Users from "./users"
import CurrentUser from "./currentUser"

export default combineReducers({
  users: Users,
  currentUser: CurrentUser,
})
