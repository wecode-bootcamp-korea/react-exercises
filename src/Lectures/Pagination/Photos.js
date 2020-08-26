import React, { Component } from "react";
import Buttons from "./Components/Buttons";
import CardList from "./Components/CardList/CardList";
import "./Photos.scss";

/**********************************************************
  
  현재 http://localhost:3000/photos.json 에서 전체 데이터를 받아오고 있습니다
  
  하지만 데이터가 너무 많네요! 10개 씩 끊어서 보여주면 좋겠습니다.

  영상에서 공부한 offset, limit 개념을 활용하여 페이지네이션을 구현해주세요.

  - 데이터는 public/photos 폴더 내에 있는 json 파일을 활용해주세요.
  - limit는 10으로 고정되어 있고, offset을 바꿔가며 요청을 보낸다는 가정입니다.
  - 선택된 페이지의 버튼은 Buttons.scss에 준비된,
    selected 클래스명을 활용해 현재 페이지와 일치할 경우 스타일링 될 수 있도록 해주세요.

***********************************************************/

class Photos extends Component {
  state = {
    photos: [],
    userInput: "",
    currentIdx: 1,
  };

  // 데이터 로딩
  componentDidMount() {
    fetch("http://localhost:3000/photos.json")
      .then((res) => res.json())
      .then((res) => this.setState({ photos: res }));
  }

  idxHandler = (e) => {
    this.setState({ currentIdx: e.target.dataset.idx });
  };

  render() {
    const { photos, currentIdx } = this.state;
    const { idxHandler } = this;

    return (
      <div className="Photos">
        <h1>Mini Project - Pagination</h1>
        <Buttons currentIdx={currentIdx} idxHandler={idxHandler} />
        <CardList photos={photos} />
      </div>
    );
  }
}

export default Photos;
