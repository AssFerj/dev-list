import { Grid, Typography, Box } from '@mui/material';
import React, { useMemo } from 'react';
import { devs } from '../../database/devs';

interface ListDevSectionProps {
  title: string;
  subTitle: string;
}

const ListDevSection: React.FC<ListDevSectionProps> = ({ title, subTitle }) => {

  const listDevs = useMemo(() => {
    return devs.map(d => d.devs).toString();
  },[devs]);

  return (
    <React.Fragment>
      <Grid container spacing={2} pt={5} alignItems={'center'}>
      <Grid  item xs={12}>
        <Typography variant='h4' textAlign={'center'}>{title}</Typography>
        <Typography variant='body1' textAlign={'center'}>{subTitle}</Typography>

        {listDevs}
      </Grid>
    </Grid>
    </React.Fragment>
  );
};

export default ListDevSection;
