import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';


class SetTest extends Component{

  constructor(props) {
    super(props);
    
  }


  render(){
    return(
      <div key={props.index}>
        <div key="ansewer1" className="bot-message">
          <div className="message">あなたにぴったりの宿はこちら</div>
        </div>
      </div>
    );
  }
}

export default SetTest;