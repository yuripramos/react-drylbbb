import React, { Component } from 'react';
import ReactDOM from "react-dom";

import axios from "axios";

const AUTH_TOKEN = "20247ff2713d41fea7dd0ba106834d2ebf11f4b9f663c0eb405ae69976fcc4d3";

axios.defaults.baseURL = 'https://api.dribbble.com/v1/';
axios.defaults.headers.common['Authorization'] =`Bearer ${AUTH_TOKEN}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class Main extends React.Component {
    constructor(props){
    	super(props);
	    this.state = {
	      items: []
	    };
    	this.showMenus = this.showMenus.bind(this);
    }
    componentWillMount(){
	    axios.get("/shots?per_page=50")
		.then(res => {
			console.log(res.data);
        	this.setState({ items : res.data });
      	});
		
    }
    showMenus(){
    	//<NavBar items = {this.state.items} />
    }
	render(){
	
		return(
			<div className="wrapper">
				 
			</div>
		);
	}
}


ReactDOM.render(<Main/>, document.getElementById("app"));