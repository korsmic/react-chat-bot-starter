import React, { Component } from 'react';

const BotMessage = (props) => {
  return(
    <div className="bot-message">
      <div className="message">{props.botmessage}</div>
    </div>
  );
}

export default BotMessage;