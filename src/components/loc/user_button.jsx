import React, { Component } from 'react';
import $ from 'jquery';
// import RaisedButton from 'material-ui/RaisedButton';

class UserButton extends Component {
  constructor(props){
    super(props);

    this.onClick = this.onClick;
  }
  render(props) {
    return(
      <div className="chat-input">
        <button
          className={this.props.Uclass}
          title={this.props.Ustage}
          value={this.props.Uval} 
          name={this.props.botClick}
          onClick={this.props.handleClick}
          disabled={this.props.disabled3}
        > 
          {this.props.Uval}
        </button> 
      </div>
    );
  }
  componentDidMount() {
    $(function() {
      $('body').delay(1000).animate({
        scrollTop: $(document).height()
      },800);
    });
    $(function(){
			$('.chat-input button').each(function(){
				if($(this).css("opacity","0")) {
					$(this).delay(800).animate({opacity:0},'fast',function(){
						$(this).animate({opacity:1});
					});
				}else{
					return;
				}
			});
		});
  }
}
export default UserButton;