import React from "react";
import { Router, Link } from "@reach/router";

// exercises
import HelloExercise from "./exercises/1-hello/hello";
import WelcomeClassExercise from "./exercises/2-class-component/welcome-class";
import WelcomeFunctionalExercise from "./exercises/3-functional-component/welcome-functional";
import CheckboxClassExercise from "./exercises/4-state-class/state-class";
import CheckboxFunctionalExercise from "./exercises/5-state-functional/state-functional";
import CheckboxFunctionalWithPropsExercise from "./exercises/6-props/function-props";
import CounterExercise from "./exercises/7-example-app/counter";

// solutions
import Hello from "./solutions/1-hello/hello";
import WelcomeClass from "./solutions/2-class-component/welcome-class";
import WelcomeFunctional from "./solutions/3-functional-component/welcome-functional";
import CheckboxClass from "./solutions/4-state-class/state-class";
import CheckboxFunctional from "./solutions/5-state-functional/state-functional";
import CheckboxFunctionalWithProps from "./solutions/6-props/function-props";
import Counter from "./solutions/7-example-app/counter";



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

// es6 syntax
const SolutionRouters = () => (
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

const SolutionLinks = () => (
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

// exercises
const ExerciseRouters = () => (
  <Router>
    <HelloExercise path="/exercise" />
    <WelcomeClassExercise path="welcome-class-exercise" />
    <WelcomeFunctionalExercise path="welcome-function-exercise" />
    <CheckboxClassExercise path="state-class-exercise" />
    <CheckboxFunctionalExercise path="state-function-exercise" />
    <CheckboxFunctionalWithPropsExercise path="state-function-props-exercise" label="selected" />
    <CounterExercise path="example-app-exercise" initialCount={5} />
  </Router>
);

const ExerciseLinks = () => (
  <nav className="flex flex-col mr-3 pr-4 border-r-2 border-gray-500">
    <AppNavLink to="/exercise"  title="Hello JSX" />
    <AppNavLink to="/welcome-class-exercise"  title="Class Component" />
    <AppNavLink to="/welcome-function-exercise" title="Functional Component" />
    <AppNavLink to="/state-class-exercise" title="Statefull Slass" />
    <AppNavLink to="/state-function-exercise" title="Statefull Functional Component" />
    <AppNavLink to="/state-function-props-exercise" title="Statefull Functional Component With Props" />
    <AppNavLink to="/example-app-exercise" title="Example App (Counter)" />
  </nav>
);

function App() {
  return (
    <div className="font-sans w-screen h-screen min-h-0 bg-gray-100">
      <div className="bg-blue-600 text-white py-3 px-6 mb-3 shadow-md">
        <h1 className="text-2xl font-semibold">React Workshop</h1>
      </div>


      <div className="container mx-auto mb-6">
        <h1 className="font-bold text-xl">Exercises</h1>
        <div className="flex w-full h-full">
          <ExerciseLinks />
          <ExerciseRouters />
        </div>
      </div>

      <div className="bg-white container mx-auto py-3">
        <h1 className="font-bold text-xl">Solutions</h1>
        <div className="flex w-full h-full">
          <SolutionLinks />
          <SolutionRouters />
        </div>
      </div>
    </div>
  );
}

export default App;
