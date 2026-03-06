import React from "react";
import ReactDOM from "react-dom/client";

//Nested HTML Structure using React.createElement

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag in child 1"),
    React.createElement("h2", {}, "I am h2 tag in child 1"),
  ]),
);

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
