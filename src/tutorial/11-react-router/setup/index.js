import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages, these are just components that will become pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
// A Person component
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  // You would want to wrap all your index return into the Router, normally when you work with ReactRouter you wrap the whole aplication in index.js where all the Dom.render stuff is
  return (
    <Router>
      {/* Because this Navbar is at the top of all this stuff it'll be added to every page, be aware of that */}
      <Navbar />
      {/* In a switch component, only the first one that matches is displayed. Meaning we can prevent error page from always showing up on any page since it matches with all of them technically */}
      <Switch>
        {/* The exact is put here so it doesn't pop up in the other urls since technically they all have "/" and would cause it to normally show up. Keep this in mind when doing nested links like /about/somethingelse */}
        <Route exact path="/">
          {/* Inside the Route component is where you display the component you want */}
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        {/* The Person component will be our placeholder. In that Person component we will now grab that id and fetch that data */}
        <Route path="/person/:id" children={<Person />}></Route>
        {/* What * means is that it will always always match */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
