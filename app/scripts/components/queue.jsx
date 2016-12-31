var React = require('react');
var CommitCard = require('./commit.jsx');

var Queue = React.createClass({

  render: function() {

    return (
      <div className="queue">
        <h4>Recent Commiters</h4>
        <CommitCard></CommitCard>
      </div>
    );
  }
});

module.exports = Queue;
