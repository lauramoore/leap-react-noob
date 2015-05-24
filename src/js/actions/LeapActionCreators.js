import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import Leap from 'leapjs';

console.log(Leap);
//var controller = new Leap.Controller({frameEventName: 'animationFrame'});
  //this.controller.on('frame', this.leapLoop);
  //this.controller.on('connect', function(){
    //  console.log("Leap connected");
  //});

export default {
  startLeap() {
    console.log("startLeap, calling connect controller");
    //this.controller.connect();
    //Dispatcher.handleViewAction({
      //type: Constants.ActionTypes.START_LEAP
    //});
  },
  
  stopLeap() {
    console.log("startLeap, calling disconnect controller");
    //this.controller.disconnect();
    //Dispatcher.handleViewAction({
      //type: Constants.ActionTypes.STOP_LEAP
    //});
  },
  
  leapLoop(_frame){
     console.log(_frame);
     //Dispatcher.handleViewAction({
      //type: Constants.ActionTypes.LEAP_LOOP,
      //frame : _frame;
    //});
  }

};
