var React = require('react');
var Reflux = require('reflux');
var CommitCard = require('./commit.jsx');
var CommiterStore = require('../stores/CommiterStore');


var Queue = React.createClass({

  mixins: [Reflux.connect(CommiterStore, 'commiters')],

  render: function() {
    console.dir(this.state);
    return (
      <div className="queue">
        <h4>Recent Commiters</h4>
        { this.state.commiters.map(function(commiter) {
          return <CommitCard repoName={commiter.repo.name} repoOwner={commiter.repo.owner}></CommitCard>
        })
        }
      </div>
    );
  }
});

module.exports = Queue;
