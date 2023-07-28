import React from 'react';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useHistory, } from 'react-router-dom';

const Header = (props) => {
  let history = useHistory();
  const { window, navItems = [],basename } = props;

  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleLogo = () => {
    history.push('#carouselContainer')
  }
  const container = typeof window !== 'undefined' ? () => window().document.body : undefined;


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };



  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }} onClick={() => history.push('/')}>
        Scoregoals
      </Typography>
      <Divider />
      {/* <Typography onClick={() => history.push('/why-us')}>Register</Typography> */}
      <Typography>
        <a className='px-1 py-1 bg-white rounded-md my-8' target="_blank" 
        href='https://forms.gle/dxuAhwdiebbZtTbX7' type="button" rel="noreferrer">
          <span >Register</span>
        </a>
      </Typography>
      <Typography onClick={() => history.push('/why-us')}>Why Us</Typography>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} component="a" href={`${basename}#${item.link}`}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.menu} />
            </ListItemButton>
          </ListItem>

        ))
        }
      </List >
    </Box >
  );



  const handleMenu = (item) => {
    if (item.page) {
      history.push(item.page)
    }
    const element = document.getElementById(item.link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  }


  return (
    <div className='py-1 sticky top-0 bg-logo bg-contain md:bg-cover bg-no-repeat	 bg-lime-400  md:bg-navbar-texture bg-center bg-origin-content w-full z-1000 shadow-lg shadow-yellow-500/90  first-letter:
    '>

      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo on left */}
        <Typography
          onClick={handleLogo}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
        >
           <div className='w-20 ml-8'>

          <a href="/#carouselContainer">
            <img src="logo.png" alt="logo" className='w-full' ></img>
          </a> 
        </div>

        </Typography>
       

        {/* menuitems on navbar */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div className='flex items-center'>
            <div className='text-white hover:text-yellow-300 font-bold uppercase px-2 cursor-pointer text-sm hover:underline decoration-yellow-300  underline-offset-4' onClick={() => history.push('/why-us')}>Why Us</div>

            {navItems.map((item,) => (
              <Button key={item.menu} sx={{ color: '#fff' }} onClick={() => handleMenu(item)} >
                <span className='font-bold decoration-yellow-300  hover:text-yellow-300 hover:underline underline-offset-4'>{item.menu}</span>
              </Button>
            ))}

            <a className='px-1 py-1 bg-white rounded-md' target="_blank" href='https://forms.gle/dxuAhwdiebbZtTbX7' type="button" rel="noreferrer">
              <span className=' text-green-600 font-bold text-sm uppercase px-2 cursor-pointer'>Register</span>
            </a>

          </div>
        </Box>
      </Toolbar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>


    </div>
  )
}

export default Header
