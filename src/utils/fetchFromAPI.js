import axios from 'axios';
import { REACT_APP_RAPID_API_KEY } from '../requests.js';
import {useEffect} from 'react';
// console.log(REACT_APP_RAPID_API_KEY);

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
// const instance = axios.create({
//   baseURL: 'https://youtube-v311.p.rapidapi.com';,
// });

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url) =>{
  // const response  = await axios.get(`${BASE_URL}/${url}`,options);
  // console.log("response +==+=+++")
  // console.log(response)
  // return response.data;
  const {data} = await axios.get(`${BASE_URL}/${url}`,options);
  // console.log(data.items[0].snippet);
  return data;
}
console.log("======/n")
console.log(fetchFromAPI('search'));