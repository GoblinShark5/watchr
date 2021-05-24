//renders movie display and stream display
import React from 'react';
import MainContainer from 'MainContainer.jsx'
import StreamDisplay from 'StreamDisplay.jsx'
class DisplayContainer extends React.Component{
constructor(){
 super();





}


render(){


    return(
        <div>
        <StreamDisplay />
        <MainContainer />
        </div>
    )
}
}

export default DisplayContainer;