var React = require('react');

var Queue = require('./queue.jsx');
var Billboard = require('./billboard.jsx')

var Home = React.createClass({

  render: function() {

    return (
      <main class="main">
        <div className="container-fluid">
          <div className="animated fadeIn">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                 <Billboard number={'90000'} title={'commits'}></Billboard>
              </div>
              <div className="col-sm-6 col-lg-3">
                 <Billboard number={'90000'} title={'commits'}></Billboard>
              </div>
              <div className="col-sm-6 col-lg-3">
                 <Billboard number={'90000'} title={'commits'}></Billboard>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
});

module.exports = Home;
