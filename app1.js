const express = require('express');
const app = express();
const port = 3000;
// app.use(express.json()); 

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
});




let users = [
  { id: 'John fogel',  email: 'john@gmail.com',password : 123123},
  { id:'Josh cohen' ,  email: 'josh@gmail.com',password : 456456},
  { id: 'bob trump',  email: 'bob@gmail.com' ,password : 789789}
];


app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
    const usuId= users.filter((value) => req.params.id === value.id)[0];
    res.send(usuId)
  
});