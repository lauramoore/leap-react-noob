import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
  startLeap() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.START_LEAP
    });
  },
  
  stopLeap() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.STOP_LEAP
    });
  }

};
