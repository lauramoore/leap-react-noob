import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import Leap from 'leapjs';

//Private Data Methods to Interact with Leap Controller
// Leap Controller to record frames 60 per sec
let controller = new Leap.Controller({frameEventName: 'animationFrame'});
//Current or most recent recoded frame
let currentFrame = {};


//register default controller events for debugging.
controller.on('connect', function(){
    console.log("Leap connected");
});
controller.on('disconnect', function(){
    console.log("Leap disconnected");
});



// Facebook style store creation.
const LeapMotionStore = assign({}, BaseStore, {


 // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;
    switch(action.type) {
      case Constants.ActionTypes.START_LEAP:
        console.log("connecting to leap controller");
        controller.connect();
        break;
    case Constants.ActionTypes.STOP_LEAP:
        console.log("disconnecting from leap controller");
        controller.disconnect();
        break;
    }
    
  })

});

export default LeapMotionStore;
