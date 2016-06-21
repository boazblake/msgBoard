import React, { Component } from 'react';

export default class SelectedMsg extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    
    this.state = {
      msgSelected: this.props.msgSelected
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      msgSelected: nextProps.msgSelected
    })
  }

  render(){   
    return(
      <button className="btn btn-success"
              onClick={this.props.selectMsg}>
                <span className="glyphicon glyphicon-check"></span>
              </button>
    )
  }
}
