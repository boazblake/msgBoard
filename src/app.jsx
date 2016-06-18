import React, { Component } from 'react';
import Messages from './msgs/messages';
import ChatContainer from './chat/chatContainer';
import toastr from 'toastr';

//Include our nwly installed horizon client
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });

//This init the 'messages_msgBoard' collection inside of the ReThinkDb
const chat = horizon('messages_msgBoard');

class App extends React.Component {
//init our state with the built in constructor function
constructor(props){
  super(props);
  this.state ={
    convo: [],
    author:'',
    text: ''
  }
  this.handleChangeAuthor = this.handleChangeAuthor.bind(this),
  this.handleChangeText = this.handleChangeText.bind(this),
  this.handleSendMessage = this.handleSendMessage.bind(this)
}

componentDidMount() {
  chat.watch().subscribe(
    (messages_msgBoard) => {
      let allMSGS = messages_msgBoard.sort((a, b) => {
        return b.date - a.date;
      })
      this.setState({convo: allMSGS});
    },
    (err) => {console.log(err);}
  );
}

//These func handle the change events in the inputs and update state

handleChangeAuthor(event) {
  this.setState(
    {
      author:event.target.value
    }
  )
}

handleChangeText(event) {
  this.setState(
    {
      text:event.target.value
    }
  )
}

handleSendMessage() {
  //check for empty strings and return ealry if message or author is not entered
  if (this.state.text === false || this.state.author === false) {
    toastr["error"]("invalid Submission!");
    return;
  }
  let now = Date.now();
  let message ={
    text: this.state.text,
    author: this.state.author,
    date: now,
    status: false
  };
  //the store methos will take the new message and store in the rethink DBcollection
  chat.store(message);
}

//passing chat as a prop to messages_msgBoard component for querying the db for messages_msgBoard

  render(){
    return (
      <div>
        <ChatContainer sendMessage={this.handleSendMessage}
                       changeAuthor={this.handleChangeAuthor}
                       changeText={this.handleChangeText}/>
        <Messages convo={this.state.convo}/>
      </div>
    );
  }
}

export default App;