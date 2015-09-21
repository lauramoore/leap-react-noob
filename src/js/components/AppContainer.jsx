import React from 'react';
import LeapState from './LeapStatus.jsx';
import SliderPanel from './SliderPanel.jsx';
import GrabPanel from './GrabPanel.jsx';
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
        </td>
      </tr>
      <tr>
        <td>
        <GrabPanel />
        </td>
      </tr>
      <tr>
        <td>
           <Tracker />
        </td>
      </tr>
      </table>
      </div>
    );
    
  }
});
