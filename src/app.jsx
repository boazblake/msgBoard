import React, { Component } from 'react';
import Messages from './msgs/messages';
import ChatContainer from './chat/chatContainer';


//Include our nwly installed horizon client
const Horizon = require('@horizon/client');
const horizon = Horizon();


//This init the 'messages_msgBoard' collection inside of the ReThinkDb
let chat = horizon('messages_msgBoard');

class App extends React.Component {
//init our state with the built in constructor function
constructor(props){
  super(props);
  this.state ={
    convo: []
  }
}

componentDidMount() {
  chat.watch().subscribe(
    (messages_msgBoard) => {
      console.log('watch subscribe')
      let allMSGS = messages_msgBoard.sort((a, b) => {
        return b.date - a.date;
      })
      this.setState({convo: allMSGS});
    },
    (err) => {console.log(err);}
  );
}

  //passing the message as a prop to the messages component for querying the db for messages_msgBoard

  render(){
    return (
      <div>
        <ChatContainer />
        <Messages convo={this.state.convo}/>
      </div>
    );
  }
}

export default App;