var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Necessary for reading request bodies
app.use(bodyParser.json({limit: '1000mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '1000mb', extended: true}))

//connect to MongoDB
//Define Mongoose
var mongoose = require('mongoose');

//Set new Parameters for Deprecation Warning
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//Connect to specific Cluster
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
  console.log('Profile Service listening on port 3000!');
});


module.exports = app;