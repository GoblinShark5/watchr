import React from 'react';
import SignUpManager from './SignUpManager.jsx'
import MovieInput from './MovieInput.jsx'


class MainContainer extends React.Component{
    constructor(){
      super()
    }
    render(){
        return(
        <div>
            <SignUpManager />
            <MovieInput />
        </div>
        )
    }
}

export default MainContainer