import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const navigate = useNavigate();
  // what is useNavigate.
  const handleSubmit = (e) =>{
    e.preventDefault();
    // alert(searchTerm);
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      // why we are searchTerm as null
      setSearchTerm('');
    }

    console.log(searchTerm);
  }
  return(
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{borderRadius:40,
            border:'1px solid #e3e3e3',
            pl:2,
            boxShadow:'none',
            mr:{sm:5}
          }}>
        <input 
          className="search-bar" 
          placeholder="Search..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          />
        <IconButton type='submit' onSubmit={()=>{}}
          sx={{
          p:'10px',color:'red'
          }}>
          <SearchIcon/>
        </IconButton>
      </Paper>
  )
}
export default SearchBar;
// pl -> padding left
// mr -> margin right , sm: -> small device