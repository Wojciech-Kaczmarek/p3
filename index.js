import React from "react";
import ReactDOM from "react-dom";
// cmd { } //
const App = () => {
  return <div>
    <article id="get_in_n2">
      <h1>tytul artykulu</h1>
      <img src="grafika.png" alt="co jest w grafice" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima est voluptas incidunt a soluta non consectetur sequi esse odio, provident, suscipit veritatis! Vero, ut modi perferendis dignissimos provident pariatur. Deleniti.</p>
      <a href="artykul1.html">czytaj wiecej</a>
    </article>
    <article>
      <h1>tytul artykulu</h1>
      <img src="grafika.png" alt="co jest w grafice" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima est voluptas incidunt a soluta non consectetur sequi esse odio, provident, suscipit veritatis! Vero, ut modi perferendis dignissimos provident pariatur. Deleniti.</p>
      <a href="artykul1.html">czytaj wiecej</a>
    </article>
    <article>
      <h1>tytul artykulu</h1>
      <img src="grafika.png" alt="co jest w grafice" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima est voluptas incidunt a soluta non consectetur sequi esse odio, provident, suscipit veritatis! Vero, ut modi perferendis dignissimos provident pariatur. Deleniti.</p>
      <a href="artykul1.html">czytaj wiecej</a>
    </article>
  </div>;
};

ReactDOM.render(<App />, document.getElementById("app"));

const $b_n2 = jQuery("#get_in_n2");
const $button_n1 = jQuery("#get_in_n1");
const changeColor = () => {
    $b_n2.toggleClass("red_n1");
};
$button_n1.click(changeColor);
