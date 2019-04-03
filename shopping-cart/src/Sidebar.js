import React from 'react';
import Products from './Products';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	margin-left: 40px;
	`
const SideMain = styled.div`
	margin-left: 60px;
	`
const Size = styled.span`
	border-radius: 50%;
	height: 18px;
	width: 18px;
	background: #ECECEC;
	display: inline-block;
	padding: 10px;
	font-size: 12px;
	text-align: center;
	margin-right: 10px;
	margin-top: 10px;
	`

export default class Sidebar extends React.Component {
	render(){
		return(
			<React.Fragment>
				<Wrapper>
					<SideMain>
						<div><strong>Sizes:</strong></div><br />
						<Size>XS</Size>
						<Size>S</Size>
						<Size>M</Size>
						<Size>ML</Size><br />
						<Size>L</Size>
						<Size>XL</Size>
						<Size>XXL</Size>
					</SideMain>
					<Products />
				</Wrapper>
			</React.Fragment>
		)
	}
}