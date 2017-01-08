var Reflux = require('reflux');
var CommiterActions = require('../actions/CommiterActions');
var _ = require('underscore');


var CommiterStore = Reflux.createStore({
  listenables: [CommiterActions],
  commiters: [],

  init: function() {
    CommiterActions.loadCommiters();
    console.log('CommiterStore initialized');
    setInterval(function() {
      CommiterActions.loadCommitersUpdates();
    }, 500);
  },

  getInitialState: function() {
    return [];
  },

  onLoadCommiters: function() {
  },

  onLoadCommitersCompleted: function(res) {
    var commiters = JSON.parse(res.text);
    this.commiters = commiters;
    this.trigger(this.commiters);
  },

  onLoadCommitersUpdatesCompleted: function(res) {
    // we prepend new commiters to front of the array
    var new_commiters = JSON.parse(res.text);
    if (new_commiters.length > 0) {
      console.log(new_commiters);
      var current_commiters = this.commiters;
      _.each(new_commiters, function(commiter) {
       current_commiters.unshift(commiter);
       if (current_commiters.length > 5) {
          current_commiters.pop();
       }
      });
      console.log(current_commiters);
      this.commiters = current_commiters;
      this.trigger(this.commiters);
    }
  }

});

module.exports = CommiterStore;
