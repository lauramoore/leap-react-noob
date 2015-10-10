import React, {PropTypes} from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import LeapMotionStore from '../stores/LeapMotionStore';

function computeGradient(factor){
   return {
    background: 'linear-gradient(to right, ' 
                + 'rgba(239,195,206,1) 0%, ' 
                + 'rgba(185,39,76,1) 28%, '
                + 'rgba(168,20,60,1) 83%, '
                +'rgba(241,142,166,1) 100%)'
   };
}
export default React.createClass({
   _onChange() {
    this.setState({
      styles : computeGradient()
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
