import React from "react";
import "./style.css";

import { motion } from "framer-motion";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navi from "./components/Navi";
import Home from "./components/Home";
import { homeData } from "./data/homeData";
import Features from "./components/Features";
import Shop from "./components/Shop";
import shopdata from "./data/shopdata";
import shopdetail from "./components/shopdetail";
import More from "./components/More";
export default function App() {
  const CardComp = homeData.map((item, index) => (
    <Features
      imgURL={item.imgURL}
      name={item.name}
      header={item.header}
      topic={item.topic}
    />
  ));
  return (
    <Router>
      <Navi />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/features">{CardComp}</Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/more">
          <More />
        </Route>
      </Switch>
    </Router>
  );
}
