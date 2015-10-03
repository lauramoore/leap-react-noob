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
};

function convertPosition(hand, interactionBox){
  if (! hand) {
      return { x: 0, y:0, z:0 };
  } 
  /*
   * Putting axis names on the vectors that Leap SDK prefers
   */
   var palmNormalized = 
  return {
     x : hand.palmPosition[0],
     y : hand.palmPosition[1],
     z : hand.palmPosition[2]
  };
};

function convertGrab(hand){
  if (! hand) {
      return { strength: 0 };
  } 
  /*
   * Putting axis names on the vectors that Leap SDK prefers
   */
  return { strength: hand.grabStrength };
};

// Facebook style store creation.
const HandStore = assign({}, BaseStore, {
  /*
   * Get a Hand object
   * @param - handId (optional)
   *  IF no handId will return first Hand from handsList - with no promise from frame to
   *  frame that the same hand will be returned.  But if you are only tracking one hand 
   *  works fine
   *  IF handID
   *  uniqueId per tracked hand is provided by Leap,  this will stay persistent frame to
   *  frame and let you know when a hand enters or leaves frames.
   *  Otherwise hand can be postion in array?
   */
  getPosition: function(handId) {
    if (! handId) {
      return convertPosition(_firstHand);
    } else if ( _handList.length > handId ) {
       return convertPosition( _handList[handId]);
    } else  {
      return convertPosition(undefined);
    }
  },
  
  grabStrength: function(handId) {
    if (! handId) {
      return convertGrab(_firstHand);
    } else if ( _handList.length > handId ) {
       return convertGrab( _handList[handId]);
    } else  {
      return convertGrab(undefined);
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
