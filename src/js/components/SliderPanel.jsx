import React, {PropTypes} from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import LeapMotionStore from '../stores/LeapMotionStore';

function computeGradient(distance){
   var length = 100;
   var  outside = (length - distance) / 2;
   var a = outside;
   var b = outside + distance;
   return {
    background: 'linear-gradient(to right, ' 
                + 'rgba(239,195,206,1) 0%, ' 
                + 'rgba(185,39,76,1) '+ a +'%, '
                + 'rgba(168,20,60,1) ' + b + '%, '
                +'rgba(241,142,166,1) 100%)'
   };
}
export default React.createClass({
   _onChange() {
    var handList = LeapMotionStore.getHands();
    if (! handList || handList.length < 2) return;
    var handSpread = Math.abs(handList[0].centerPoint[0] - handList[1].centerPoint[0]);
    this.setState({
      styles : computeGradient(handSpread)
    });
  },

  componentDidMount() {
    LeapMotionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    LeapMotionStore.removeChangeListener(this._onChange);
  },

  getInitialState(){
    return {
       styles : { background: 'blue' }
    }
  },

  render() {
    return (
        <Jumbotron style={this.state.styles}>
        </Jumbotron>
    );
  }
});
