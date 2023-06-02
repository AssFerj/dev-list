import { Container, Grid } from '@mui/material';
import React from 'react';
import MenuAppBar from '../../components/AppBar/AppBar';


interface DefaultLayoutProps {
  component: React.FC;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ component: Component }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <MenuAppBar/>
      </Grid>

      <Grid item xs={12}>
        <Container sx={{ marginTop: '20px' }}>
          <Component />
        </Container>
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
