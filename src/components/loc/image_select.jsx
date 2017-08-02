import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';


const ImageSelect = (props) => {
  return(
    <GridTile
      title={props.Uval}
      value={props.Uval}
      titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
    >
      <img src={props.ImgSrc} />
    </GridTile>
  );
}

export default ImageSelect;