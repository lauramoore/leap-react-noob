import React, {PropTypes} from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import LeapMotionStore from '../stores/LeapMotionStore';

function computeGradient(distance){
   console.log(distance);
   var length = 100;
   var  outside = (length - distance) / 2;
   var a = outside;
   var b = outside + distance;
   return {
    background: 'linear-gradient(to right, ' 
                + 'rgba(37,12,196,1) 0%, ' 
                + 'rgba(248,240,32,1) '+ a +'%, '
                + 'rgba(248,240,32,1) ' + b + '%, '
                +'rgba(37,12,196,1) 100%)'
   };
}
export default React.createClass({
   _onChange() {
    var handList = LeapMotionStore.getHands();
    if (! handList || handList.length < 2) return;
    var handSpread = Math.abs(handList[0].centerPoint[0] - handList[1].centerPoint[0]) * 100;
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
       styles : { background: 'white' }
    }
  },

  render() {
    return (
        <Jumbotron style={this.state.styles}>
        </Jumbotron>
    );
  }
});
