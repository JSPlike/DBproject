**Node JS Study**
=============

1. node js 설치 및 모듈 연동
-------------




2. post방식과 Get방식
-------------

#### 2-1 Get방식
web브라우저에 어떠한 정보를 입력해서 필요한 정보를 가져오는 것은 get방식
쿼리 스트링을 줘서 쿼리에 맞는 필요한 정보를 가져오는 것도 get방식

get에서는 query를 넘겨준다
`
  req.query.[query_name];
`
#### 2-2 Post방식
우리가 우편을 보내는 것을 Post라고 하는데 우리가 web에서 필요한 정보만 가져오는 것이
아니라 우리의 데이터를 서버로 전송하는 방식도 사용하는데 사용자의정보를 서버에 넣어줄 때 사용하는 것이 바로 post방식이다.

post를 사용하는 이유는 정보를 넘길때 쿼리스트링이 나오지 않습니다. 즉 로그인을 할때 url에 넘어가는 데이터를 숨길때 post를 사용합니다.

post에서는 body형태로 넘겨준다.
`
  req.body.[query_name];
`
이때 body-parser라는 모듈을 사용해주어야 한다.

> $npm install body-parser --save

body-parser모듈은 가장 앞쪽에서 동작하면서 우리가 post방식의 전송을 사용할때 자동으로 모듈이 실행되어집니다. 그래서 post방식에서 body형태로 값이 넘어가도록 해줍니다.

> POST 동작 방식
> - post전송요청 -> body-parser모듈 실행 -> post방식의 전송요청 이해한다음 body라는 객체를 추가하여 body객체에 원하는 값을 넣어서 사용자에게 제공한다.
