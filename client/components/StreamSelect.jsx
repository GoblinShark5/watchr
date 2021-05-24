/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './styles/StreamSelect.css';

class StreamSelect extends React.Component {
  render() {
    return (
      <div id="stream-checkbox-container">
        Amazon
        <input
          name="amazon"
          type="checkbox"
          onChange={this.props.onStreamChange}
          value={this.props.streamPrefs[0]}
        />
        Hulu
        <input
          name="hulu"
          type="checkbox"
          onChange={this.props.onStreamChange}
          value={this.props.streamPrefs[1]}
        />
        Netflix
        <input
          name="netflix"
          type="checkbox"
          onChange={this.props.onStreamChange}
          value={this.props.streamPrefs[2]}
        />
      </div>
    );
  }
}

export default StreamSelect;
