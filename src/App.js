import React from "react";
import { Router, Link } from "@reach/router";
import Hello from './solutions/1-hello/hello';
import WelcomeClass from "./solutions/2-class-component/welcome-class";
import WelcomeFunctional from "./solutions/3-functional-component/welcome-functional";
import CheckboxClass from "./solutions/4-state-class/state-class";
import CheckboxFunctional from "./solutions/5-state-functional/state-functional";
import CheckboxFunctionalWithProps from "./solutions/6-props/function-props";
import Counter from "./solutions/7-example-app/counter";

// es6 syntax
const Routers = () => (
  <Router>
    <Hello path="/" />
    <WelcomeClass path="welcome-class"/>
    <WelcomeFunctional path="welcome-function"/>
    <CheckboxClass path="state-class" />
    <CheckboxFunctional path="state-function" />
    <CheckboxFunctionalWithProps path="state-function-props" label="selected"/>
    <Counter path="example-app" initialCount={5}/>
  </Router>
);

const Links = () => (
  <div>
    <nav>
      <Link to="/">Hello JSX</Link> | {" "}
      <Link to="/welcome-class">Class Component</Link> | {" "}
      <Link to="/welcome-function">Functional Component</Link> | {" "}
      <Link to="/state-class">Statefull Slass</Link> | {" "}
      <Link to="/state-function">Statefull Functional Component</Link> | {" "}
      <Link to="/state-function-props">Statefull Functional Component With Props</Link> | {" "}
      <Link to="/example-app">Example App (Counter)</Link>
    </nav>
  </div>
);

function App() {
  return (
    <div>
      <Links />
      <Routers />
    </div>
  );
}

export default App;
