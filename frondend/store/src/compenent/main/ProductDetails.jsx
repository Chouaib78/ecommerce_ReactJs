import { Box,Typography , Button, Stack } from '@mui/material'
import React from 'react'
import { AddShoppingCartOutlined } from "@mui/icons-material";



const ProductDetails =({clickedProduct}) =>{
  return (
 <Box  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2.5,
    flexDirection: { xs: "column", sm: "row" },
  }}>
    <Box sx={{display: "flex"}}>
      <img width={300} src={clickedProduct.attributes.prodectimg} />
    </Box>
    <Box  sx={{textAlign: {xs: "center", sm: "left"}}}>
    <Typography variant="h5">{clickedProduct.attributes.prodecttitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
        {clickedProduct.attributes.prodectdescription}
        </Typography>
        <Typography variant="body1">
          $ {clickedProduct.attributes.prodectprice}
        </Typography>
        <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} direction={"row"} gap={1} my={2}>
        {clickedProduct.attributes.prodectimg.data.map((item) => (
    <img
      style={{ borderRadius: 3 }}
      height={100}
      width={90}
      key={item.id}
      src={item.attributes.url}
      alt=""
    />
  ))}
          
        </Stack>
        <Button sx={{mb: {xs: 1, sm: 0} ,textTransform: "capitalize" }} variant="contained">
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
    </Box>
 </Box>
  )
}
export default ProductDetails;