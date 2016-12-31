var Reflux = require('reflux');
var ActivityActions = require('../actions/ActivityActions');


var ActivityStore = Reflux.createStore({
  listenables: [ActivityActions],
  activity = {},


  init: function() {
    console.log('ActivityStore initialized');
    ActivityActions.loadActivity();
  },

  onLoadActivity: function() {
  }

});

module.exports = ActivityStore;
