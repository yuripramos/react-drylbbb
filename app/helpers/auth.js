import axios from "axios";

const AUTH_TOKEN = "20247ff2713d41fea7dd0ba106834d2ebf11f4b9f663c0eb405ae69976fcc4d3";

axios.defaults.baseURL = 'https://api.dribbble.com/v1/';
axios.defaults.headers.common['Authorization'] =`Bearer ${AUTH_TOKEN}`; //New in ES6
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';




