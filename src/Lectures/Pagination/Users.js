import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Buttons from "./Components/Buttons";
import CardList from "./Components/CardList/CardList";
import "./Users.scss";

/**********************************************************
  
  현재 https://node-pagnation.herokuapp.com/users 에서 전체 데이터를 받아오고 있습니다
  하지만 데이터가 너무 많네요! 20개 씩 끊어서 보여주면 좋겠습니다.
  offset, limit 개념을 활용하여 페이지네이션을 구현해주세요.
  
  - 백엔드에서 offset 과 limit 이라는 "키값"을 통해 데이터를 끊어서 보내줄 준비가 되어있습니다. 
  - 쿼리스트링을 사용해 limit와, offset을 바꿔가며 요청을 보내보세요.

  - 선택된 페이지의 버튼은 Buttons.scss에 준비된,
    selected 클래스명을 활용해 현재 페이지와 일치할 경우 스타일링 될 수 있도록 해주세요.

***********************************************************/

const LIMIT = 20;
//limit은 여러 곳에서 사용되므로 -> 나중의 유지보수를 위해 상수 데이터로 컴포넌트 밖에서 선언!

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  //{pathname: '/pagination', search: '?limit=20&offset=40', hash: '', state: null, key: 'r53bbzun'}

  // 데이터 로딩
  useEffect(() => {
    // fetch(`http://localhost:8000/users${location.search}`)
    fetch(
      `http://localhost:8000/users${
        location.search || `?limit=${LIMIT}&offset=0`
      }`
    )
      //이렇게 작성하면, 첫 화면(/pagenation)에서도 20번까지 뜬다
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
    // .then((res) => console.log(res));
  }, [location.search]);

  const updateOffset = (buttonIndex) => {
    // console.log("updateOffset");
    console.log(buttonIndex); //1번 버튼을 누르면 0을 출력, 2번 -> 1을

    // const limit = 20; //내가 화면에 그려줄 데이터의 개수를 의미
    const offset = buttonIndex * LIMIT; //offset은 그 개수의 시작점
    console.log(offset);

    //'?'는 queryString의 시작을 나타냄
    const queryString = `?limit=${LIMIT}&offset=${offset}`;
    console.log(queryString);

    navigate(queryString);
    // navigate(`/monsters/detail?limit=${limit}&offset=${offset}`);
    // queryString을 사용할 때는 '/monsters/detail' 이 부분이 생략되는데
    // 적어주지않으면 현재의 url 위로 자동으로 들어간다
  };

  return (
    <div className="photos">
      <h1>Mini Project - Pagination</h1>
      <Buttons updateOffset={updateOffset} />
      <CardList users={users} />
    </div>
  );
}

//pagination의 문제점은 첫 화면(/pagenation)에서 100번까지 모두 뜬다는 것!
