import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import TaskList from './TaskList.jsx';

var LeapState = React.createClass({
    
    render() {
      if (this.props.leapState === 0) {
        return(<p>state is off</p>);
      } else {
        return(<p>state is on</p>);
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
      tasks: [],
      leapState: 0
    }
  },

  render() {
    let {onAddTask, onClear, tasks, leapState} = this.props;
    return (
      <div className="container">
        <Jumbotron>
          <h1>Learning Flux</h1>
          <p>
            Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
            Most features are left unimplemented with clues to guide you on the learning process.
          </p>
        </Jumbotron>
        <LeapState leapState={leapState}/>
        <TaskList tasks={tasks} />

        <Button onClick={onAddTask} bsStyle="primary">Add New</Button>
        <Button onClick={onClear} bsStyle="danger">Clear List</Button>
      </div>
    );
  }
});
