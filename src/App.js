import React from "react";
import { Router, Link } from "@reach/router";
import Hello from "./solutions/1-hello/hello";
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
    <WelcomeClass path="welcome-class" />
    <WelcomeFunctional path="welcome-function" />
    <CheckboxClass path="state-class" />
    <CheckboxFunctional path="state-function" />
    <CheckboxFunctionalWithProps path="state-function-props" label="selected" />
    <Counter path="example-app" initialCount={5} />
  </Router>
);

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "p-2 my-2 bg-indigo-400 rounded text-white" } : {
    className: "my-2 p-2 "
  }
}

const AppNavLink = (props) => (
  <Link to={props.to} className="flex p-2 my-2 text-xl rounded" getProps={isActive} {...props}>
      {props.title}
    </Link>
)

const Links = () => (
  <nav className="flex flex-col mr-3 pr-4 border-r-2 border-gray-500">
    <AppNavLink to="/"  title="Hello JSX" />
    <AppNavLink to="/welcome-class"  title="Class Component" />
    <AppNavLink to="/welcome-function" title="Functional Component" />
    <AppNavLink to="/state-class" title="Statefull Slass" />
    <AppNavLink to="/state-function" title="Statefull Functional Component" />
    <AppNavLink to="/state-function-props" title="Statefull Functional Component With Props" />
    <AppNavLink to="/example-app" title="Example App (Counter)" />
  </nav>
);

function App() {
  return (
    <div className="font-sans w-screen h-screen min-h-0 bg-gray-100">
      <div className="bg-blue-600 text-white py-3 px-6 mb-3 shadow-md">
        <h1 className="text-2xl font-semibold">React Workshop</h1>
      </div>
      <div className="container mx-auto">
        <div className="flex w-full h-full">
          <Links />
          <Routers />
        </div>
      </div>
    </div>
  );
}

export default App;
