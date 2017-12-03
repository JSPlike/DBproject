
//의존모듈 선언부분
var express = require('express');
var bodyParser = require('body-parser'); //post 모듈
var http = require('http');
var path = require('path');
var app = express();

//jade파일 형식을 보기좋게
app.locals.pretty = true;

//템플릿 엔진사용
app.set('views', './views');
app.set('view engine', 'jade');
//정적 파일(미들웨어)
//public directory로 지정
app.use(express.static('public'));
//post body-parser 연결(미들웨어))
app.use(bodyParser.urlencoded({ extended: false }));

//post방식
app.get('/form', function(req, res){
  res.render('form');
});
app.get('/form_receiver', function(req, res){
  res.send('Hello Get');
});
app.post('/form_receiver', function(req,res){
  var title = req.body.title;
  var des = req.body.description;
  res.send(title+','+des);
});

//쿼리 스트링
app.get('/topic/:id', function(req, res){
  var topics = [
    'Javascript is...',
    'Nodejs is...',
    'Express is...'
  ];

  var link = `
  <a href="/topic/0">Javascript</a><br>
  <a href="/topic/1">Nodejs</a><br>
  <a href="/topic/2">Express</a><br><br>
  ${topics[req.params.id]}
  `
  res.send(link);

});

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
