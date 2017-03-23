import React from "react";


const ItemDescription = ({items}) => {
	if(!items){
		return <div>Loading...</div>;
	}
	const ItemId = items.id;
	const Url = "http://www.google.com"; //Don't forget the ``

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={Url} ></iframe>
			</div>
			<div className="details">
				<div>video.snippet.title</div>
				<div>video.snippet.description</div>
			</div>
		</div>
	);
};


export default ItemDescription;