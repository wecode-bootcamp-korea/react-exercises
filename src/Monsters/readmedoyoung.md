10/13 10:27 클론받은거 npm start확인

///

fetch('api주소',{
method:"post",
headers:{
'Content-Type':
'application/json;charset=utf-8',
},
body:JSON.stringify({
id:"hellofdfas@naver.com",
pw:123455
})

}).then((response) => response.json())
.then((data) => console.log(data));

//개발자도구-네트워크-fetch/xhr에서 뭘봐 ??? 헤더 페이로드 미리보기 응답 .. 이런거 어케봄?
