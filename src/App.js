import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      {/* Route안에는 매우 중요한 props가 하나 들어감.
    렌더링할 스크린이 들어가고, 다른 prop은 뭘할지 정해줌. */}
      {/* Route에 exact={true}를 넣으면, url path가 딱 /일때만 render된다. */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
