import React from "react";
import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList(props) {
  const renderedImages = props.images.map((image) => {
    return (
      <ImageShow
        key={image.id}
        imageUrl={image.urls.full}
        imageAlt={image.alt_description}
      />
    );
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
