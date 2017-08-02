import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChatHistory from './components/chat_history';
import ChatMessageComposer from './components/chat_message_composer';

import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

class App extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      from: 'user',
      yID: "",
			yImagePath: "",
			yName: "",
			yText: ""
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.recieveMessage = this.recieveMessage.bind(this);

  }

  addMessage(message) {
    this.setState((previousState) => {
      previousState.messages.push(message);
      return{ messages: previousState.messages };
    });
  }


  recieveMessage(message) {
    this.setState((previousState) => {
      previousState.messages.push({
        message: message.message,
        from: 'bot'
      });
    return { messages: previousState.messages };
    });
  }

  sendMessage(message) {
    this.addMessage(message);
  }

  componentWillMount() {
    this.recieveMessage = _.debounce(this.recieveMessage,700)
  }

  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="wrap">
          <div className="wrapper">
            <AppBar title="YadokenAI"
              showMenuIconButton={false}
            />
            <ChatHistory messages={this.state.messages} />
            <ChatMessageComposer
              sendMessage={this.sendMessage}
              recieveMessage={this.recieveMessage}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));