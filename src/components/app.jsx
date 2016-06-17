import React, { Component } from 'react';
import Messages from './messages'

class App extends React.Component {
  render(){
    return (
      <div>
        <form>
        <div className="center">
          <button>Send a Message</button>
          <input placeholder="Name"/>
          <input placeholder="Message"/>
        </div>
        </form>
        <Messages />
      </div>
    );
  }
}

export default App;