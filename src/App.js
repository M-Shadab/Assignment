import React, { lazy, Suspense } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import AppWrapper from "./styledPages/app"

const Signup = lazy(() => import("./pages/signup"))
const Login = lazy(() => import("./pages/login"))
const ChangePassword = lazy(() => import("./pages/changePassword"))
const Home = lazy(() => import("./pages/home"))

function App() {
  return (
    <AppWrapper>
      <Provider store={store}>
        <Suspense fallback="<h3>Loading</h3>">
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/change-password">
              <ChangePassword />
            </Route>
            <Route path="/">
              <Login />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Provider>
    </AppWrapper>
  )
}

export default App
