import { Grid, Typography, Box } from '@mui/material';
import React from 'react';

interface HeroSectionProps {
  title: string;
  subTitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subTitle }) => {
  return (
    <React.Fragment>
      <Grid container spacing={2} pt={5} alignItems={'center'}>
      <Grid  item xs={12} md={6}>
        <Typography variant='h4'>{title}</Typography>
        <Typography variant='body1'>{subTitle}</Typography>
      </Grid>
      <Grid  item xs={12} md={6}>
        <Box sx={{
          height: '20em',
          borderRadius: '20px',
          backgroundImage: 'url(https://img.freepik.com/fotos-gratis/pessoa-trabalhando-html-no-computador_23-2150038857.jpg?w=1060&t=st=1685719278~exp=1685719878~hmac=86fd2b0d5632b2057ad20118341ad37d629cdaf625336e1dca4d82d64719a862)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
        </Box>
      </Grid>
    </Grid>
    </React.Fragment>
  );
};

export default HeroSection;
