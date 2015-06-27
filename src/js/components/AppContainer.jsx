import React from 'react';
import LeapState from './LeapStatus.jsx';
import PitchTogglePanel from './PitchTogglePanel.jsx';
import SliderPanel from './SliderPanel.jsx';

export default React.createClass({
  
  render() {
    return (
      <div className="container">
      <LeapState />
      <SliderPanel />
      <PitchTogglePanel />
      </div>
    );
    
  }
});
