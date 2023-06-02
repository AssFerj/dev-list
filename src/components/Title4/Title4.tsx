import { Typography } from '@mui/material';
import React from 'react';

interface Title4Props {
  text: string;
}

const Title4: React.FC<Title4Props> = ({ text }) => {
  return (
    <React.Fragment>
      <Typography variant='h4'>{text}</Typography>
    </React.Fragment>
  );
};

export default Title4;
