import React from 'react';
//<h1>Image search engine</h1>
class Searchbox extends React.Component{
    constructor (props){
        super(props)
            this.state={entry:''}
        
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
    }
    render(){
        return(
            
                <div className='ui segement'>
                <form action="" onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                <div className='ui massive icon input'>
                <input type='text' placeholder='search here...'
                onChange={(event)=>
                this.setState({entry:event.target.value})}
                value={this.state.entry}/>
                <i className ='search icon'></i>
                
                </div>
                </div>
                </form>
                </div>
                
                
                    
                
            
        )
    }
}


export default Searchbox;