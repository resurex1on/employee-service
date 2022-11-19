import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import QuizIcon from '@mui/icons-material/Quiz';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BarChartIcon from '@mui/icons-material/BarChart';
import PanToolIcon from '@mui/icons-material/PanTool';
import TaskIcon from '@mui/icons-material/Task';
import './Header.css';
import { Link } from 'react-router-dom';

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(() => {
      return JSON.parse(localStorage.getItem('userData'))
    })
  }, []);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to='/profile'> <MenuItem onClick={handleMenuClose}>Profile</MenuItem> </Link>
      <Link to='/login'> <MenuItem onClick={handleMenuClose}>Log out</MenuItem> </Link>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className='logo-typography'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/home'>
              Employee service
            </Link>
          </Typography>

          <Link to='/tests'>
            <IconButton
              size="large"
              edge="end"
              aria-label="Tests"
              aria-haspopup="true"
              color="inherit"
              className='header-button-link'
            >

              <QuizIcon />
              <Typography
                variant="subtitle1"
                noWrap
                component="div"
                className='icon-label'
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                Tests
              </Typography>
            </IconButton>
          </Link>

          <Link to='/tasks'>
            <IconButton
              size="large"
              edge="end"
              aria-label="Tests"
              aria-haspopup="true"
              color="inherit"
              className='header-button-link'
            >

              <TaskIcon />
              <Typography
                variant="subtitle1"
                noWrap
                component="div"
                className='icon-label'
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                Tasks
              </Typography>
            </IconButton>
          </Link>

          

          <Link to='/feedback'>
            <IconButton
              size="large"
              edge="end"
              aria-label="Tests"
              aria-haspopup="true"
              color="inherit"
              className='header-button-link'
            >

              <PanToolIcon />
              <Typography
                variant="subtitle1"
                noWrap
                component="div"
                className='icon-label'
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                High five
              </Typography>
            </IconButton>
          </Link>
          <Link to='/1-on-1s'>
            <IconButton
              size="large"
              edge="end"
              aria-label="1-on-1s"
              aria-haspopup="true"
              color="inherit"
              className='header-button-link'
            >
              <MessageIcon />
              <Typography
                variant="subtitle1"
                noWrap
                component="div"
                className='icon-label'
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                1-on-1s
              </Typography>
            </IconButton>
          </Link>

          <Link to='/statistic'>
            <IconButton
              size="large"
              edge="end"
              aria-label="Statistic"
              aria-haspopup="true"
              color="inherit"
              className='header-button-link'
            >
              <BarChartIcon />
              <Typography
                variant="subtitle1"
                noWrap
                component="div"
                className='icon-label'
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                Statistic
              </Typography>
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
              {(userData && userData.name) ? userData.name : ''}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box >
  );
}