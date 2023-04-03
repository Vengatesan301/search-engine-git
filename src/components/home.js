import React from 'react'
import SearchBox from './searchbox'
import ImageList from './ImageList'
import axios from 'axios'
//import Navbar from './Navbar'
//import About from './about'
 
class Home extends React.Component{ 
    constructor(props)
    {
    super(props)
    this.state={images:[]}
    this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }
   async onSearchSubmit(entry)
    {
     const response=await axios.get(`https://pixabay.com/api/?key=34875373-68e56975657e08a3b5c202a23&q=${entry}&image_type=photo&pretty=true`);
      console.log(response.data.hits);
      this.setState({images:response.data.hits})
    }
    render(){
    return(
     
       

      <div className='ui container' style={{marginTop:'30px'}}> 
      <SearchBox onSearchSubmit={this.onSearchSubmit}/>
     <ImageList images={this.state.images} />
      </div>
      
      
    )
    }
  }
 export default Home;