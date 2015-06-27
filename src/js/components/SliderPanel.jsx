import React, {PropTypes} from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import HandStore from '../stores/HandStore';

function computeGradient(factor){
   var minRed = 5;
   var maxRed = 95;
    //convert factor to percent of 95, floor at 5
    var redPartFactor = maxRed * (1 - (factor/100))
   var gradientParts = ['to right', 'red' ,'blue'];
   gradientParts[1] = 'red '+ redPartFactor + '%';
   console.log(gradientParts.join());
   return {
    background: 'linear-gradient(' + gradientParts.join() +')'
   };
}
export default React.createClass({
   _onChange() {
    
  },

  getInitialState() {
      return {
       yPos : 50
    }
  },

  componentDidMount() {
   
  },

  componentWillUnmount() {
   
  },

  getDefaultState() {
    
  },

  render() {
      var styles = computeGradient(this.state.yPos);
    
    return (

        <Jumbotron style={styles}>
          <h1>Demo Hand Position Tracking</h1>
          <p>Slide Hand Left and Right to change Gradient</p>
          <p> {this.state.yPos} </p>
        </Jumbotron>
    );
  }
});
