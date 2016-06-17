import React, { component } from 'react';
import Message from '../msgs/message';

export default class Messages extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  render(){
    let msgsJsx = this.props.convo.map((message, i) => {
      return <Message msg={message} key={i} />
    });
    return (
      <div className="container-fluid">
        {msgsJsx}
      </div>
    );
  }
}
