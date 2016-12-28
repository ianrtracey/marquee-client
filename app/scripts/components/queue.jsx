var React = require('react');
var Commit = require('./commit.jsx');

var Queue = React.createClass({

  render: function() {

    return (
      <div className="queue">
        <h4>Recent Commiters</h4>
        <Commit></Commit>
      </div>
    );
  }
});

module.exports = Queue;
