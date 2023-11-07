import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {useParams} from 'react-router-dom';
// import Sidebar from './Sidebar';
import Videos from './Videos';

const SearchFeed = () => {
  const [videos,setVideos] = useState([]);
  const{searchTerm} = useParams();
  // useEffect is a lifecycle hook which is called when the component is mounted or updated (initially loads).
  // useEffect is a hook that is used to perform side effects in a function component.
  //emplty meen it will only run when we relad the page;
  //[selectedCatagory] mean it will get call whenever selectedCatagory are getting changed in useEffect Hooks

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm]);

  return (
      <Box p={2}
        sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        {/* mb -> marginBottom */}
        <Typography variant="h4" mb={2}
          fontWeight="bold"
          sx={{ mt: 1.5, color: '#fff' }}>
          Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
        </Typography>

        <Videos videos={videos} />
      </Box>
  );
}
// sx:'will have a coloumn view in laptop', md:'will have a row view in mobile'
// sx:{flexDirection:{sx:"column",md:"row"}}


export default SearchFeed;