import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
//many views expect single hand, so track that here
let _firstHand = undefined;
//Some views can handle multiple hands, track that here.
let _handList = undefined;


// There are options here.  What if hand leaves frame?  do we keep last hand persistent
// or instead drop all hands?   Can store change events give hint as to type of change
// for example clear/wipe when views need to reset all data?
function updateHand(handList) {
  //trusting here that event senders only send in valid lists with at least one hand
  _handList = handList;
  _firstHand = handList[0];
}

// Facebook style store creation.
const HandStore = assign({}, BaseStore, {
  getPitchYawRoll() {
    if (_firstHand) {
		return {
		  pitch: _firstHand.pitch(),
		  yaw: _firstHand.yaw(),
		  roll: _firstHand.roll()
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
     if (_firstHand) {
        return {
          x : _firstHand.palmPosition[0], 
          y : _firstHand.palmPosition[1],
          z : _firstHand.palmPosition[2]
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
    console.log(action);
    switch(action.type) {
      case Constants.ActionTypes.NEW_HAND:
          updateHand(payload.action.hand);
          HandStore.emitChange(); 
        break;
    }
  })
  
});

export default HandStore;
