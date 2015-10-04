import React from 'react';
import LeapMotionStore from '../stores/LeapMotionStore';

function transformCat(hand) {
  if (! hand ) return;
  return {
     transform : 'rotate(' + -hand.roll + 'rad)'
  };
}

var Cat = React.createClass({
    render() {
    var styles = transformCat(this.props.hand);
    return (
      <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/109794/cat_2.png' style={styles} />
    );
  }
})

export default React.createClass({

  _onChange() {
    this.setState({ hands: LeapMotionStore.getHands() });
  },

  componentDidMount() {
     LeapMotionStore.addChangeListener(this._onChange);
  },

  getInitialState() {
    return {};
  },

  render() {
    if (! this.state.hands) {
      return (<div>Place a hand over Leap Motion</div>);
    }
    return (
      <div>
        {this.state.hands.map(function(hand) {
           return <Cat key={hand.key} hand={hand}/>;
        })}
      </div>
    );
  }
});
