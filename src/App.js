import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog_details from "./Components/Blog_details";
import Home from "./Components/Home";
import userDashboard from "./Components/UserDashboard/userDashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:id" component={Blog_details} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;