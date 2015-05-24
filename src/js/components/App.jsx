import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import TaskList from './TaskList.jsx';

var LeapState = React.createClass({
  propTypes: {
    leapState: PropTypes.oneOf(["OFF","ON"])
   },
   
   getInitialState: function () {
    return {
      leapState : "OFF"
    };
  },

  handleLeapStart(){ 
    console.log("start leap");
    this.setState({leapState : "ON"});
   },
  handleLeapStop(){
    console.log("stop leap");
    this.setState({leapState:"OFF"});
  },
  render() {
      if (this.state.leapState === "ON") {
        return(<Button onClick={this.handleLeapStop} bsStyle="danger">Stop</Button>);
      } else {
        return(<Button onClick={this.handleLeapStart} bsStyle="primary">Start</Button>);
      }
    }
});

export default React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      tasks: []
    }
  },

  render() {
    let {onAddTask, onClear, tasks} = this.props;
    return (
      <div className="container">
        <Jumbotron>
          <h1>Learning Flux</h1>
          <p>
            Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
            Most features are left unimplemented with clues to guide you on the learning process.
          </p>
        </Jumbotron>
        <LeapState />
        <TaskList tasks={tasks} />

        <Button onClick={onAddTask} bsStyle="primary">Add New</Button>
        <Button onClick={onClear} bsStyle="danger">Clear List</Button>
      </div>
    );
  }
});
