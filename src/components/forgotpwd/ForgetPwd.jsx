import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const ForgetPwd = () => {
  return (
    <Box>
      <Card sx={{ p: 2 }}>
        <img src="instagram.png" alt="image not found" height="40px" />
      </Card>
      <Box>
        <img src="lockIcon.png" alt="image not found" height="40px" />
        <Typography>Trouble logging in?</Typography>
        <Typography>Enter your email phone,or username and we'll send you a link to get back into your account.</Typography>
        
      </Box>
    </Box>
  );
}

export default ForgetPwd