import React, {Component} from 'react';
import styled from 'styled-components';

class User extends Component {
	constructor(props){
		super(props);
	}
	state ={
		username: null
	}
	render() {
		return (
			<h2>You're now logged in.</h2>
				{
					(this.state.username) ? <User username={this.state.user}
				}
		)
	}
}