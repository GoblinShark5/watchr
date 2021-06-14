import React, { useState } from 'react';
import MovieInput from './MovieInput.jsx';
import DisplayContainer from './DisplayContainer.jsx';

//creates the HomePage react component rendered when a user is logged in or has just signed up
const HomePage = () => {
  const [posterUrl, setPosterUrl] = useState('https://image.tmdb.org/t/p/w342/1qELdgcbbDjlpDDRwdYTl2MzuVu.jpg'); 
  const [amazon, setAmazon] = useState(true);
  const [hulu, setHulu] = useState(true);
  const [netflix, setNetflix] = useState(true);

  //when user types a movie name into searchbar, checks availability on each streaming service and retrieves movie's poster
  const handleResponse = (data) => {
    data.amazon ? setAmazon(true) : setAmazon(false);
    data.hulu ? setHulu(true) : setHulu(false);
    data.netflix ? setNetflix(true) : setNetflix(false);
    setPosterUrl(data.poster);
  };

  return (
    <div id="homepage-container">
      <MovieInput onResponse={handleResponse}/>
      <DisplayContainer 
        posterUrl={posterUrl} 
        streams={[amazon, hulu, netflix]}
      />
    </div>
  );
};

export default HomePage;
