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

function sortHands(handsArray) {
  // return undefined if no array
  if (! handsArray) return;
  //if 0 or 1 hand, no sorting called for
  if (handsArray.length < 2) return handsArray;
  var sortedHands = handsArray.slice(0);

  return sortedHands.sort(
    function(a, b) {
      return a.centerPoint[0] - b.centerPoint[0];
    }   
  );

}

export default React.createClass({

  _onChange() {
    /**
     * Experiment : magic backwards hands....
     * Instead of sorting the hands by X position just 
     * use array straight from HandStore...  then hands
     * order in array is determined only by time in frame.
     * add right hand first, then left and your cats will be
     * backwards
     */
     //var hands = LeapMotionStore.getHands();
     var hands = sortHands(LeapMotionStore.getHands());
    this.setState({ hands: hands });
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
