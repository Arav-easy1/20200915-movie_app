import React from "react";
// 위의 import를 하지 않으면 React는 여기에 jsx가 있는 component를 사용하는 것을 이해하지 못해

// Potato라는 함수를 선언함.
function Potato() {
  return <h3>I love potato</h3>;
}

// potato를 export를 해주지 않으면 아무도 저 함수를 read하지 않는다고 뜸.(아무도 안쓴다는거지)
export default Potato;
