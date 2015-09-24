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
   /**
    * Lifted from react-pixi to add Pixi to view
    */
  componentDidMount: function() {
    var props = this.props;
    
    var backgroundcolor = (typeof props.backgroundcolor === "number") ? props.backgroundcolor : 0x1099bb;
    var stage = new PIXI.Container();
    var renderer = PIXI.autoDetectRenderer(990,  330, 
                                           {view: React.findDOMNode(this.refs.pixiCanvas),
                                           backgroundColor : 0x1099bb});
                                           
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0xFFFF00);
    // set the line style to have a width of 5 and set the color to red
    graphics.lineStyle(5, 0xFF0000);

    // draw a rectangle
    graphics.drawRect(0, 0, 300, 200);

    stage.addChild(graphics);
    renderer.render(stage);
  },

  componentWillUnmount() {
    HandStore.removeChangeListener(this._onChange);
  },

  getDefaultState() {
  },
  
  render() {
   return (
     <canvas ref="pixiCanvas" height="990" width="330"></canvas>
    );
  }
});