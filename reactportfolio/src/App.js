import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects2 from "./pages/Projects2";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Header />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/aboutme">
              <AboutMe />
            </Route>
            <Route path="/contactme">
              <ContactMe />
            </Route>
            <Route path="/">
              <Projects2 />
            </Route>
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
