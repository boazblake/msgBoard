import React, { Component } from 'react';
import Moment from 'moment';
import SelectedMsg from './selectedMsg';
import RemoveMsg from './removeMsg';


export default class Message extends Component {
  constructor(props){
    super(props);
    let msgStatus = (this.props.msg.msgSelected);

    this.state = {
      msgStatus: msgStatus,
    }      
  }

  componentWillReceiveProps(nextProps){
    console.log('nextProps>>>', nextProps)
    let msgStatus = (nextProps.msgSelected);
    let bkgColor = (msgStatus) ? '#3498db' : '#bdc3c7';

    this.setState = {
      msgStatus: msgStatus,
    }
  }

  render() { 
    let bkgColor = (this.props.msg.msgSelected) ? '#3498db' : '#bdc3c7';

    let divStyle =  {
      backgroundColor: this.props.bkgColor
    }

    return (
      <div style={divStyle} className="row">
        <div className="col-xs-2 center">
          {this.props.msg.author}
        </div>
        <div className="col-xs-5 center">
          {this.props.msg.text}
        </div>
        <div className="col-xs-3 center">
          { Moment(this.props.msg.date)
            .format('MMM Do YYYY, h:mm:ss a')}
        </div>
        <div className="col-xs-2 center">
          <RemoveMsg id={this.props.msg.id}/>
          <SelectedMsg id={this.props.msg.id}/>
        </div>
      </div>
    );
  }
}