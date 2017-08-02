import React, { Component } from 'react';
import ChatMessage from './loc/chat_message';

const ChatHistory = (props) => {
  return (
    <div className="chat-output">
      {props.messages.map((message, index) => {
        return (
          <ChatMessage key={index} message={message} />
        );
      })}
    </div>
  );
}

export default ChatHistory;