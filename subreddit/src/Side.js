import React from 'react';
import media from './media/thumbnail_nav.png';

class Side extends React.Component {
	render(){
		return (
				<div className="side-container">
					<div className="container-head">
						<div>
							<p className="title">community details</p>
						</div>
						<div className="container-content">
							<div className="subreddit"><img src={media} width= "25px" height="25px" />  r/soccer</div>
							<div className="small-content">1.4m<br /><small>Season Ticket Holders</small></div>
							<div className="small-content">11.7k<br /><small>In Attendence</small></div>
							<p>The football subreddit. News, results and discussion about the beautiful game.</p>
							<button className="btn post-sub">subscribed</button>
							<button className="btn post-btn">create post</button>
						</div>
					</div>
					
				<div class="rules-container">
					<div>
						<p class="title">r/soccer rules</p>
					</div>
					<ol class="rules">
						<li class="rule-list">Follow reddiquette <i class="fas fa-sort-down"></i></li>
						<li class="rule-list">Do not use offensive language or be abusive <i class="fas fa-sort-down"></i></li>
						<li class="rule-list">Be on topic <i class="fas fa-sort-down"></i></li>
						<li class="rule-list">No shit-posting <i class="fas fa-sort-down"></i></li>
						<li class="rule-list">No Duplicates <i class="fas fa-sort-down"></i></li>
						<li class="rule-list">No NSFW content <i class="fas fa-sort-down"></i></li>
						<li class="rule-list">You must link sources for news, quotes and stats <i class="fas fa-sort-down"></i></li>
						<li class="rule-list">Only valuable image and stat submissions <i class="fas fa-sort-down"></i></li>
						<li class="rule-list">Please use factual and objective titles <i class="fas fa-sort-down"></i></li>
						<li class="rule-list">No low-effort questions as top-level submissions <i class="fas fa-sort-down"></i></li>
					</ol>
				</div>

				<div class="footer">
					<div class="footer-content">
						<div class="footer-grid">
							<div>About</div>
							<div>Advertise</div>
							<div>The Reddit App</div>
							<div>Careers</div>
							<div>Blog</div>
							<div>Reddit Coins</div>
							<div>Press</div>
							<div>Help</div>
							<div>Reddit Premium</div>
							<div></div>
							<div></div>
							<div>Reddit Gifts</div>
						</div>
					<div class="footer-align">
						<div class="footer-align-2">Content Policy |</div>
						<div class="footer-align-2">Privacy Policy </div><br />
						<div class="footer-align-2">User Agreement |</div>
						<div class="footer-align-2">Mod Policy</div>
						<div>© 2019 Reddit, Inc. All rights reserved</div>
					</div>
					</div>
				</div>
				</div>
		);
	}
}

export default Side;