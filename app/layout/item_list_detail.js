import React from "react";
import ItemDescription from "./item_description.js";


const ItemListDetail = ({item, onItemSelect}) => {
	const imageUrl = item.images.teaser;

	return( 
		<li onClick ={() => onItemSelect(item) } className="col-lg-4 col-md-4 col-sm-6 col-xs-12 list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>

				<div className="media-body">
					<div className="media-heading">Views: {item.views_count} Comments:{item.comments_count} Likes:{item.likes_count}</div>
				</div>
			</div>
		</li>
	);
};

export default ItemListDetail;