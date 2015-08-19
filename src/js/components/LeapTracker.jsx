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
    plotter = new LeapDataPlotter.LeapDataPlotter(React.findDOMNode(this));
  },

  componentWillUnmount() {
  },

  getDefaultState() {
    return {
    }
  },

  render() {
    if (plotter) {
       plotter.plot("tbd", 1);
    }
    return (
      <div>todo?</div>
    );
  }
});