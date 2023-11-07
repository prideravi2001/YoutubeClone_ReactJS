import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Card, CardMedia, CardContent} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';

import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl,demoChannelTitle,demoProfilePicture} from '../utils/constants';


const VideoCard = ({ video:{id:{videoId},snippet} 
}) => {
  return (
    <Card sx={{width:{xs:'100%',sd:'358px' ,md:'320px', boxShadow:'none', borderRaduis:0}}}>
      {/* for responsive of the card in mobile view mode */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width:{
            xs:'100%', sd:'358px', md:'320px'
          },height:180}}
          />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1"
            color="#fff"
            fontWeight="bold"
            sx={{fontWeight:'bold',fontSize:'16'}}>
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl}>
          <Typography variant="subtitle2"
            color="gray"
            fontWeight="bold"
            sx={{fontWeight:'bold',fontSize:'16',
              display: 'flex',
              alignItems: 'end'}}>
            {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
            <CheckCircle sx={{color:'gray',
                              fontSize:'12',
                              ml:'5px',
                              mt:'5px'
                             }}
              />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
{/* video
{console.log("videos,snippe")}
{console.log(videoId,snippet)} */}
export default VideoCard;