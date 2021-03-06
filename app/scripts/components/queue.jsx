var React = require('react');
var Reflux = require('reflux');
var CommitCard = require('./commit.jsx');
var CommiterStore = require('../stores/CommiterStore');


var Queue = React.createClass({

  mixins: [Reflux.connect(CommiterStore, 'commiters')],

  render: function() {
    return (
      <div className="queue">
        <h4>Recent Commiters</h4>
        { this.state.commiters.map(function(commiter) {
          var is_new = false;
          if ('is_new' in commiter) {
           is_new = true;
          }
          return <CommitCard repoName={commiter.repo.name} repoOwner={commiter.repo.owner} isNew={is_new} ></CommitCard>
        })
        }
      </div>
    );
  }
});

module.exports = Queue;
