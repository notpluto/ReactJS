import React,{Component} from 'react'
import media from './media/bannerPositionedImage_pb2aerffx1a21.png';

class Hero extends Component{
	render() {
		return (
			<div className="hero">
				<span className="hero-text"><p>r/soccer</p></span>
				<img src= {media} className="hero-image" />
			</div>
			);
	}
}

export default Hero;