import React, {Component} from 'react';

class Menu extends Component {
	render() {
		return (
			<div className="subreddit-bar">
				<div className="subreddit-menu">
					<ul className="subreddit-menu-list">
						<li className="menu-list">Posts</li>
						<li className="menu-list">📖 Read </li>
						<li className="menu-list">📺 Watch</li>
						<li className="menu-list">⚽ Match Threads</li>
						<li className="menu-list">📛 Flair </li>
						<li className="menu-list">✉️ Modmail</li>
					</ul>
				</div>
			</div>
		)
	} 
}

export default Menu;