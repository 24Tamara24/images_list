import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ShowImages from "./ShowImages";



class App extends React.Component{

  state = {images: []};

onSearchTerm = async (term) =>{
  const response = await axios.get("https://api.unsplash.com/search/photos",  {
    params: {query: term},
    headers: {
      Authorization: "Client-ID Q86gcT9zIVeTSGlrNXkh1hGZyD0HhRL7F_WqAp5n-jw"
    },
  });
  this.setState({images: response.data.results});
};

  render(){
    return(
      <div
      className = "ui container"
      style = {{marginTop: "15px"}}
      >
      <SearchBar onSubmit = {this.onSearchTerm}/>
       Found: {this.state.images.length} images
       <ShowImages images = {this.state.images} />
      </div>
    )
  }
};


export default App;
