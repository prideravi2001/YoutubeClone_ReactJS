import React from 'react';
import { Stack ,Box, Typography } from '@mui/material';
import {VideoCard,ChannelCard} from './';
const Videos = ({videos,direction}) => {
  if(!videos?.length) return 'Loading...';
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' sx={{justifyContent:'center'}}
      justifyContent='start' gap={2}>
      {videos.map((item,idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;