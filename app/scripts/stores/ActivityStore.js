var Reflux = require('reflux');
var ActivityActions = require('../actions/ActivityActions');


var ActivityStore = Reflux.createStore({
  listenables: [ActivityActions],
  activity:{},

  init: function() {
    console.log('ActivityStore initialized');
    setInterval(function() {
    ActivityActions.loadActivity();
    }, 1500);
  },

  onLoadActivity: function() {
  },

  onLoadActivityCompleted: function(res) {
    var activity = JSON.parse(res.text);
    this.activity.num_commits = activity.num_commits;
    this.activity.lines_code = activity.lines_code;
    this.activity.num_repos = activity.num_repos;
    this.trigger(this.activity);
  }

});

module.exports = ActivityStore;
