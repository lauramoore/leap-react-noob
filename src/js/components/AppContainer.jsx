import React from 'react';
import LeapState from './LeapStatus.jsx';
import SliderPanel from './SliderPanel.jsx';
import GrabPanel from './GrabPanel.jsx';
import PixiPanel from './PixiPanel.jsx';

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
           <PixiPanel />
        </td>
      </tr>
      </table>
      </div>
    );
    
  }
});
