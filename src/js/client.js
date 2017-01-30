import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import Landing from "./pages/Landing"
import Layout from "./pages/Layout"
import Digital from "./pages/Digital"
import About from "./pages/About"
import Vector from "./pages/Vector"
import Portfolio from "./pages/Portfolio"
import Sculpture from "./pages/Sculpture"
const app = document.getElementById('app');

ReactDOM.render(
  <Router history = {hashHistory} >
    <Route path = "/" component = {Layout}>
      <IndexRoute component={Landing}></IndexRoute>
      <Route path = "about" component = {About}></Route>
      <Route path = "portfolio(/:image)" component = {Portfolio}></Route>
      <Route path = "vector" component = {Vector}></Route>
      <Route path = "digital" component = {Digital}></Route>
      <Route path = "sculpture" component = {Sculpture}></Route>
    </Route>
  </Router>, app);
