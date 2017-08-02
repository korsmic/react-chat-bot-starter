import React, { Component } from 'react';
import BotMessage from '../loc/bot_message'
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

          </GridList> 
        </div>
      {/* </ReactSwipe> */}
    </div>
  );
}

export default Set2;