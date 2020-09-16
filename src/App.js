import React from "react";

// function Food(props) {
//   console.log(props.fav);
//   return <h1>I like Apple</h1>;
// }
// props object 내부에는 fav가 있음
// props.fav = { fav }

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://i1.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?fit=900%2C600&ssl=1",
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://s23991.pcdn.co/wp-content/uploads/2017/06/bibimbap-recipe-fp.jpg",
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://www.thespruceeats.com/thmb/bXEyHCT-3algVEAy6GNDXnuCg3Y=/4288x2412/smart/filters:no_upscale()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg",
  },
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} />;
}

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

// JSX : JavaScript안의 HTML
function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
