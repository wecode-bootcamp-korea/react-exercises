import React, { Component } from "react";
import Buttons from "./Components/Buttons";
import CardList from "./Components/CardList/CardList";
import "./Coffee.scss";

/**********************************************************
  
  현재 http://api:8000/drinks 에서 전체 데이터를 받아오고 있습니다
  
  하지만 데이터가 너무 많네요! 10개 씩 끊어서 보여주면 좋겠습니다.

  영상에서 공부한 offset, limit 개념을 활용하여 페이지네이션을 구현해주세요.

  - 쿼리스트링을 사용해 limit와, offset을 바꿔가며 요청을 보내보세요.
  - 선택된 페이지의 버튼은 Buttons.scss에 준비된,
    selected 클래스명을 활용해 현재 페이지와 일치할 경우 스타일링 될 수 있도록 해주세요.

***********************************************************/

class Coffee extends Component {
  state = {
    coffee: [],
    userInput: "",
    currentIdx: 1,
  };

  // 데이터 로딩
  componentDidMount() {
    fetch("http://localhost:8000/drinks")
      .then((res) => res.json())
      .then((res) => this.setState({ coffee: res }));
  }

  fetchCoffee = (e) => {
    const LIMIT = 10;
    const offset = e?.target.dataset.idx;

    fetch();
  };

  render() {
    const { coffee, currentIdx } = this.state;
    const { fetchCoffee } = this;

    return (
      <div className="Photos">
        <h1>Mini Project - Pagination</h1>
        <Buttons currentIdx={currentIdx} fetchCoffee={fetchCoffee} />
        <CardList coffee={coffee} />
      </div>
    );
  }
}

export default Coffee;
