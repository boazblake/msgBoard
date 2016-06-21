import React from 'react';

export default class SplashPage extends React.Component {
  render(){
    return (
      <div className="bs-component">
        <div className="col-lg-6>">
          <form className="form-horizontal">
            <fieldset>
              <legend>Login</legend>
              <div className="form-group">
                <div className="col-lg-5">
                  <label for="inputEmail" className="col-lg-2 control-label">Email</label>
                  <input type="text" className="form-control" id="inputEmail" placeholder="Email"/>
                  <label for="inputPassword" className="col-lg-2 control-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                  </div>
                </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}