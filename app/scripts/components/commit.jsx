var React = require('react');

var Commit = React.createClass({

  render: function() {
    var cardClass = "card card-block";
    if (this.props.isNew) {
      cardClass += " animated bounceInDown";
    }
    return (
      <div className={cardClass}>
        <h5 className="card-title">{this.props.repoName}  <i className="fa fa-github" aria-hidden="true"></i></h5>
        <h6 className="card-subtitle text-muted">{this.props.repoOwner}</h6>
      </div>
    );
  }
});

module.exports = Commit;
