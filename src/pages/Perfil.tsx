import { Avatar, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/usersSlice';
import ReturnButton from '../components/ReturnButton/ReturnButton';

const Perfil: React.FC = () => {
  const params = useParams();
  const UsersRedux = useAppSelector(selectAll);
  const findDev = UsersRedux.find(dev => dev.id === params.id);
  
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{
            height: 300, 
            backgroundImage: `${findDev?.banner}`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
            }}
          ></Paper>
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'relative'} top={-250} zIndex={999}>
          <Avatar
            alt={findDev?.name}
            src={findDev?.foto}
            sx={{ width: '40vh', height: '40vh', border: 6, borderColor: '#0091ea' }}
          />
        </Grid>
        <Grid item xs={12} position={'relative'} top={-330}>
        <Paper elevation={2} sx={{
          padding: 3,
          backgroundImage: 'linear-gradient(90deg, rgba(0,100,183,1) 0%, rgba(0,145,234,1) 35%, rgba(100,193,255,1) 100%)'
        }}>
          <Typography variant='h3' color={'#fff'}>{findDev?.name}</Typography>
          <Typography variant='body1' mt={1} color={'#fff'}>{findDev?.age} anos | {findDev?.email}</Typography>
          <Divider sx={{marginTop: 2}} color={'#fff'}/>
          <Typography variant='body1' mt={1} color={'#fff'}>{findDev?.description}</Typography>
        </Paper>
        <ReturnButton text='Voltar para o início'/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Perfil;
