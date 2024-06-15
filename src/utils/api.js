import axios from "axios";
const Axios = require('axios');

  const BASE_API=   'https://youtube138.p.rapidapi.com'

const options = {
  method: 'GET',
  params: {
    
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

 export const fetchdatafromapi = async (url)=>{
     const {data} = await axios.get(`${BASE_API}/${url}` ,options)
     return data
}

  