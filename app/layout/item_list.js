import React from "react";
import ItemListDetail from "./item_list_detail.js";

const ItemList = (props) => {
	const Items = props.items.map((item) => {
		return <ItemListDetail 
		onItemSelect = {props.onItemSelect}
		key={item.id}
		item={item} />
	});
	return (
		<ul className="col-md-4 list-group">
			{Items}
		</ul>
	);
}

export default ItemList;