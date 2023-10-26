import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { BlogPageInfo } from '../model/BlogPageInfo';
import { useNavigate } from 'react-router-dom';
import { Router } from './Router';

const drawerWidth = 240;

export interface ClippedDrawProps {
  pages: BlogPageInfo[],
}

export const ClippedDrawer = ({ pages }: ClippedDrawProps) => {

  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" onClick={() => { navigate("/") }}>
            VaporRaven
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {pages.map((page) => (
              <ListItem key={page.path} disablePadding>
                <ListItemButton onClick={() => { navigate(encodeURIComponent(page.path)) }} sx={{ p: 0 }}>
                  <ListItemIcon>
                    {<StarIcon />}
                  </ListItemIcon>
                  <ListItemText primary={page.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Router pages={pages} />
      </Box>
    </Box>
  );
}