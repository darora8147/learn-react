import React from "react";
import ReactDOM from "react-dom/client";

//Nested HTML Structure using React.createElement, normal way to create HTML structure using React

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am h1 tag in child 1"),
//     React.createElement("h2", {}, "I am h2 tag in child 1"),
//   ]),
// );

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!!");

// Creating React Element using JSX, JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is used in React to describe the UI structure and components in a more readable and declarative way.
const jsxHeading = (
  <h1 id="heading">
    Hello World from React using JSX Element!!
    </h1>
);


const Title = () => (
  <h1 id="heading">
    Hello World from React using Title Functional Component!!
    </h1>
);

// Creating React Functional Component
// const HeadingComponent = () => {
//   return <h1 id="heading">Hello World from React using Functional Component!!</h1>;
// }

// Component Composition - A component can be used inside another component, this is called component composition. It helps in reusability of code and makes the code more organized and maintainable.
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 id="heading">Hello World from React using Functional Component!!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

root.render(<HeadingComponent />);
