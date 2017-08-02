import React, { Component } from 'react';
import BotMessage from '../loc/bot_message'
import ImageSelect from '../loc/image_select';
import { GridList } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'spaceBetween',
    // overflowX: 'auto'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    // overflowX: 'auto',
  }
}

const Set3 = (props) => {
  return(
    <div key={props.index}>
      <BotMessage botmessage="以下から選んでください。" />
      <div className="image-select-Box2">
        <GridList style={styles.gridList} cols={2.2}> 
          <ImageSelect className="image-select" key="1" Uval="イメージ5" ImgSrc="./src/images/Q2_A.jpg" />
          <ImageSelect className="image-select" key="2" Uval="イメージ6" ImgSrc="./src/images/Q2_B.jpg" />
          <ImageSelect className="image-select" key="3" Uval="イメージ7" ImgSrc="./src/images/Q2_C.jpg" />
          <ImageSelect className="image-select" key="4" Uval="イメージ8" ImgSrc="./src/images/Q2_D.jpg" />
        </GridList> 
      </div>
    </div>
  );
}

export default Set3;