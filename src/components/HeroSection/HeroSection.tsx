import { Grid,  Box } from '@mui/material';
import React from 'react';
import SubTitle1 from '../SubTitle1/SubTitle1';
import Title4 from '../Title4/Title4';

interface HeroSectionProps {
  title: string;
  subTitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subTitle }) => {
  return (
    <React.Fragment>
      <Grid container spacing={2} py={10} alignItems={'center'}>
      <Grid  item xs={12} md={6}>
        <Title4 text={title}/>
        <SubTitle1 text={subTitle}/>
      </Grid>
      <Grid  item xs={12} md={6}>
        <Box sx={{
          height: '20em',
          borderRadius: '5px',
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
