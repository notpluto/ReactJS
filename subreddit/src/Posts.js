import React, {Component} from 'react';
import Post from './Post';
import Side from './Side';

class Posts extends Component{
	constructor() {
		super();
		this.state = {
			posts: [],
			loading: false
		}	
	}

	componentDidMount = () => {
		this.setState({loading: true});
		fetch('https://cors-anywhere.herokuapp.com/' + 'https://www.reddit.com/r/soccer.json')
		.then(res => res.json()).then(({data}) => this.setState({posts: data.children, loading: false}));
	}

render(){
	return (
		<section className="main-section">
			<div className="wrapper card">
				<div className="post-container">
	{
		this.state.posts.map(({data}) => <Post content = {data} />)
	}
				</div>
				<Side />
			</div>
		</section>
	);	
}
}

export default Posts;