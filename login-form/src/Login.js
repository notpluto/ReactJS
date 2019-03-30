import React from 'react';
import styled from 'styled-components';
import { handleLogin } from './api';

const Input = styled.input`
	height: 36px;
	width: 360px;
	border: 2px solid palevioletred;
	border-radius: 10px;
	display: block;
	margin: 20px 0 ;
	padding: 4px 10px;
	outline: 0;
`
const Button = styled.button`
	padding: 10px;
	background: purple;
	display: block;
	width: 6rem;
	height: 2.6rem;
	font-size: 1rem;
	font-weight: bold;
	color: #fff;
	outline: 0;
	border: none;
	border-radius: 6px;
	cursor: pointer;
`
const Wrapper = styled.div`
	margin: 10rem auto;
	display: flex;
	flex-direction: column;
	place-items: center;
	max-width: 800px;
	width: 100%;
`
export default class Login extends React.Component {
	state ={
		username: null,
		password: null,
	}

	handleSubmit = (e) => {
		const {username, password} = this.state;
		handleLogin(username, password)
		.then(user => this.props.showUser(user))
		.catch(err => alert(err))
	}
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	render() {
		return (
			<React.Fragment>
				<Wrapper>
					<Input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
					<Input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
					<Button onClick={this.handleSubmit}>Submit</Button>
				</Wrapper>
			</React.Fragment>
			)
	}
}