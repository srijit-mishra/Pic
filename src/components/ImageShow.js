function ImageShow(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.imageAlt} />
    </div>
  );
}

export default ImageShow;
