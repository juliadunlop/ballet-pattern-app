import React from "react";
import Box from '@mui/material/Box';

function View() {
    return (
      <Box
        sx={{
          width: 270,
          height: 200,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    );
  }

export default View;