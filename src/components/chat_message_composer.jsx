import React, { Component } from 'react';
import $ from 'jquery';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';

import BotMessage from './loc/bot_message';
import UserButton from './loc/user_button';
import Matrix3 from './loc/matrix3';


// _bot_component
import Set2 from './_bot_component/set2';
import Set3 from './_bot_component/set3';
import Set5 from './_bot_component/set5';
import SetAnswer from './_bot_component/setanswer';



class ChatMessageComposer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: 'start',
      message: []
    };
    this.sendMessage = this.sendMessage;
    this.recieveMessage = this.recieveMessage;
  }

  handleClick(event) {
    const BotMessages = event.target.name;
    const BotMessagesAry = BotMessages.split(',');

    switch(BotMessages) {
      case "set2":
        var BotMessagesProps = BotMessagesAry.map(function(x, index){
          return <Set2 key={`${x}-${index}`} index={`${x}-${index}`}/>;
        });
        break;
      case "set3":
        var BotMessagesProps = BotMessagesAry.map(function(x, index){
          return <Set3 key={`${x}-${index}`} index={`${x}-${index}`}/>;
        });
        break;
      case "set5":
        var BotMessagesProps = BotMessagesAry.map(function(x, index){
          return <Set5 key={`${x}-${index}`} index={`${x}-${index}`}/>;
        });
        break;        
      default:
        var BotMessagesProps = BotMessagesAry.map(function(x, index){
          return (
            <div className="bot-message" key={`${x}-${index}`}>
                <div className="message"> {x} </div>
            </div>
          );
        });
    }
    this.props.sendMessage.bind(this)({
      message: event.target.value,
      from: 'user'
    });
    this.setState.bind(this)({
      stage: event.target.title
    });
    this.props.recieveMessage.bind(this)({
      message: BotMessagesProps,
      from:'bot'
    });
 }

  render(){
    const stage = this.state.stage ;

    switch(stage) {
      case "start":
        return (
          <div className="startbox">
            <img src="./src/images/okami.jpg" alt=""/>
            <h3>Chat Bot</h3>
            <p>Hi there!</p>
            <div className="chat-input-box">
              <UserButton Uclass={"bgc"} Ustage={"0"} Uval={"宿を相談する"} handleClick={this.handleClick.bind(this)} botClick={["こんにちは。","私はBOTです。"]} />
            </div>
          </div>
        );

      case "0":
        return (
          <div className="chat-input-box">
            <UserButton Ustage={"1"} Uval={"OK!"} handleClick={this.handleClick.bind(this)} botClick={"set2"} />
          </div>
        );

      case "1":
        return (
          <div className="chat-input-box">
            <UserButton Ustage={"2"} Uval={"OK!"} handleClick={this.handleClick.bind(this)} botClick={"set2"} />
          </div>
        );

      case "2":
        return (
          <div className="chat-input-box">
            <UserButton Ustage={"4"} Uval={"OK!"} handleClick={this.handleClick.bind(this)} botClick={"set3"} />
          </div>
        );

      case "3":
        return (
          <div className="chat-input-box">
            <UserButton Ustage={"4"} Uval={"OK!"} handleClick={this.handleClick.bind(this)} botClick={"set3"} />
          </div>
        );
      
      case "4":
        return (
          <div className="chat-input-box">
            <UserButton Ustage={"5"} Uval={"イメージ8が好き"} handleClick={this.handleClick.bind(this)} botClick={["set5"]} />
          </div>
        );

      case "5":
        return (
          <div className="chat-input-box">
            <UserButton Ustage={"test"} Uval={"B"} handleClick={this.handleClick.bind(this)} botClick={["あなたの好みはバッチリわかりました。"]} />
          </div>
        );

      case "15":
        return (
          <div className="chat-input-box">
            <UserButton Ustage={"0"} Uval={"閉じる"} handleClick={this.handleClick.bind(this)} botClick={"...|ω・`）ﾁﾗ"} />
          </div>
        );

      default:
        return(
          <div className="chat-input-box">
            <UserButton Ustage={"0"} Uval={"最初に戻る"}
              handleClick={this.handleClick.bind(this)}
              botClick={"...暇だなぁ"}
            />
          </div>
        );
    }
  }

  componentDidMount(){
    $(function(){
			$('.chat-input button').each(function(){
				if($(this).css("opacity","0")) {
					$(this).delay(200).animate({opacity:0},'fast',function(){
            $(this).animate({opacity:1});
					});
				}else{
					return;
				}
			});
		});
  }
}
export default ChatMessageComposer;