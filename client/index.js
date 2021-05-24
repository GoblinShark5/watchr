import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <h1>Hello there</h1>;

ReactDOM.render(<App />, document.getElementById('root'));

const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/search/basic',
  params: {
    country: 'us',
    service: 'netflix',
    type: 'movie',
    genre: 'ç`',
    page: '1',
    language: 'en',
  },
  headers: {
    'x-rapidapi-key': 'e0d178da4amsh91f0fb94afc02adp192ddbjsn3dcf07dc4de5',
    'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
  },
};
axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

export default App;
