import React from 'react';
import styled from 'styled-components';
import item1 from './assets/1.jpg';
import item2 from './assets/2.jpg';
import item3 from './assets/3.jpg';
import item4 from './assets/4.jpg';
import item5 from './assets/5.jpg';
import item6 from './assets/6.jpg';
import item7 from './assets/7.jpg';
import item8 from './assets/8.jpg';
import item9 from './assets/9.jpg';
import item10 from './assets/10.jpg';
import item11 from './assets/11.jpg';
import item12 from './assets/12.jpg';
import item13 from './assets/13.jpg';
import item14 from './assets/14.jpg';
import item15 from './assets/15.jpg';
import item16 from './assets/16.jpg';


const Wrapper = styled.div `
	margin: 0 auto;
	max-width: 1000px;
`
const ItemCard = styled.div`
	display: grid;
	margin-top: 0rem;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-gap: 20px;
`

const ItemImage = styled.img`
	width: 220px;
	height: 300px;
	`
const Button = styled.button`
	margin: 20px;
	padding: 10px;
	background: black;
	width: 12rem;
	font-size: 1rem;
	font-weight: bold;
	color: #fff;
	outline: 0;
	border: none;
	cursor: pointer;
	`
class Products extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Wrapper>
					<ItemCard>
						<div className="light"><ItemImage src= {item1} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"> <ItemImage src= {item3} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"> <ItemImage src= {item2} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"> <ItemImage src= {item4} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"> <ItemImage src= {item5} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"> <ItemImage src= {item6} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"> <ItemImage src= {item7} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"> <ItemImage src= {item8} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"> <ItemImage src= {item9} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"><ItemImage src= {item10} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"><ItemImage src= {item11} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"><ItemImage src= {item12} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"><ItemImage src= {item13} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"><ItemImage src= {item14} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"><ItemImage src= {item15} /> <Button className="addCart"> Add to cart </Button></div>
						<div className="light"><ItemImage src= {item16} /> <Button className="addCart"> Add to cart </Button></div>
					</ItemCard>
				</Wrapper>
			</React.Fragment>
		)
	}
}

export default Products;