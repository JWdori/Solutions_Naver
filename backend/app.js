const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');


const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const testRouter = require('./routes/api/test');
const recommendRouter = require('./routes/api/recommend');
const viewRouter = require('./routes/api/view');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/build')));

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));

//db 연결
const models = require("./models");
// const initModels = require("./models/init-models")

models.sequelize.sync().then( (res) => {
  console.log("DB connected successful");
}).catch(err => {
  console.log(err);
})



app.use('/', indexRouter);
app.use('/api/test', testRouter);
app.use('/api/recommend', recommendRouter);
app.use('/api/view', viewRouter);

app.get("/*", (req, res) => {
  console.log(__dirname);
  // index.html 파일 응답
  res.sendFile(path.join(__dirname, "./public/build", "index.html"));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
