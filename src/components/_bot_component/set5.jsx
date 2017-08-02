import React, { Component } from 'react';
import BotMessage from '../loc/bot_message';

const Set5 = (props) => {
  return(
    <div key={props.index}>
      <BotMessage botmessage="あなたのイメージの好みはバッチリわかりました。" />
      <BotMessage botmessage="では次の質問です。" />
    </div>
  );
}

export default Set5;