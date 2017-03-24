import React from "react";
import FontAwesome from 'react-fontawesome';

const ItemDescription = ({item}) => {
	if(!item){
		return <div>Loading...</div>;
	}
	const ItemId = item.id;	
	const UserImage = item.user.avatar_url;
	const UserName = item.user.name;
	const ItemDesc = item.description;
	const Tags = item.tags.map((tag) => { return <span className="tags">
		<FontAwesome
		className='font-awesome'
        name='tag'
	    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> {tag} &nbsp;</span> });

	return (
		<div className="container">
			<div className="selected-detail col-md-12 col-md-12 col-sm-12 col-xs-12 text-center">
				<div className="main-description col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-offset-1 col-sm-2 col-xs-12">
					<img className="media-avatar" src={UserImage}/> 
					{UserName} <br/>
					{Tags}
				</div>
				<div className="details col-lg-offset-2 col-lg-4 col-md-offset-2 col-md-4 col-lg-offset-2 col-sm-4 col-xs-12 text-center">
					<div><img className="media-object" src={item.images.normal}/></div>
					<p dangerouslySetInnerHTML={{__html: ItemDesc}} />
				</div>
			</div>
		</div>
	);
};


export default ItemDescription;