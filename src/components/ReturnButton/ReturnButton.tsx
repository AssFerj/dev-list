import { Button } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ReturnButtonProps {
  text: string;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ text }) => {
    const navigate = useNavigate();
  return (
    <React.Fragment>
        <Button 
          sx={{marginTop: 1}} 
          onClick={()=>navigate('/home')}>
            <KeyboardDoubleArrowLeftIcon sx={{marginRight: 1}} />{text}</Button>
    </React.Fragment>
  );
};

export default ReturnButton;
