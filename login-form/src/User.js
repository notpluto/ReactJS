import React, {Component} from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
	color: #fff;
`
const Button = styled.button`
	padding: 10px;
	background: purple;
	display: block;
	width: 6rem;
	height: 2.4rem;
	font-size: 1rem;
	font-weight: bold;
	color: #fff;
	outline: 0;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	margin-top: 20px;
`
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 1400px;
	margin: 0 auto;
`
export default class User extends Component {
	state ={
		user: null
	}
	render() {
		return (
			<React.Fragment>
				<div style={{background: "teal"}}>
					<Wrapper>
						<Heading>Hello!</Heading>	
						<Button onClick={this.props.resetUser}> Logout </Button>
					</Wrapper>
				</div>
				<img src="https://st2.depositphotos.com/3400509/6907/v/950/depositphotos_69078775-stock-illustration-cute-dragon-avatar.jpg" width= "150px" height="150px" alt="user-avatar"/>
			</React.Fragment>
		)
	}
}