import React, { Component } from 'react';
import BotMessage from '../loc/bot_message'
import ImageSelect from '../loc/image_select';
import { GridList } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowX: 'auto'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
  }
}

const Set2 = (props) => {
  return(
    <div key={props.index}>
      <BotMessage botmessage="以下から選んでください。" />
      {/* <ReactSwipe className="carousel"> */}
        <div className="image-select-Box2">
          <GridList style={styles.gridList} cols={2.2}> 
            <ImageSelect key="1" Uval="イメージ1" ImgSrc="./src/images/Q1_A.jpg" Ustage="3" />
            <ImageSelect key="2" Uval="イメージ2" ImgSrc="./src/images/Q1_B.jpg" Ustage="3" />
            <ImageSelect key="3" Uval="イメージ3" ImgSrc="./src/images/Q1_C.jpg" Ustage="3" />
            <ImageSelect key="4" Uval="イメージ4" ImgSrc="./src/images/Q1_D.jpg" Ustage="3" />
          </GridList> 
        </div>
      {/* </ReactSwipe> */}
    </div>
  );
}

export default Set2;