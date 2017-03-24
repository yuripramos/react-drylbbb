import React from "react";
import FontAwesome from 'react-fontawesome';

const ItemDescription = ({item}) => {
	if(!item){
		return <div>Loading...</div>;
	}
	const ItemId = item.id;	
	const UserImage = item.user.avatar_url;
	const UserName = item.user.name;
	// const UserBio = item.user.bio;
	const UserFollowers = item.user.followers_count;
	const UserLocation = item.user.location;
	const UserProjects = item.user.projects_count;
	const UserHome = item.user.html_url;
	const ItemDesc = item.description;
	const Tags = item.tags.map((tag) => { return <span className="tags">
		<FontAwesome
		className='font-awesome'
        name='tag'
	    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> {tag} &nbsp;</span> });

	return (
		<div className="container">
			<div className="selected-detail col-md-12 col-md-12 col-sm-12 col-xs-12 text-center">
				<div className="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-offset-1 col-sm-2 col-xs-12">
					<div className="main-description ">
						<img className="media-avatar" src={UserImage}/> 
							<div className="user-infos">
								<FontAwesome
						        className='font-awesome'
						        name='user'
								size='2x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> {UserName}<br/>
						        <FontAwesome
						        className='font-awesome'
						        name='map-marker'
						  		size='2x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> {UserLocation}<br/>
						       	<FontAwesome
						        className='font-awesome'
						        name='users'
						     	size='2x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> {UserFollowers}<br/>
						        <FontAwesome
						        className='font-awesome'
						        name='briefcase'
						 		size='2x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> {UserProjects} <br/>
						        <FontAwesome
						        className='font-awesome'
						        name='home'
								size='2x'
						        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> <a href={UserHome} target="_blank">{UserHome}</a>
							</div>
					</div>
				</div>
				<div className="details col-lg-offset-3 col-lg-5 col-md-offset-2 col-md-4 col-lg-offset-2 col-sm-4 col-xs-12">
					<div className="wrapper">
						<img className="media-object" src={item.images.normal}/>
						<p dangerouslySetInnerHTML={{__html: ItemDesc}} className="item-desc-text" />
					</div>
					<div className="tags-control">{Tags}</div>
				</div>
			</div>
		</div>
	);
};


export default ItemDescription;