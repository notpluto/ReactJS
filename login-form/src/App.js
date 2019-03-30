import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import User from './User';

class App extends Component {
		state ={
			user: null,
		}

	showUser = (user) => {
		this.setState({user})
	}

	resetUser = () => {
		this.setState({user: null})
	}

  render() {
    return (
    	<React.Fragment>
      	{
					(this.state.user) ? <User resetUser={this.resetUser} /> : <Login showUser={this.showUser} />
				}
			</React.Fragment>
    );
  }
}

export default App;
