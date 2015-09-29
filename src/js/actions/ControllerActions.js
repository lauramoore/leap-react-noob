import Constants from '../Constants';
import React, {PropTypes} from 'react';
import Dispatcher from '../Dispatcher';


module.exports = {

  startTracking : function(){ 
    Dispatcher.handleViewAction({
       type: Constants.ActionTypes.START_LEAP
    });
   },
   
  stopTracking : function(){
    Dispatcher.handleViewAction({
       type: Constants.ActionTypes.STOP_LEAP
    });
  }

};