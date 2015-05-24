import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import Leap from 'leapjs';



let controller = new Leap.Controller({frameEventName: 'animationFrame'});
//console.log(controller);

controller.on('connect', function(){
    console.log("Leap connected");
});
controller.on('disconnect', function(){
    console.log("Leap disconnected");
});

function leapLoop(_frame){
   if (_frame.hands.length == 0 ) {
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.NO_HANDS
      });
      return;
   }
   console.log(_frame.hands[0]);
}
controller.on('frame', leapLoop);
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
