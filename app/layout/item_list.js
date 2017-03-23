import React from "react";
import ItemListDetail from "./item_list_detail.js";

const ItemList = (props) => {
	const Items = props.items.map((item) => {
		return <ItemListDetail 
		onItemSelect = {props.onItemSelect}
		key={item.id}
		item={item} />
		console.log(item.id);
	});
	return (
		<ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			{Items}
		</ul>
	);
}

export default ItemList;