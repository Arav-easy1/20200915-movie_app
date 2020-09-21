import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// function component는 function이고 뭔가를 return함. 그리고 screen에 표시 됨.
// class component는 class임. react component로부터 확장되고 screen에 표시 됨.
// *** React는 자동적으로 class component의 render method를 실행함. 자동적으로!!!!
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // axios.get은 항상 빠르지는 않음.
    // javascript에게 componentDidMount함수가 끝날때까지 시간이 걸릴 수 있다고 말해야 됨. 그걸 기다려야 됨.
    // async랑 await을 써줘서 이 함수가 비동기라고 말해준다.
    // async : 기다려!
    // await : 뭘 기다려? axios? ㅇㅋㅇㅋ axios가 끝날 때까지 기다렸다가 계속 할게
    // this.setState({ movies: movies }); 아래처럼 단축해서 쓸 수 있음.
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    // Data Fatch 방법, 하지만 Axios라는 더 좋은 방법이 있다.
    // fetch();
    // 마치 fetch위의 작은 layer, 혹은 땅콩 주위의 멋진 초콜릿.
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
