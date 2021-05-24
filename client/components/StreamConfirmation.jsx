import React from 'react';

class StreamConfirmation extends React.component{
    constructor(){
        super();
        this.state= {
            checkedA: false,
            checkedN: false,
            checkedH: false,
        };
//Checked A refers to the Amazon streaming service
//Checked N refers to the Netflix streaming service
//Checked H refers to the Hulu streaming surface
this.HandleOnCheckA = this.HandleOnCheckA.bind(this);
this.HandleOnCheckN = this.HandleOnCheckN.bind(this);
this.HandleOnCheckH = this.HandleOnCheckH.bind(this);
    }
    HandleOnCheckA = (e) =>{
        this.setState =({
            checkedA: true,
        })
      };
      HandleOnCheckH = (e) =>{
        this.setState =({
            checkedH: true,
        })
      };
    HandleOnCheckN=(e)=>{
        this.setState = ({
            checkedN: true
        })
  };
    render(){
        return(
         <div>
         <input type='checkbox' onClick={this.HandleOnCheckH} value={this.state.checkedH}/>
         <input type='checkbox' onClick={this.HandleOnCheckA} value={this.state.checkedA}/>
         <input type='checkbox' onClick={this.HandleOnCheckN} value={this.state.checkedN}/>
         </div>
        );
    }
};

export default StreamConfirmation;