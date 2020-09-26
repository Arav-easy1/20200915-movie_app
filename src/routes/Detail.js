import React from "react";
import "./Detail.css";
import "./Home.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  // render가 먼저 일어나니까 처리 안해주면 location 없다고 에러난당.
  render() {
    const { location } = this.props;
    if (location.state) {
      window.scrollTo(0, 0);
      return (
        <div className="movie_detail">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie_detail_data">
            <h3 className="movie_detail_title">{location.state.title}</h3>
            <h5 className="movie_detail_year">{location.state.year}</h5>
            <ul className="movie_detail_genres">
              {location.state.genres.map((genre, index) => (
                <li key={index} className="genres_genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie_detail_summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
