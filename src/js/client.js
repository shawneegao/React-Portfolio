import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import Landing from "./pages/Landing"
import Layout from "./pages/Layout"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
const app = document.getElementById('app');

ReactDOM.render(
  <Router history = {hashHistory} >
    <Route path = "/" component = {Layout}>
      <IndexRoute component={Landing}></IndexRoute>
      <Route path = "about" component = {About}></Route>
      <Route path = "portfolio(/:image)" component = {Portfolio}></Route>
    </Route>
  </Router>, app);
