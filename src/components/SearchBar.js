import React from "react";

class SearchBar extends React.Component {

  state = {term: ""};

  onFormSubmit=(e)=>{
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }


  render(){
    return(
      <div className = "ui segment">
      <form className = "ui form" onSubmit = {this.onFormSubmit}>
      <div className = "field">
      <label>Search images</label>
          <input
          type = "text"
          onChange = {(event)=>{this.setState({term: event.target.value})}}
          value = {this.state.term}
          />
      </div>
      </form>
      </div>
    )

  }
};

export default SearchBar;
