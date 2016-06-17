import React, { component } from 'react';
import Message from './message';

class Messages extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      convo: [
        {text:'Hi can you read this?', author:'first Guy' },
        {text:'Yes, I can read this', author:'second guy' },
        {text:'this is more text!', author:'third guy' }
      ]
    };
  }


  render(){
    let msgsJsx = this.state.convo.map((message, i) => {
      return <Message msg={message} key={i} />
    });
    return (<div className="container-fluid">{msgsJsx}</div>);
  }
}

export default Messages;