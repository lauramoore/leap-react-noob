import React from 'react';
import LeapState from './LeapStatus.jsx';
import PitchTogglePanel from './PitchTogglePanel.jsx';
import SliderPanel from './SliderPanel.jsx';
import Tracker from './LeapTracker.jsx';

export default React.createClass({
  
  render() {
    return (
      <div className="container">
      <LeapState />
      <table>
      <tr>
        <td>
        <SliderPanel />
        <PitchTogglePanel />
        </td>
        <td>
           <Tracker />
        </td>
      </tr>
      </table>
      </div>
    );
    
  }
});
