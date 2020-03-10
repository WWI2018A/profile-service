var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '1000mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '1000mb', extended: true}))

//connect to MongoDB
var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://dbUser:start123@todo-profilesvc-sprud.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(() => {
  console.log('Database connection successful')
})
.catch(err => {
  console.error('Database connection error')
  throw err;
})


app.get('/', function (req, res) {
  res.send('Hello World!');
});

const userRouter = require('./router/users');
app.use('/api/v1/profiles/', userRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


module.exports = app;