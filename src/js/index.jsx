import React from 'react';
import AppContainer from './components/AppContainer.jsx';
//TODO - where to import this object? - import or it doesn't work
import LeapMotionStore from './stores/LeapMotionStore';

React.render(<AppContainer />, document.getElementById('main'));
