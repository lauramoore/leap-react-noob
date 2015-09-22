import React from 'react';
import PIXI from 'pixi.js';
import HandStore from '../stores/HandStore';

export default React.createClass({
   _onChange() {
   
  },

  getInitialState() {
     return {
    }
  },

  componentDidMount() {
     var renderer = new PIXI.CanvasRenderer(990, 330);
     var containerNode = React.findDOMNode(this.refs.pixiDiv);
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
     <div ref="pixiDiv"></div>
    );
  }
});