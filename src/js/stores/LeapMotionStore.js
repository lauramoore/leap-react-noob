/****************************************************************
* LeapMotionStore handles the two Main objects in the Leap API and sending updates
* out to the other stores that provide more specific information for views
* @See Controller
* "The Controller class is your main interface to the Leap Motion Controller."
*  - https://developer.leapmotion.com/documentation/javascript/api/Leap.Controller.html#Controller
*
* @See Frame  
* " Each Frame object contains an instantaneous snapshot of the scene recorded by 
*   the Leap Motion controller. Hands, fingers, and tools are the basic physical entities 
*  tracked by the Leap Motion system."
*  - https://developer.leapmotion.com/documentation/javascript/api/Leap.Frame.html
*
*/
 

import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import Leap from 'leapjs';

//Not sure if these belong here -- or better off as ActionCreator?
function setHands(_handList){
  //I know doing these asserts will annoy some folks, #Keep Code Left
  //Update hands when we have a hand
  if ( ! _handList ) return;
  if (_handList.length == 0 )  return;
  //if we have handList let the world know about it
   Dispatcher.handleViewAction({
       type: Constants.ActionTypes.NEW_HAND,
       hand: _handList
   });
   //TODO - perhaps we also care about when all hands are gone? clearing stores?
 }

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

//Register the loop with the Leap Contoller
controller.on('frame', function(_frame) {
   setHands(_frame.hands);
   //TODO - additional data sets (Gestures, 
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
