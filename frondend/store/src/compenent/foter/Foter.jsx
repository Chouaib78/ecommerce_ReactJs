import React from 'react'
import { Box, Button, Typography } from '@mui/material';
export default function foter() {
  return (
    <Box
    sx={{
     
      bgcolor: "#2B3445",
      py: 0.1,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    }}
  >
    <Typography
      justifyContent={"center"}
      display={"flex"}
      alignItems={"center"}
      color={"HighlightText"}
      variant="h6"
      sx={{fontSize: 14}}
    >
     Developed by
      <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          Nasri Chouaib
        </Button>
      ©2024
    </Typography>
  </Box>
  )
}