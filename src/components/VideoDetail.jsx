import {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
// import Youtube from 'react-youtube';
import {Typography, Box, Stack} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {Videos} from './';
import {fetchFromAPI} from '../utils/fetchFromAPI';
import {likeIcon} from '../utils/constants'
const VideoDetail = () => {
  const [videoDetail,setVideoDetail] = useState(null);
  const [relatedVideo,setRelatedVideo] = useState(null);

  const {id}  = useParams();

  const opts = {
    height: "390",
    width:"100%",
    playerVars:{
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet&id=${id}`)
    .then((data)=> setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=> setRelatedVideo(data.items))
  },[id]);

  if(!videoDetail?.snippet) return 'Loading...';
  const {
        snippet : 
          {
            title,
            thumbnails,
            description,
            channelId,
            channelTitle,
          },
      statistics : 
        {
          viewCount,
          likeCount
        }
        } = videoDetail;

  console.log(videoDetail)
  // This is called object destructuring.
  return (
    <div>
      {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> */}
      <Box minHeight='95vh'>
        <Stack direction={{xs:'column',md:'row'}}>
        {/* sx:-> extra small devices it will be column, md medium devices or more:- It's gonna be row */}
          <Box sx={{flex:1}}>
            {/* top: position why don't know */}
            <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
            {/* This Box is responsible for wrap left section */}
              <ReactPlayer controls url={`https://www.youtube.com/watch?v=${id}`} id="reactVideoPlayer" className='react-player'/> 
              {/* controls -> will give you the access to the controler for youtube video */}
              {/* <Youtube videoId={id} opts={opts} className='react-player'/> */}
              <Typography m={2} top='85px' color="#fff" variant="h5" fontWeight="bold">
                {/* {videoDetail?.snippet?.title || 'Video Title'} */}
                {title}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{color:'#fff'}} px={2} py={1}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{sm:'subtitle1',md:'h6'}} color='#fff'> 
                    {channelTitle}
                    <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px">
                  <Typography variant="body1" sx={{opacity:0.8}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{opacity:0.8}}>
                    {parseInt(likeCount).toLocaleString()} likes 
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
{/* Video as a flex on right ride as column */}
          <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems='center' >
            <Videos videos={relatedVideo} direction="column"/>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default VideoDetail;