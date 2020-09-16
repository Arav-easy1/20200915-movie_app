import React from "react";
import PropTypes from "prop-types";

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
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://i1.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?fit=900%2C600&ssl=1",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://s23991.pcdn.co/wp-content/uploads/2017/06/bibimbap-recipe-fp.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://www.thespruceeats.com/thmb/bXEyHCT-3algVEAy6GNDXnuCg3Y=/4288x2412/smart/filters:no_upscale()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg",
    rating: 4.7,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

// JSX : JavaScript안의 HTML
function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
