var express = require("express");
var app = express();
var routes = require("./routes/index");

app.use("/",routes);

app.set("views",__dirname+"/views");
app.set("view engine","jsx");
var expressReact = require("express-react-views");
app.engine("jsx",expressReact.createEngine());

var server = app.listen(8000,function(){
  console.log("Server statted listening at 8000")
});
