import React, { Component } from 'react';
import toastr from 'toastr';
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });
let chat = horizon('messages_msgBoard');

export default class ChatContainer extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      author: '',
      text: ''
    }

    this.handleChangeAuthor = this.handleChangeAuthor.bind(this)
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleSendMessage = this.handleSendMessage.bind(this)
  }

  //These func handle the change events in the inputs and update state

  handleChangeAuthor(event) {
    event.preventDefault();
    this.setState(
      {
        author:event.target.value
      }
    )
  }

  handleChangeText(event) {
    event.preventDefault();

    this.setState(
      {
        text:event.target.value
      }
    )
  }

  handleSendMessage(event) {
    event.preventDefault();

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
      msgSelected: false
    };
    console.log('message', message)
    //the store methos will take the new message and store in the rethink DBcollection
    chat.store(message);
  }

  //passing chat as a prop to messages_msgBoard component for querying the db for messages_msgBoard



  render(){
    return (
      <form>
        <div className="center">
          <input onChange={this.handleChangeAuthor} placeholder="Name"/>
          <input onChange={this.handleChangeText} placeholder="Message"/>
          <button className="btn btn-default"
                  onClick={this.handleSendMessage}>Send a Message</button>
        </div>
      </form>
    )
  }
}