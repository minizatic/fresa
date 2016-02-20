import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
  render() {
    return (
        <div className="three columns offset-by-three" id="form-container">
            <form>
                <label htmlFor="github-username">GitHub Username</label>
                <input className="u-full-width" type="text" id="github-username"/>
                <label hmtlFor="github-password">Password</label>
                <input className="u-full-width" type="password" id="github-password"/>
                <input className="button-primary" id="sign-in-btn" value="Sign In" type="button"/>
            </form>
        </div>
    )
  }
}

class App extends React.Component {
    render() {
        return <Login/>
    }
}
 
ReactDOM.render(<App/>, document.getElementById('app-container'));