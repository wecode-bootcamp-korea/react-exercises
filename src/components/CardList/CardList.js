import React, { Component } from "react";
import "./CardList.css";
import Card from "../Card/Card";

/***********************************************************
  Card 컴포넌트를 import 한 뒤, props로 내려받은 데이터에 
  map 함수를 호출해 각각 다른 데이터를 가진 Card 컴포넌트들을 리턴해주세요!
  Card 컴포넌트에서 필요로 하는 데이터는 id, name, email 입니다.
***********************************************************/

class CardList extends Component {

  // name을 검색 했을 때, 맨 마지막 데이터만 새로 렌더링 해주면 되는데,
  // 그 위에 있는 컴포넌트도 렌더링 되는걸 방지해주는 라이플사이클 사용함.
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.monsters === this.props.monsters) {
        return false;
    }else {
        return true;
    }
}
  render() {
    const { monsters } = this.props
    console.log('CardList filltered: ', monsters);
    return (
      <div className="card-list">
        {
          monsters.map(monster => {
            return (
              <Card 
                key={monster.id}
                id={monster.id}
                name={monster.name}
                email={monster.email}
              />
            );
          })
        }
      </div>

      );
  }
}

export default CardList;
