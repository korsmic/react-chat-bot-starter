import React, { Component } from 'react';
// import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';

class StarCard extends Component {
  constructor(props) {
    super(props);

  };
	
	render(props) {
		return(
			<div className="start_box">
        <h3>Yadoken AI</h3>
        <div className="start_images">
          <img src="../src/images/okami.jpg" />
        </div>
			</div>
		);
	}

}

export default AnswerCard;

