var Reflux = require('reflux');
var API = require('../api');
var request = require('superagent');
var RefluxPromise = require('reflux-promise');
var Q = require('q');

Reflux.use(RefluxPromise(Q.Promise));

var CommiterActions = Reflux.createActions({
  "loadCommiters": { children: ['completed', 'failed'] },
  "loadCommitersUpdates": { children: ['completed', 'failed'] }
});

CommiterActions.loadCommiters.listen(function() {
  console.log("calling loadCommiters");
  request('GET', API.commiters)
  .then(CommiterActions.loadCommiters.completed, CommiterActions.loadCommiters.failed);
});

CommiterActions.loadCommitersUpdates.listen(function() {
  console.log("calling loadCommiters updates");
  request('GET', API.commiters_updates)
  .then(CommiterActions.loadCommitersUpdates.completed, CommiterActions.loadCommitersUpdates.failed);
});

module.exports = CommiterActions;
