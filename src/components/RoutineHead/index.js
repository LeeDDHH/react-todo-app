import React, { Component } from 'react'
import './index.css';

export default class RoutineHead extends Component {
  render() {
      const {onToggle} = this.props;
    return (
      <div className="toggle center" onClick={() => onToggle()}>Routine</div>
    )
  }
}
