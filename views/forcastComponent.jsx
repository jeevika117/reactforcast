var React = require("react");
var http = require('http');
var request = require('request');
var ForcastCmponent = React.createClass({

  render:function(){
    return(
      <div>
          {this.state.weatherDetails}
      </div>
    );
  },
  getInitialState :function(){
    return {
    weatherDetails :"init state"
    };
  },
  componentWillMount:function(){
    var callback = function(response) {
    var data = '';
    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
     data += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
    //  console.log(data);
     console.log("state", this.state);
        this.state.weatherDetails =data;
        this.setState(this.state);
     }.bind(this));
    }.bind(this);
    http.get(
    {
        host: 'proxy2.wipro.com',
        port: 8080,
        path: 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=688a0aafe1976ffa245ea02fbc93296b'
    },callback).on('error', function(e) {
   console.log("Got error: " + e);
    })
  }
});

module.exports =ForcastCmponent;
