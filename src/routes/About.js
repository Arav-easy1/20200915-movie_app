import React from "react";
import "./About.css";

function About(props) {
  return (
    <div className="about__container">
      <div className="about__comment">
        <span>
          “Freedom is the freedom to say that two plus two make four. If that is
          granted, all else follows.”
        </span>
        <span>− George Orwell, 1984</span>
      </div>
      <div className="about__project">
        <span>
          “영화 사이트 API를 이용하여 구현해본 React Page. 영화를 클릭하면
          상세페이지를 볼 수 있고, 반응형으로 구현하여서 화면크기를 줄이면 그에
          맞춰 보여진다.”
        </span>
        <span>− Jiwon Lee(Arav), 20200915-movie_app</span>
      </div>
    </div>
  );
}

export default About;
