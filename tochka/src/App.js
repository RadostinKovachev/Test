import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createBox } from '@mui/system';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(4)
  function descrementsCount() {
    setCount(prevCount => prevCount - 1)
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    
  }
  return (
    <div className="App">
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Новините днес
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <h1>Важна новина от последния час:</h1>
      <h3>Не знам каква е новината, но благодаря Ви, че си загубихте времето :)</h3>
      
        
      
      <Button variant="contained">+</Button>
      <span>0</span>
      <Button variant="contained">-</Button>
    </div>

  );
  
  
}


export default App;
