/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './styles/StreamSelect.css';

class StreamSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      amazon: false,
      hulu: false,
      netflix: false,
    };
    // Checked A refers to the Amazon streaming service
    // Checked N refers to the Netflix streaming service
    // Checked H refers to the Hulu streaming surface
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState((prev) => {
      const { name } = e.target;
      const value = !prev[name];

      return {
        ...prev,
        [name]: value,
      };
    });
  }

  render() {
    return (
      <div id="stream-checkbox-container">
        Amazon
        <input
          name="amazon"
          type="checkbox"
          onChange={this.handleChange}
          value={this.state.checkedH}
        />
        Hulu
        <input
          name="hulu"
          type="checkbox"
          onChange={this.handleChange}
          value={this.state.checkedA}
        />
        Netflix
        <input
          name="netflix"
          type="checkbox"
          onChange={this.handleChange}
          value={this.state.checkedN}
        />
      </div>
    );
  }
}

export default StreamSelect;
