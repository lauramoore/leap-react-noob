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

function normalizeVector(array) {
     //point is an array of xyz
     return storedFrame.interactionBox.normalizePoint(array);

};


//Not sure if these belong here -- or better off as ActionCreator?
function handPostiions(){
   var handList = storedFrame.hands;
   
   if (handList.length > 0 ) {
      //extract only the palmPostion
      var hands = [];
      handList.forEach(function(hand, index){
         if (hand.valid) {
           hands.push( {
              //using stablized instead of palmPosition
              centerPoint : normalizeVector(hand.stabilizedPalmPosition),
              roll : hand.roll(),
              key : hand.id || index
            });
         };
      });
      return hands;
   }
 };

 function interactionBox() {
     return storedFrame.interactionBox;
 }

//Private Data Methods to Interact with Leap Controller
// Leap Controller to record frames 60 per sec
//screenPosition plugin 
let controller = new Leap.Controller({frameEventName: 'animationFrame'});
let storedFrame;


//register default controller events for debugging.
controller.on('connect', function(){
    console.log("Leap connected");
});
controller.on('disconnect', function(){
    console.log("Leap disconnected");
});

//Register the loop with the Leap Contoller
controller.on('frame', function(_frame) {
    if (! _frame.valid) return;
    storedFrame = _frame;
    interactionBox = _frame.interactionBox;
    LeapMotionStore.emitChange();
});

// Facebook style store creation.
const LeapMotionStore = assign({}, BaseStore, {
  getFrame() {
      return storedFrame;
  },
  getHands() {
    return handPostiions();

  },
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
