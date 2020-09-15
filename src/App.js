import React from "react";
import Potato from "./Potato";

// function Food(props) {
//   console.log(props.fav);
//   return <h1>I like Apple</h1>;
// }
// props object 내부에는 fav가 있음
// props.fav = { fav }

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

// JSX : JavaScript안의 HTML
function App() {
  return (
    <div>
      <h1>Hello!!!!!!!!</h1>
      <Potato />
      {/* Food component에 fav라는 이름의 property(=Prop)를 kimchi라는 value로 줌. */}
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="hambergur" />
      <Food fav="kebap" />
    </div>
  );
}

export default App;
