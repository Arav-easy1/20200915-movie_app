import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import "./App.css";
import Navigation from "./components/Navigation";

// Router는 HashRouter가 있고, BrowserRouter가 있는데
// BrowswerRouter는 github blog에 업로드할때 좀 까다로워서
// HashRouter이 다루기 좀 더 쉬움.

function App() {
  return (
    <HashRouter>
      {/* Navigation에서 Link를 사용할거라면 꼭 이렇게 Router안에 들어있어야함. */}
      <Navigation />
      {/* Route안에는 매우 중요한 props가 하나 들어감.
    렌더링할 스크린이 들어가고, 다른 prop은 뭘할지 정해줌. */}
      {/* Route에 exact={true}를 넣으면, url path가 딱 /일때만 render된다. */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
    // 만약 footer가 있다면 이 위치에 <footer></footer>를 넣으면 됨.
  );
}

export default App;
