var React = require('react');

var Queue = require('./queue.jsx');

var Home = React.createClass({

  render: function() {

    return (
      <div className="container">
        <div className="row">
          <div className="col s5">
           <Queue></Queue>
          </div>
          <div className="col s7">
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
