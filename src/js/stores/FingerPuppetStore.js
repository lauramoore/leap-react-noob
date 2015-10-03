import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage

let _puppet = undefined;

function FingerPuppet(hand){
    this.x = hand.palmPosition[0];
    this.y = hand.palmPosition[1];
    this.deltax = hand.palmVelocity[0];
    this.deltay = hand.palmVelocity[1];
}


/**
 * Converting Hand from Frame into the FingerPuppet Data
 * //When start tracking more than one hand, have to decide if id matters?
 */
function updateActivePuppets(handList) {
      if (handList.length == 0) return;
      var puppetPostion = Lepa.
      if (_puppet) {
          _puppet.delaty  = handList[0].palmVelocity[1];
          _puppet.deltax  = handList[0].palmVelocity[0];
      } else {
         _puppet = new FingerPuppet(handList[0]);
      }
};


const FingerPuppetStore = assign({}, BaseStore, {
  /**
   * Returns the Array of Finger Puppet Objects that 
   * track key drawing values for each puppet
   */
  getPuppets : function() {
    return _puppet;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;
    switch(action.type) {
      case Constants.ActionTypes.NEW_HAND:
          updateActivePuppets(payload.action.hand);
          FingerPuppetStore.emitChange(); 
        break;
    }
  })
  
});

export default FingerPuppetStore;
