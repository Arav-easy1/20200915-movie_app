import React from "react";
import Potato from "./Potato";

// function Food(props) {
//   console.log(props.fav);
//   return <h1>I like Apple</h1>;
// }
// props object 내부에는 fav가 있음
// props.fav = { fav }

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg",
  },
  {
    name: "Samgyeopsal",
    image:
      "https://i1.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?fit=900%2C600&ssl=1",
  },
  {
    name: "Bibimbap",
    image:
      "https://s23991.pcdn.co/wp-content/uploads/2017/06/bibimbap-recipe-fp.jpg",
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  },
  {
    name: "Kimbap",
    image:
      "https://www.thespruceeats.com/thmb/bXEyHCT-3algVEAy6GNDXnuCg3Y=/4288x2412/smart/filters:no_upscale()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg",
  },
];

// JSX : JavaScript안의 HTML
function App() {
  return (
    <div>
      {/* Food component에 fav라는 이름의 property(=Prop)를 kimchi라는 value로 줌. */}
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
