import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-2 center">
          {this.props.msg.author}
        </div>
        <div className="col-xs-8 center">
          {this.props.msg.text}
        </div>
        <div className="col-xs-2">
          <button className="btn btn-danger">X</button>
          <button className="btn btn-success"><span className="glyphicon glyphicon-ok"></span></button>
        </div>
      </div>
    );
  }
}