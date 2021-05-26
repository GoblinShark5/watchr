/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './styles/StreamSelect.css';

class StreamSelect extends React.Component {
  render() {
    return (
      <div id="stream-checkbox-container">
        <div className="stream-checkbox">
          Amazon{' '}
          <input
            name="amazon"
            type="checkbox"
            onChange={this.props.onStreamChange}
            value={this.props.streamPrefs[0]}
          />
        </div>
        <div className="stream-checkbox">
          Hulu{' '}
          <input
            name="hulu"
            type="checkbox"
            onChange={this.props.onStreamChange}
            value={this.props.streamPrefs[1]}
          />
        </div>
        <div className="stream-checkbox">
          Netflix{' '}
          <input
            name="netflix"
            type="checkbox"
            onChange={this.props.onStreamChange}
            value={this.props.streamPrefs[2]}
          />
        </div>
      </div>
    );
  }
}

export default StreamSelect;
