import React from 'react';
import LeapMotionStore from '../stores/LeapMotionStore';

function transformCat(hands) {
  if (! hands || hands.length == 0) return;
  var hand = hands[0];
  return {
     transform : 'rotate(' + -hand.roll + 'rad)'
  };
}

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
    var styles = transformCat(this.state.hands);
    return (
      <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/109794/cat_2.png' style={styles} />
    );
  }
});
