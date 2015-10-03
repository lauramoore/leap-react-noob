import React from 'react';
import LeapMotionStore from '../stores/LeapMotionStore';
import ObjectInspector from 'react-object-inspector';
import Well from 'react-bootstrap/lib/Well';

export default React.createClass({
  
  _onChange() {
    //gets the current frame
    var frame = LeapMotionStore.getFrame();
    this.setState({frame : LeapMotionStore.getFrame(),
                   hands : LeapMotionStore.getHands()});
    
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
      <div>
        <Well>
          <ObjectInspector data={this.state.frame} />
        </Well>
        <Well>
           {this.state.hands}
        </Well>
      </div>
    );
  }
});
