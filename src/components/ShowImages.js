import React from "react";
import ImageCard from "./ImageCard";
import "./ShowImages.css";


const ShowImages = (props)=>{
  const mapingImage = props.images.map((image)=>{
    return <ImageCard  key = {image.id} image = {image} />
  })
  return(
    <div className = "image-list">
    {mapingImage}
    </div>
  )
}

export default ShowImages;
