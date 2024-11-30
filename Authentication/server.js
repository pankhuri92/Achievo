const express = require('express');
const path = require('path');
// const cors = require('cors')
const app = express();
const PORT = 3000;

var connection = require('./database')

// app.use(cors());

// middleware
// app.use(express.json('application/json'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/app', require('./routers/appRouter.js'));

app.get("/", function(req, res){
  res.send("Server is up")
});


app.post("/validateLogin",function(req,res){
  console.log("server point");
  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error);
    } else {
      console.log('Connected to MySQL database!');
    }
  });
  console.log('body', req.body)
  let un=req.body.username;
  let p=req.body.password;
  // let sql=`SELECT * FROM user`;
  let sql=`SELECT * FROM user WHERE username="${un}" AND password="${p}"`;
  console.log(sql);
  connection.query(sql,(error,results) => {
    if (error)  res.status(401).send(error);
    else {
      console.log('results', results)
      if(results!=null && results?.length > 0){
        res.status(200).send({
          message: "Valid User",
          data: results
        });
      }
      else{
        res.send("Invalid User");
      }
    }
  })
  // connection.end();
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  
});