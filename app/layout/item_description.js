import React from "react";


const ItemDescription = ({item}) => {
	if(!item){
		return <div>Loading...</div>;
	}
	const ItemId = item.id;	
	const userImage = item.user.avatar_url;
	const userName = item.user.name;
	const tags = item.tags.map((tag) => { return <span className="tags">{tag} &nbsp;</span> });
	return (
		<div className="container">
			<div className="selected-detail col-md-12 col-md-12 col-sm-12 col-xs-12 text-center">
				<div className="main-description col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-offset-1 col-sm-2 col-xs-12">
					<img className="media-object" src={userImage}/> 
					{userName} <br/>
					{tags}
				</div>
				<div className="details col-lg-offset-2 col-lg-4 col-md-offset-2 col-md-4 col-lg-offset-2 col-sm-4 col-xs-12 text-center">
					<div><img className="media-object" src={item.images.normal}/></div>
				</div>
			</div>
		</div>
	);
};


export default ItemDescription;