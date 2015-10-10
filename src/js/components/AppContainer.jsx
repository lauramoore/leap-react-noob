import React from 'react';
import LeapState from './LeapStatus.jsx';
import DataDisplay from './DataDisplay.jsx';
import CatRotate from './CatRotate.jsx';
import SliderPanel from './SliderPanel.jsx';

export default React.createClass({
  
  render() {
    return (
      <div className="container">
      <div>
      <LeapState />
      <DataDisplay />
      <CatRotate />
      <SliderPanel />
      </div>
      
      </div>
    );
    
  }
});
