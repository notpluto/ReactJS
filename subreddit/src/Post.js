import React, {Component} from 'react';

function Post({content = {}}){
		return (
						<div className="post">
								<div className="votes">
									<i className="fas fa-long-arrow-alt-up text-center"></i>
									<span className="vote-count text-center">{content.ups}</span>
									<i className="fas fa-long-arrow-alt-down text-center"></i>
								</div>
								<div className="post-content">
									<div>
										<span className="posted-by">Posted By <a href="#">u/{content.author}</a></span>
										<p className="title">{content.title}</p>
										<a href="#">{content.url.substring(0,40)+'...'}</a>
									</div>
									<div className="post-action">
										<i className="fas fa-comment-alt"></i>
										<span className="comment-number">{content.num_comments} Comments</span>
										<i className="fas fa-star"></i>
										<span className="comment-number">Give Award</span>
										<span><i className="fas fa-share"></i>Share</span>
										<span><i className="fas fa-bookmark"></i>Save</span>
										<i className="fas fa-ellipsis-h"></i>
									</div>
								</div>
						</div> 
		)
}


export default Post