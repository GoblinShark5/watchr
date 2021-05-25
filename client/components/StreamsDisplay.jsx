import React from 'react';
import './styles/StreamsDisplay.css';

const StreamsDisplay = ({streams}) => {
  const streamServices = [];

  if (streams[0]) {
    streamServices.push(<img
        src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
        alt="amazon"
      />);
  }

  if (streams[1]) {
    streamServices.push(<img
        src="https://logos-world.net/wp-content/uploads/2020/11/Hulu-Logo-2014-2017.png"
        alt="hulu"
      />);
  }

  if (streams[2]) {
    streamServices.push(<img
        src="https://cdn.vox-cdn.com/thumbor/QuS2QKQys3HhosKiV-2IuKhphbo=/39x0:3111x2048/1400x1050/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
        alt="netflix"
      />);
  }

  return (
    <div id="streams-container">
      {streamServices}
      {streamServices.length === 0 && <span>N/A</span>}
    </div>
  );
}

export default StreamsDisplay;
