import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';

import Sidebar from './Sidebar';
import Videos from './Videos';

const Feed = () => {
  const [selectedCatagory,setSelectedCategory] = useState('Tom and Jerry');
  const [videos,setVideos] = useState([]);
  // useEffect is a lifecycle hook which is called when the component is mounted or updated (initially loads).
  // useEffect is a hook that is used to perform side effects in a function component.
  //emplty meen it will only run when we relad the page;
  //[selectedCatagory] mean it will get call whenever selectedCatagory are getting changed in useEffect Hooks
  
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCatagory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCatagory]);
  
  return (
    <Stack id='contentForFeed' sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{
        height: { sx: 'auto', md: '97vh' }, borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 }
      }}
      >
        <Sidebar 
          selectedCategory={selectedCatagory}
          setSelectedCategory={setSelectedCategory}/>
        
        <Typography variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          CopyRight 2022 RK_Media
        </Typography>
      </Box>
      <Box id='content' p={2}
        sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        {/* mb -> marginBottom */}
        <Typography variant="h4" mb={2}
          fontWeight="bold"
          sx={{ mt: 1.5, color: '#fff',justifyContent:'space-between' }}>
          {selectedCatagory} <span style={{ color: '#F31503' }}>Videos</span>
          <span style={{color:'white',float:'right',margin:'0px 5px',fontSize:'large'}}>LinkedIn: <a style={{color:'white',textDecoration:'underline'}} href='https://www.linkedin.com/in/ravi-2001/'>Ravi Kant</a></span>
        </Typography>

        <Videos id='videoFeed' videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
// sx:'will have a coloumn view in laptop', md:'will have a row view in mobile'
// sx:{flexDirection:{sx:"column",md:"row"}}

