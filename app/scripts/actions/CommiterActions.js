var Reflux = require('reflux');
var API = require('../api');
var request = require('superagent');
var RefluxPromise = require('reflux-promise');
var Q = require('q');

Reflux.use(RefluxPromise(Q.Promise));

var CommiterActions = Reflux.createActions({
  "loadCommiters": { children: ['completed', 'failed'] }
});

CommiterActions.loadCommiters.listen(function() {
  request('GET', API.commiters)
  .then(CommiterActions.loadCommiters.completed, CommiterActions.loadCommiters.failed);
});

module.exports = CommiterActions;
