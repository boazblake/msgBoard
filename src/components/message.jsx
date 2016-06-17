import React, { Component } from 'react';
import {RemoveTaskButton} from './removeTaskButton'

export default class Message extends Component {
  constructor(props){
    super(props);
    this.props = props;

    //set the state for changing background on tick
    this.state ={
      taskBkgColor: '#ecf0f1'
    }

    this.handleBackground=this.handleBackground.bind(this);
  }

  handleBackground(){
    if (this.state.taskBkgColor === '#ecf0f1') {
      return this.setState({
        taskBkgColor: '#2ecc71'
      })
    } else {
      return this.setState({
        taskBkgColor: '#ecf0f1'
      })
    }
  }



  render() { 
    let divStyle = {
      backgroundColor: this.state.taskBkgColor
    }

    return (
      <div className="row">
        <div style={divStyle} className="col-xs-2 center">
          {this.props.msg.author}
        </div>
        <div style={divStyle} className="col-xs-8 center">
          {this.props.msg.text}
        </div>
        <div className="col-xs-2">
          <button className="btn btn-success"
                  onClick={this.handleBackground}>
            <span className="glyphicon glyphicon-ok"/>
          </button>
          <RemoveTaskButton/>
        </div>
      </div>
    );
  }
}