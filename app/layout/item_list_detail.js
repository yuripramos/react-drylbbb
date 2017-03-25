import React from "react";
import FontAwesome from 'react-fontawesome';
import ItemDescription from "./item_description.js";


const ItemListDetail = ({item, onItemSelect}) => {
	const ImageUrl = item.images.teaser;
	const Attachments = item.attachments_count;
	const ViewsCount = item.views_count;
	const CommentsCount = item.comments_count;
	const LikesCount = item.likes_count;

	return( 
		<li onClick ={() => onItemSelect(item) } className="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xxs-12 list-group-item">
			<div className="shot-list media">
				<div className="media-right">
					<img className="media-object" src={ImageUrl}/>
				</div>

				<div className="media-body">
					<div className="media-heading">      
						<FontAwesome
				        className='font-awesome'
				        name='eye'
				        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> 
				        {ViewsCount} 
				        <FontAwesome
				        className='font-awesome'
				        name='comments-o'
				        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> 
				        {CommentsCount} 
				        <FontAwesome
				        className='font-awesome'
				        name='heart'
				        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> 
				        {LikesCount} 
				        <FontAwesome
				        className='font-awesome'
				        name='paperclip'
				        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> 
				        <span className="attachments_numbers">{Attachments}</span>
				    </div>
				</div>
			</div>
		</li>
	);
};

export default ItemListDetail;