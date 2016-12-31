var React = require('react');

var Queue = require('./queue.jsx');
var Billboard = require('./billboard.jsx')
var CommitCard = require('./commit.jsx');

var Home = React.createClass({

  render: function() {

    return (
      <main class="main">
        <div className="container-fluid">
          <div className="animated fadeIn">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                 <Queue></Queue>
              </div>
              <div className="col-sm-6 col-lg-3">
                 <Billboard number={'24'} title={'Projects'}></Billboard>
              </div>
              <div className="col-sm-6 col-lg-3">
                 <Billboard number={'19,000'} title={'Lines of Code'}></Billboard>
              </div>
              <div className="col-sm-6 col-lg-3">
                 <Billboard number={'1223'} title={'Commits'}></Billboard>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
});

module.exports = Home;
