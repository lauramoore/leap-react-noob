import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import Leap from 'leapjs';


//Set up Controller to generate 60 frames per second
let controller = new Leap.Controller({frameEventName: 'animationFrame'});
//console.log(controller);

controller.on('connect', function(){
    console.log("Leap connected");
});
controller.on('disconnect', function(){
    console.log("Leap disconnected");
});
//Every frame grab data and generate Action via Dispatcher
function leapLoop(_frame){
   let handList = _frame.hands;
   if (handList.length > 0 ) {
     Dispatcher.handleViewAction({
       type: Constants.ActionTypes.NEW_HAND,
       hand: handList[0]
     });
   }
}
//Register the loop with the Leap Contoller
controller.on('frame', leapLoop);

//Create actions to start and stop controller
const LeapActions = {
  startLeap() {
    console.log("startLeap, calling connect controller");
    controller.connect();
  },
  
  stopLeap() {
    console.log("startLeap, calling disconnect controller");
    controller.disconnect();
  }
  
};

export default LeapActions;
