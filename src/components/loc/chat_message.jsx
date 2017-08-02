import React, { Component } from 'react';
import $ from 'jquery';


class ChatMessage extends Component {
  generateClasses(props) {
    if(this.props.message.from === 'bot') {
      return 'bot-message';
    } else {
      return 'user-message';
    }
  }
  render() {
    return(
      <div className={this.generateClasses()}>
        <div className="message">
          {this.props.message.message}
        </div>
      </div>
    );
  }
  componentDidMount(){
    $(function(){
      $('.message').each(function(){
        if(!$(this).hasClass("message_showed")) {
          $(this).addClass("message_showed");
          $(this).animate({opacity:0},'fast',function(){
            $(this).animate({opacity:1});
          });
        }else{
          return;
        }
      });
    });
  }
}

export default ChatMessage;