import React from 'react';
import LeapMotionStore from '../stores/LeapMotionStore';
import ObjectInspector from 'react-object-inspector';
import Well from 'react-bootstrap/lib/Well';

export default React.createClass({
  
  _onChange() {
    //gets the current frame
    var frame = LeapMotionStore.getFrame();
    console.log(frame);
    this.setState({frame : LeapMotionStore.getFrame()});
    
  },

  componentDidMount() {
     LeapMotionStore.addChangeListener(this._onChange);
  },

  getInitialState() {
    return {};
  },

  render() {
    var displayableFrame = React.addons;
    return (
      <Well>
      <ObjectInspector data={this.state.frame} />
      </Well>
    );
  }
});
