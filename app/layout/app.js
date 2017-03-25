import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import GitHubForkRibbon from 'react-github-fork-ribbon';
import Footer from "./footer.js";
import ItemList from "./item_list.js";
import ItemDescription from "./item_description.js";

const AUTH_TOKEN = "20247ff2713d41fea7dd0ba106834d2ebf11f4b9f663c0eb405ae69976fcc4d3";

axios.defaults.baseURL = 'https://api.dribbble.com/v1/';
axios.defaults.headers.common['Authorization'] =`Bearer ${AUTH_TOKEN}`; //New in ES6
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



class Main extends React.Component {
    constructor(props){
    	super(props);
	    this.state = {
	      items: [],
	      selectedItem:null
	    };
    }
    componentWillMount(){
	    axios.get("/shots?per_page=52")
		.then(res => {
			console.log(res.data);
			console.log("---------------");
        	this.setState({ items : res.data });
      	});
		
    }
  	componentWillUpdate(){
		window.scrollTo(50, 50);
  	}
	render(){
		return(
			<div>
				<div className="container">
					<ItemDescription item = { this.state.selectedItem } />
					<ItemList onItemSelect={selectedItem => this.setState({selectedItem})  }
		      		items = {this.state.items}/>
				</div>
				<Footer />
		     	<GitHubForkRibbon position="right" 
                color="red"
                href="//github.com/yuripramos/react-drylbbb" 
                target="_blank" > 
					Fork me on GitHub 
				</GitHubForkRibbon> 
			</div>
		);
	}
}


ReactDOM.render(<Main/>, document.getElementById("app"));