import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>p8npm!</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));

const $b_n2 = jQuery("#get_in_n2");
const $button_n1 = jQuery("#get_in_n1");
const changeColor = () => {
    $b_n2.toggleClass("red_n1");
};
$button_n1.click(changeColor);
