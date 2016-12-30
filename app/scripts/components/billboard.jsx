var React = require('react');

var Billboard = React.createClass({

  render: function() {

    const chartWrapperStyle = { height: '70px'};
    return (
      <div className="card card-inverse card-primary">
        <div className="card-block pb-0">
        <h1 className="mb-0">{this.props.number}</h1>
        <p>{this.props.title}</p>
        </div>
        <div className="chart-wrapper px-1" style={chartWrapperStyle}>
        <canvas id="card-chart1" className="chart" height="70"></canvas>
        </div>
      </div>
    );
  }
});

module.exports = Billboard;
