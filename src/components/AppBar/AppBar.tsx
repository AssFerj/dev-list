import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DvrIcon from '@mui/icons-material/Dvr';
import { useAppSelector } from '../../store/hooks';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';
import { selectAll } from '../../store/modules/usersSlice';
import { useMemo } from 'react';
import { Avatar, Button } from '@mui/material';
import { persistor } from '../../store/store';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const logedUser = useAppSelector(state => state.userReducer);
  const UsersRedux = useAppSelector(selectAll);
  const findUser = UsersRedux.find(dev => dev.email === logedUser.email);
  const navigate = useNavigate();
  
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    persistor.purge();
    navigate('/');
  };
  const infoUser = useMemo(() => {
    if(findUser){
      return (
        <>
          <Typography variant="body1" mr={1}>
                Olá!
              </Typography>
              <Typography variant='body1'>{findUser.name}</Typography>
              <Avatar
                alt={findUser?.name}
                src={findUser?.foto}
                sx={{ marginLeft: 1, cursor: 'pointer' }}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              />
        </>
      );
    }
    return <Button type='button' variant='outlined' color='inherit' onClick={()=>navigate('/login')}>Entrar</Button>;
    
  },[findUser]);

  return (

      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <DvrIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dev List
          </Typography>
          {auth && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {infoUser}
              <Menu
                sx={{ mt: 7, ml: 2 }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Sair</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>

  );
}
