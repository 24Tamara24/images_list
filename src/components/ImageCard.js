import React from "react";

class ImageCard extends React.Component{
  constructor (props){
    super(props)

    this.state = {spans: 0}

    this.imgRef = React.createRef();
  };

setSpans = ()=>{
  const height = this.imgRef.current.clientHeight;
  const spans = Math.ceil(height/10 +1);

  this.setState({spans:spans});
}

componentDidMount(){
  this.imgRef.current.addEventListener("load", this.setSpans);
}

  render(){
    const {urls, description} = this.props.image;
    return(
      <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
      <img
      src = {urls.regular}
      alt = {description}
      ref = {this.imgRef}
      />
      </div>
    );
  }
}

export default ImageCard;
