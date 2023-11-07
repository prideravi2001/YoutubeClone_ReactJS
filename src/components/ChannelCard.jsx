import React from 'react';
import {Box, Typography, Card, CardMedia, CardContent} from '@mui/material';
import {Link} from 'react-router-dom';
import {CheckCircle} from '@mui/icons-material';
import {demoProfilePicture,ChannelLogo} from '../utils/constants';
const ChannelCard = ({channelDetail,marginTops}) => {
  return(
    <>
      <Box sx={{
      boxShadow:'none',
      borderRadius:'20px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:{xs:'356px',md:'320px'},
      height:'326px',
      margin:'auto',
      marginTop:marginTops,
      }}>
        <Link to={`channel/${channelDetail?.id?.channelId}`}>
          <CardContent sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center',
            color:'#fff'
          }}>
            <CardMedia 
              image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture || ChannelLogo}
              alt={channelDetail?.snippet.title}
              sx={{borderRadius:'50%',
                   height:'180px', 
                   width:'180px',
                   border:'2px solid #e3e3e3',mb:2}}
              />
            <Typography variant="h6" sx={{display:'flex',
                                          alignItem:'center'
                                         }}>
              {channelDetail?.snippet?.title || 'Channel Title'}
              <CheckCircle sx={{color:'gray',
                              fontSize:'12',
                              ml:'5px',
                              mt:'5px'
                             }}
              />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
                <Typography variant="subtitle2" sx=
                  {{color:'gray'}}
                > 
  {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                
                </Typography>
              )}

            {/* {channelDetail.statistics ? (
              <Typography variant="subtitle2" sx={{ color: 'gray' }}>
                {parseInt(channelDetail.statistics.subscriberCount).toLocaleString()} Subscribers
              </Typography>) 
            : null}
 */}
          </CardContent>
        </Link>
      </Box>
    </>
  )
};
{/* Channel
{console.log("channelDetails")}
{console.log(channelDetail)} */}
export default ChannelCard;