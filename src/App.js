import React from "react";
import axios from "axios";

// function component는 function이고 뭔가를 return함. 그리고 screen에 표시 됨.
// class component는 class임. react component로부터 확장되고 screen에 표시 됨.
// *** React는 자동적으로 class component의 render method를 실행함. 자동적으로!!!!
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    // Data Fatch 방법, 하지만 Axios라는 더 좋은 방법이 있다.
    // fetch();
    // 마치 fetch위의 작은 layer, 혹은 땅콩 주위의 멋진 초콜릿.
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
    // axios.get은 항상 빠르지는 않음.
    // javascript에게 componentDidMount함수가 끝날때까지 시간이 걸릴 수 있다고 말해야 됨. 그걸 기다려야 됨.
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
