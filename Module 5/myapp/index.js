const testRoute = require('./routes/myTestRoute');
const express = require("express");
const app = express(); //creates the web server
const app2 = express(); //creates the web server
const port = 3000;
const port2 = 4000;
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});
app.get('/test', (req, res) => {
    res.send('This is a test')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app2.get("/", (req, res) => {
    res.send("This is the second web server page");
})
app2.listen(port2, () => {
    console.log(`Example app 2 listening at http://localhost:${port2}`)
})

app.use('/', express.static('public'));

app.use('/mytest', testRoute);