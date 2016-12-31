var React = require('react');

var Commit = React.createClass({

  render: function() {

    return (
      <div className="card card-block">
        <h5 className="card-title">marquee  <i className="fa fa-github" aria-hidden="true"></i></h5>
        <h6 className="card-subtitle text-muted">ianrtracey</h6>
      </div>
    );
  }
});

module.exports = Commit;
