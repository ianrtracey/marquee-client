var Reflux = require('reflux');

var ActivityActions = Reflux.createActions([
  'loadActivity': { children: ['completed', 'failed'] }
]);

module.exports = ActivityActions;
