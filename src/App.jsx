import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import {Feed, VideoDetail, NavBar, ChannelDetail, SearchFeed} from './components';

import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}
