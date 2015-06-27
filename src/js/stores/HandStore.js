import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _hand = undefined;

// add private functions to modify data
function updateHand(hand) {
  _hand = hand;
}

// Facebook style store creation.
const HandStore = assign({}, BaseStore, {
  getPitchYawRoll() {
    if (_hand) {
		return {
		  pitch: _hand.pitch(),
		  yaw: _hand.yaw(),
		  roll: _hand.roll()
		};
	} else {
	   return {
		  pitch: 0,
		  yaw: 0,
		  roll: 0
		};
	}
  },
  
  getYPosition(){
     if (_hand) {
        return {
          x : _hand.palmPosition[0], 
          y : _hand.palmPosition[1],
          z : _hand.palmPosition[2]
        }
     }
       return {
          x : 0, 
          y : 0,
          z : 0
        }
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.NEW_HAND:
          updateHand(payload.action.hand);
          HandStore.emitChange();
        break;
    }
  })
  
});

export default HandStore;
