import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import Drawer from './Drawer';

const Head = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0;
	cursor: pointer;
`
export default class Header extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Head>
				<FontAwesome className= "fab fa-github" size="3x" style={{}} name="icon"/>
				<FontAwesome className= "fas fa-cart-arrow-down" size="4x" style={{}} name="shop-icon"/>
				<Drawer />
				</Head>
			</React.Fragment>
		)
	}
}