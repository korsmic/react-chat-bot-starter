import React, { Component } from 'react';
import BotMessage from '../loc/bot_message';

const Set5 = (props) => {
  return(
    <div key={props.index}>
      <BotMessage botmessage="あなたのイメージの好みはバッチリわかりました。" />
      <BotMessage botmessage="では次の質問です。" />
      <BotMessage botmessage="どちらかといえばあなたはどっち？" />
      <div className="bot-message">
        <div className="message">
          Ａ.直感を信じる<br/>
          Ｂ.論理を信じる
        </div>
      </div>
    </div>
  );
}

export default Set5;