var Reflux = require('reflux');
var API = require('../api');
var request = require('superagent');
var RefluxPromise = require('reflux-promise');
var Q = require('q');

Reflux.use(RefluxPromise(Q.Promise));

var ActivityActions = Reflux.createActions({
  "loadActivity": { children: ['completed', 'failed'] }
});

ActivityActions.loadActivity.listen(function() {
  request('GET', API.activity)
  .then(ActivityActions.loadActivity.completed, ActivityActions.loadActivity.failed);
});

module.exports = ActivityActions;
