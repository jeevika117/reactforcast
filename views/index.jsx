var React = require("react");
var DefLayout = require("./masterlayout");
var Forcast = require("./forcastComponent");
var ContainerComponent = React.createClass({
  render: function(){
    return(
    <DefLayout>
      <div><h1>Test React Component</h1></div>
      <Forcast></Forcast>
    </DefLayout>
    );
  }
}
);

module.exports =ContainerComponent;
