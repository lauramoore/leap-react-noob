import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import LeapState from './LeapStatus.jsx';

export default React.createClass({
  propTypes: {
    hand: PropTypes.any.isRequired
  },

  getDefaultProps() {
    return {
      hand: false
    }
  },

  render() {
    let {hand} = this.props;
    var jumbotronMessage;
    if (hand) {
       jumbotronMessage = <p>TODO Show Hand Info</p>
    } else {
       jumbotronMessage = <p>Put Hand Over Leap Motion</p>
    }
    return (
      <div className="container">
        <Jumbotron>
          <h1>LeapMotion</h1>
          {jumbotronMessage}
        </Jumbotron>
        <LeapState />
      </div>
    );
  }
});
