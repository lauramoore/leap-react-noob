import React from 'react';
import TodoStore from '../stores/TodoStore';
import HandStore from '../stores/HandStore';
import ActionCreator from '../actions/TodoActionCreators';
import App from './App.jsx';

export default React.createClass({
  _onChange() {
    this.setState(HandStore.getPitchYawRoll());
    console.log(this.state);
  },

  getInitialState() {
     return HandStore.getPitchYawRoll()
  },

  componentDidMount() {
    HandStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    HandStore.removeChangeListener(this._onChange);
  },


  
  render() {
    let {hand} = this.state;
    return (
      <App
        hand={hand} />
    );
  }
});
