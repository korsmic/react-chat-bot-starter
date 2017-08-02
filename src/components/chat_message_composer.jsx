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
      message: [],
      yData: {
        yID: "",
        yImagePath: "",
        yName: "",
        yText: "",
        disabled3: true
      }

    };
    this.sendMessage = this.sendMessage;
    this.recieveMessage = this.recieveMessage;
    this.getYadData = this.getYadData;
  }
  
  // matrix3からyDataを受け取る
  yDataSend(event) {
    this.setState({
      yData: this.refs.ChildComponent.yDataSend()
    });
    console.log('setState Done!');
  }

  handleClick(event) {
    const BotMessages = event.target.name;
    const BotMessagesAry = BotMessages.split(',');

    switch(BotMessages) {
      case "answer":
        const yName = this.state.yData.yName;
        const yText = this.state.yData.yText;
        const yImagePath = this.state.yData.yImagePath;
        var BotMessagesProps = BotMessagesAry.map(function(x, index){
          return (
            <div key={`${x}-${index}`}>
              <BotMessage botmessage="あなたにぴったりの宿はこちら" />
              <Card>
                <CardMedia overlay={
                  <CardTitle
                    title={yName}
                    subtitle={yText}
                  />
                }>
                  <img src={yImagePath} />
                </CardMedia>
              </Card>
            </div>
          );
        });
        break;
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
        // 通常のメッセージを返す
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
            <h3>Yadoken Hanako</h3>
            <p>correct answer rate</p>
            <div className="rate">
              <i className="material-icons">star</i>
              <i className="material-icons">star</i>
              <i className="material-icons">star</i>
              <i className="material-icons">star_half</i>
              <i className="material-icons">star_border</i>
            </div>
            <div className="chat-input-box">
              <UserButton Uclass={"bgc"} Ustage={"0"} Uval={"宿を相談する"} handleClick={this.handleClick.bind(this)} botClick={["こんにちは。","私は人工知能のAiコンシェルジュです。あなただけにぴったりの宿をお探しします。","まずはあなたの感性をお調べしていきますね。","画像を見て、直感的に好きな宿をひとつずつ選んでください。"]} />
            </div>
          </div>
        );

      case "0":
        return (
          <div className="chat-input-box">
            <UserButton Ustage={"2"} Uval={"OK!"} handleClick={this.handleClick.bind(this)} botClick={"set2"} />
            <UserButton Uclass={"bgc"} Ustage={"test"} Uval={"AWS"} handleClick={this.handleClick.bind(this)} botClick={["あなたの好みはバッチリわかりました。","今回宿泊したい宿のイメージにこれから挙げる言葉はどの程度重要ですか？","バーを調整してあなたの好みを設定してください。","「左：重要」「右：重要でない。」","中央には、重要度の数字が入ります。"]} />
          </div>
        );

      case "test": 
        return (
          <div>
            <div className="chat-output">
              <Matrix3 key="test2" ref="ChildComponent" />
              <div className="bot-message">
                <BotMessage botmessage="読み込みが終わりましたら、↓②更新をクリックしてください。" />
              </div>
              <div className="setstate-button">
                <RaisedButton fullWidth={true} label="②更新" primary={true}
                onClick={this.yDataSend.bind(this)}
                />
              </div>
            </div>
            <div className="chat-input-box">
              <div className="chat-input">
                <UserButton Ustage={"15"} Uval={"回答を見る"} handleClick={this.handleClick.bind(this)} botClick={"answer"} disabled3={this.state.yData.disabled3}/>
              </div>
            </div>
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
            <UserButton Ustage={"3"} Uval={"イメージ1が好き"} handleClick={this.handleClick.bind(this)} botClick={["わかりました。次の質問です。","もう一度、直感的に好きな宿をひとつ選んでください。"]} />
            <UserButton Ustage={"3"} Uval={"イメージ2が好き"} handleClick={this.handleClick.bind(this)} botClick={["わかりました。次の質問です。","もう一度、直感的に好きな宿をひとつ選んでください。"]} />
            <UserButton Ustage={"3"} Uval={"イメージ3が好き"} handleClick={this.handleClick.bind(this)} botClick={["わかりました。次の質問です。","もう一度、直感的に好きな宿をひとつ選んでください。"]} />
            <UserButton Ustage={"3"} Uval={"イメージ4が好き"} handleClick={this.handleClick.bind(this)} botClick={["わかりました。次の質問です。","もう一度、直感的に好きな宿をひとつ選んでください。"]} />
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
            <UserButton Ustage={"5"} Uval={"イメージ5が好き"} handleClick={this.handleClick.bind(this)} botClick={["set5"]} />
            <UserButton Ustage={"5"} Uval={"イメージ6が好き"} handleClick={this.handleClick.bind(this)} botClick={["set5"]} />
            <UserButton Ustage={"5"} Uval={"イメージ7が好き"} handleClick={this.handleClick.bind(this)} botClick={["set5"]} />
            <UserButton Ustage={"5"} Uval={"イメージ8が好き"} handleClick={this.handleClick.bind(this)} botClick={["set5"]} />
          </div>
        );

      case "5":
        return (
          <div className="chat-input-box">
            <UserButton Ustage={"test"} Uval={"A"} handleClick={this.handleClick.bind(this)} botClick={["あなたの好みはバッチリわかりました。","今回宿泊したい宿のイメージにこれから挙げる言葉はどの程度重要ですか？","バーを調整してあなたの好みを設定してください。","「左：重要」「右：重要でない。」","中央には、重要度の数字が入ります。"]} />
            <UserButton Ustage={"test"} Uval={"B"} handleClick={this.handleClick.bind(this)} botClick={["あなたの好みはバッチリわかりました。","今回宿泊したい宿のイメージにこれから挙げる言葉はどの程度重要ですか？","バーを調整してあなたの好みを設定してください。","「左：重要」「右：重要でない。」","中央には、重要度の数字が入ります。"]} />
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