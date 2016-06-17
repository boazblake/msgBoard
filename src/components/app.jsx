import React, { Component } from 'react';
import Messages from './messages';
import toastr from 'toastr';

//Include our nwly installed horizon client
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });

//This init the 'messages' collection inside of the ReThinkDb
const chat = horizon('messages');

class App extends React.Component {
//init our state with the built in constructor function
constructor(props){
  super(props);
  this.state ={
    author:false,
    text: false
  }
  this.handleChangeAuthor = this.handleChangeAuthor.bind(this),
  this.handleChangeMessage = this.handleChangeMessage.bind(this),
  this.handleSendMessage = this.handleSendMessage.bind(this)
}

//These func handle the change events in the inputs and update state

handleChangeAuthor(event) {
  this.setState(
    {
      author:event.target.value
    }
  )
}

handleChangeMessage(event) {
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
    date: now
  };
  //the store methos will take the new message and store in the rethink DBcollection
  chat.store(message);
}

//passing chat as a prop to messages component for querying the db for messages

  render(){
    return (
      <div>
        <form>
        <div className="center">
          <input onChange={this.handleChangeAuthor} placeholder="Name"/>
          <input onChange={this.handleChangeMessage} placeholder="Message"/>
          <button className="btn btn-default"
                  onClick={this.handleSendMessage}>Send a Message</button>
        </div>
        </form>
        <Messages chat={chat}/>
      </div>
    );
  }
}

export default App;