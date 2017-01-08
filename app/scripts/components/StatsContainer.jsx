var React = require('react');
var Reflux = require('reflux');
var ActivityStore = require('../stores/ActivityStore');
var Billboard = require('../components/Billboard');

var StatsContainer = React.createClass({

  mixins: [Reflux.connect(ActivityStore, 'activity')],

  render: function() {
    var num_repos, lines_code, num_commits, isLoading;
    if (this.state.activity) {
      num_repos = this.state.activity.num_repos;
      lines_code = this.state.activity.lines_code;
      num_commits = this.state.activity.num_commits;
      isLoading = false;
    } else {
      isLoading = true;
    }
    return (
    <div className="row">
      <div className="col-sm-6 col-lg-3">
      <Billboard isLoading={isLoading} number={num_repos} title={'Projects'}></Billboard>
      </div>
      <div className="col-sm-6 col-lg-3">
      <Billboard isLoading={isLoading} number={num_commits} title={'Commits'}></Billboard>
      </div>
      <div className="col-sm-6 col-lg-5">
      <Billboard isLoading={isLoading} number={lines_code} title={'Lines of Code'}></Billboard>
      </div>
    </div>
    );
  }
});

module.exports = StatsContainer;
