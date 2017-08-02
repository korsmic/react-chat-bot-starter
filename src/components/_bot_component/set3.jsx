import React, { Component } from 'react';
import BotMessage from '../loc/bot_message'
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

        </GridList> 
      </div>
    </div>
  );
}

export default Set3;