import React from 'react';
import PIXI from 'pixi.js';
import FingerPuppetStore from '../stores/FingerPuppetStore';

 let stage = new PIXI.Container();
 let renderer = {};

function drawPuppet(puppet) {
   var graphics = new PIXI.Graphics();
    graphics.beginFill(0xFFFF00);
    // set the line style to have a width of 5 and set the color to red
    graphics.lineStyle(5, 0xFF0000);

    // draw a rectangle
    graphics.drawRect(puppet.x, puppet.y, 90, 180);
    return graphics;
}

export default React.createClass({
   _onChange() {
      var puppets = FingerPuppetStore.getPuppets();
      console.log("puppets to draw " + puppets.length);
      for (var i = puppets.length - 1; i >= 0; i--) {
          stage.addChild(drawPuppet(puppets[i]));
      };
      renderer.render(stage);
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
    renderer = PIXI.autoDetectRenderer(props.width,  props.height, 
                                           {view: React.findDOMNode(this),
                                           backgroundColor : 0x1099bb});
                                           
    renderer.render(stage);
    FingerPuppetStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    FingerPuppetStore.removeChangeListener(this._onChange);
  },

  getDefaultState() {
  },
  
  render() {
   return (
     <canvas height={this.props.height} width={this.props.width}></canvas>
    );
  }
});