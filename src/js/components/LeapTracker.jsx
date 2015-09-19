import React from 'react';
import LeapDataPlotter from 'leapjs-plugins/utils/data-plotter/LeapDataPlotter';
import HandStore from '../stores/HandStore';

var plotter;
export default React.createClass({
   _onChange() {
    var handPos = HandStore.getYPosition();
    if(plotter) {
       console.log(handPos);
      plotter.plot('height', handPos.x );
      plotter.update();
    };
  },

  getInitialState() {
     return {
    }
  },

  componentDidMount() {
     var plotterOptions = { el: React.findDOMNode(this.refs.leapPlotCanvas) };
     plotter = new LeapDataPlotter.LeapDataPlotter( plotterOptions );
     HandStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    HandStore.removeChangeListener(this._onChange);
  },

  getDefaultState() {
    return {
    }
  },

  render() {
    return (
     <canvas ref="leapPlotCanvas" height="100" width="200"></canvas>
    );
  }
});