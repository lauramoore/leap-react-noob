import React from 'react';
import LeapMotionStore from '../stores/LeapMotionStore';
import ObjectInspector from 'react-object-inspector';
import Well from 'react-bootstrap/lib/Well';
import Label from 'react-bootstrap/lib/Label';

var HandData = React.createClass({

   render() {
      var keyStyles = {}
      return(<li><Label>{this.props.hand.key}</Label>{this.props.hand.roll}</li>);
   }
});

var HandList = React.createClass({
   render() {
      if (! this.props.hands) return(<div>No Hands</div>);
      return (
      <ol>
        {this.props.hands.map(function(hand) {
           return <HandData key={hand.key} hand={hand}/>;
        })}
      </ol>
      );
   }
});

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
            <HandList hands={this.state.hands} />
        </Well>
      </div>
    );
  }
});
