var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');
var morgan = require('morgan')
app.use(morgan('tiny'));

//Necessary for external access
var cors = require('cors')
app.use(cors())

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
/*
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://193.196.54.199:27017/db_profile_service', {
    useNewUrlParser: true,
    user: 'profile_service_user',
    pass: 'wwi2018a'
}).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log('error connecting to the database' + err);
    process.exit();
});
*/

mongoose.connect('mongodb://profile_service_user:wwi2018a@193.196.53.122:27017/db_profile_service', {
  useNewUrlParser: true,
  keepAlive: true,
  socketTimeoutMS: 3600000,
  connectTimeoutMS: 3600000
})
.then(() => {
  console.log('Database connection successful')
})
.catch(err => {
  console.error('Database connection error')
  throw err;
})

// Mount location of the relativ path (stylesheets usw.) 
app.use(express.static(__dirname + '/public'));
// Root location of views.
app.set('views','./public/views');
// View Setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');




const userRouter = require('./router/users');
app.use('/profiles/', userRouter);

app.listen(3000, function () {
  console.log('Profile Service listening on port 3000!');
});


module.exports = app;