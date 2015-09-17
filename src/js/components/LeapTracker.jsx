import React from 'react';
import LeapDataPlotter from 'leapjs-plugins/utils/data-plotter/LeapDataPlotter';

var plotter;
export default React.createClass({
   _onChange() {
  },

  getInitialState() {
    return {};
  },

  componentDidMount() {
     var plotterOptions = { el: React.findDOMNode(this.refs.leapPlotCanvas) };
     plotter = new LeapDataPlotter.LeapDataPlotter( plotterOptions );
  },

  componentWillUnmount() {
  },

  getDefaultState() {
    return {
    }
  },

  render() {
    // call this once per frame per plot
    if(plotter) {
      plotter.plot('height', 1 , {
        precision: 3,
        units: 'mm'
      });
    };
    return (
     <canvas ref="leapPlotCanvas" height="100" width="200"></canvas>
    );
  }
});