import React, { Component } from 'react';
import Buttons from './Components/Buttons';
import CardList from './Components/CardList/CardList';
import './Users.scss';

/**********************************************************
  
  현재 https://node-pagnation.herokuapp.com/users 에서 전체 데이터를 받아오고 있습니다
  하지만 데이터가 너무 많네요! 20개 씩 끊어서 보여주면 좋겠습니다.
  offset, limit 개념을 활용하여 페이지네이션을 구현해주세요.
  
  - 백엔드에서 offset 과 limit 이라는 "키값"을 통해 데이터를 끊어서 보내줄 준비가 되어있습니다. 
  - 쿼리스트링을 사용해 limit와, offset을 바꿔가며 요청을 보내보세요.

  - 선택된 페이지의 버튼은 Buttons.scss에 준비된,
    selected 클래스명을 활용해 현재 페이지와 일치할 경우 스타일링 될 수 있도록 해주세요.

***********************************************************/

class Users extends Component {
  state = {
    users: [],
  };

  // 데이터 로딩
  componentDidMount() {
    fetch('https://node-pagnation.herokuapp.com/users')
      .then((res) => res.json())
      .then((res) => this.setState({ users: res.users }));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="Photos">
        <h1>Mini Project - Pagination</h1>
        <Buttons />
        <CardList users={users} />
      </div>
    );
  }
}

export default Users;
