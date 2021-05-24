import React from 'react';

class MovieInput extends React.Component{
    constructor(props){
      super(props)
      this.state={
        movieInput: ''
      }
     this.handleOnMovieChange = this.handleOnMovieChange.bind(this)
    }
     handleOnMovieChange(e){
        e.preventDefault()
        this.setState({
           movieInput: e.target.value,
        })
    }
    render(){

        return(
         <form >
           <input type = 'text' onChange={this.handleOnMovieChange} value = {this.state.movieInput}/>
           <button onClick= {(e) =>e.preventDefault()}> Submit Movie </button>
         </form>
            
        )
    }
}




export default MovieInput