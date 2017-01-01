var React = require('react');

var Queue = require('./queue.jsx');
var CommitCard = require('./commit.jsx');
var ActivityStore = require('../stores/ActivityStore');
var StatsContainer = require('../components/StatsContainer');

var Home = React.createClass({

  render: function() {
    return (
      <main className="main">
        <div className="container-fluid">
          <div className="animated fadeIn">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                 <Queue></Queue>
              </div>
              <StatsContainer></StatsContainer>
            </div>
          </div>
        </div>
      </main>
    );
  }
});

module.exports = Home;
