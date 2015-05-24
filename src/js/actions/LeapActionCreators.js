import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import Leap from 'leapjs';



let controller = new Leap.Controller({frameEventName: 'animationFrame'});
console.log(controller);
  //this.controller.on('frame', this.leapLoop);
controller.on('connect', function(){
    console.log("Leap connected");
});
controller.on('disconnect', function(){
    console.log("Leap disconnected");
});
function leapLoop(_frame){
}
const LeapActions = {
  startLeap() {
    console.log("startLeap, calling connect controller");
    controller.connect();
    //Dispatcher.handleViewAction({
      //type: Constants.ActionTypes.START_LEAP
    //});
  },
  
  stopLeap() {
    console.log("startLeap, calling disconnect controller");
    controller.disconnect();
    //Dispatcher.handleViewAction({
      //type: Constants.ActionTypes.STOP_LEAP
    //});
  },
  
  leapLoop(_frame){
     console.log(["leapLoop", _frame]);
  }
  
};

export default LeapActions;
