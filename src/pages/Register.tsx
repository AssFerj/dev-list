import { Box, Grid, Avatar, Paper, Typography } from '@mui/material';
import React from 'react';
import TaskIcon from '@mui/icons-material/Task';
import Copyright from '../components/Copyright/Copyright';
import Registerform from '../components/RegisterForm/RegisterForm';

const Register: React.FC = () => {
  return (
    <React.Fragment>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <TaskIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Dev-List
            </Typography>
            <Registerform />
          </Box>
          <Copyright />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Register;
