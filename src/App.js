import React from "react";

// function component는 function이고 뭔가를 return함. 그리고 screen에 표시 됨.
// class component는 class임. react component로부터 확장되고 screen에 표시 됨.
// *** React는 자동적으로 class component의 render method를 실행함. 자동적으로!!!!
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
