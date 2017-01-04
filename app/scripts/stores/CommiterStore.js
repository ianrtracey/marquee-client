var Reflux = require('reflux');
var CommiterActions = require('../actions/CommiterActions');


var CommiterStore = Reflux.createStore({
  listenables: [CommiterActions],
  commiters: [],

  init: function() {
    CommiterActions.loadCommiters();
    console.log('CommiterStore initialized');
    setInterval(function() {
      CommiterActions.loadCommiters();
    }, 1000);
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
  }

});

module.exports = CommiterStore;
