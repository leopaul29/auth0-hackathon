import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

import React from "react";

import { Auth0Provider } from "@auth0/auth0-react";

const App = () => (
  <Auth0Provider
    domain="yrladd.eu.auth0.com"
    clientId="Nnqj6YR5YjiBDSO6LGlzla1lwMsFs67Y"
    redirectUri={window.location.origin}
  >
    <div id="app">
      <Header />
      <Router>
        <Home path="/" />
        <Profile path="/profile/:user" />
      </Router>
    </div>
  </Auth0Provider>
);

export default App;
