import React from 'react';
import LeapState from './LeapStatus.jsx';
import PitchTogglePanel from './PitchTogglePanel.jsx';

export default React.createClass({
  
  render() {
    return (
      <div className="container">
      <LeapState />
      <PitchTogglePanel />
      </div>
    );
    
  }
});
