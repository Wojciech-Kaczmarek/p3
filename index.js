import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));

const $dupsko = jQuery("#get_in_n2");
const $button_n1 = jQuery("#get_in_n1");
const changeColor = () => {
    $dupsko.toggleClass("red_n1");
};
$button_n1.click(changeColor);
