import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';

class AnswerCard extends Component {
  constructor(props) {
    super(props);

  };
	
	render(props) {
		return(
			<div>
				<Card>
					<CardMedia
						overlay={
							<CardTitle
							title={props.yName}
							subtitle={props.yText}
							/>
						}
					>
						<img src={props.yImagePath} />
					</CardMedia>
				</Card>
			</div>
		);
	}

}

export default AnswerCard;

