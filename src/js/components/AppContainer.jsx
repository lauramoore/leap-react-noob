import React from 'react';
import LeapState from './LeapStatus.jsx';
import DataDisplay from './DataDisplay.jsx';

export default React.createClass({
  
  render() {
    return (
      <div className="container">
      <div>
      <LeapState />
      <DataDisplay />
      </div>
      
      </div>
    );
    
  }
});
