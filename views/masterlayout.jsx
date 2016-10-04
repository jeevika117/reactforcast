var React = require("react");
var MasterLayout = React.createClass({
  render: function(){
    return(
      <html>
        <head><title>this.props.name</title>
        </head>
        <body>
            {this.props.children}
        </body>
      </html>
  );
  }
}
);

module.exports = MasterLayout;
