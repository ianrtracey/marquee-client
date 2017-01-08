var React = require('react');

var Billboard = React.createClass({

  buildOdometer: function(numberField) {
    console.dir(numberField);
    this.odometer = new Odometer({
      el: numberField.getDOMNode(),
      value: 0
    });
  },

  componentDidMount: function() {
    console.log('building odometer');
    this.buildOdometer(this.numberField);
  },


  render: function() {

    var self = this;

    const chartWrapperStyle = { height: '70px'};
    return (
      <div className="card card-inverse card-primary">
        <div className="card-block pb-0">
        <h1 ref={(numberField) => { self.numberField = numberField}} className="mb-0 billboard-data">{this.props.number}</h1>
        <p className="billboard-label">{this.props.title}</p>
        </div>
        <div className="chart-wrapper px-1" style={chartWrapperStyle}>
        <canvas id="card-chart1" className="chart" height="70"></canvas>
        </div>
      </div>
    );
  }
});

module.exports = Billboard;
