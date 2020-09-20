import { createStore } from "redux"
import rootReducer from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"

const initialState = {}

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
})

export default createStore(rootReducer, initialState, composeEnhancers())
