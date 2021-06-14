import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';


// hangs all react components on the html root element
// Wrap App component in BrowserRouter to enable React Routing

ReactDOM.render(
<BrowserRouter>
    <MainContainer />
</BrowserRouter>,
document.getElementById('root'));
