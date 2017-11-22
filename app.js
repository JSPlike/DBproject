
//선언부분
var express = require('express');
var app = express();

//jade파일 형식을 보기좋게
app.locals.pretty = true;

//템플릿 엔진사용
app.set('views', './views');
app.set('view engine', 'jade');


//정적 파일(미들웨어)
//public directory로 지정
app.use(express.static('public'));


//views 라우터 부분
//express api 원리 알기
app.get('/template', function(req, res){
    res.render('index', {time:Date(), _title:'Jade'});
});

//라우터 부분(TEST)
app.get('/', function(req, res){
    res.send('<h1>Hello JoonYoung</h1>');

});

app.get('/login', function(req, res){
    res.send('Login please');
});


//연결 완료 메시지
app.listen(3000, function(){
    console.log('Connected 3000 port!!')

});
