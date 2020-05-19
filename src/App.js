import React, { Component } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import CardList from "./components/CardList/CardList";
import "./App.css";

/**********************************************************
  API 주소: https://jsonplaceholder.typicode.com/users

  1. 위 주소를 호출하여 데이터 로딩을 처리해주세요!
    - componentDidMount()
    - fetch
    - setState (monsters 에 저장)

  2. SearchBox 컴포넌트에 정의한 handleChange 메소드를 넘겨주고, 
     호출 시 인자로 들어오는 이벤트객체(e)를 활용해 userInput 으로 setState.

  3. 필터링 로직 구현 (filter 메소드 활용)
      여기서 비교 대상은 monster 객체의 name 값입니다.
      소문자로 바꾼 monster.name 값과 userInput값을 비교.
      filter 메소드가 반환하는 값을 변수에 저장 후 return 문 안에 CardList에 props로 전달
***********************************************************/

class App extends Component {
  state = {
    monsters: [],
    userInput: "",
  };

  // 데이터 로딩
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => this.setState({
        monsters : res
      }), () => console.log(this.state.monsters)).catch(err => console.log(err));
  };

  // SearchBox에 props로 넘겨줄 handleChange 메소드 정의
  handleChange = (e) => {
    this.setState({
      userInput : e.target.value
    });
  };

  render() {
    // 필터링 로직
    const { monsters, userInput } = this.state;
    const filtered = monsters.filter(monster => {
        // 검색했을 때 monster.name과 일치하는 것만 filter시키자.
        return monster.name.toLowerCase().indexOf(userInput) !== -1;
    });
    console.log(filtered);
 
    
    return (
      <div className="App">
        <h1>컴포넌트 재사용 연습!</h1>
          <SearchBox handleChange={this.handleChange}/> 
          <CardList monsters={filtered} />
      </div>
    );
  }
}

export default App;
