// @ts-nocheck
import {
  Box,
  Container,
  Dialog,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Rating from "@mui/material/Rating";
import { Slide, DialogContent } from "@mui/material";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function main() {
  const [alignment, setAlignment] = React.useState("left");
  const handleAlignment = (event, newValue) => {
    setAlignment(newValue);
    setmyDate(newValue);
  };
  
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProductsAPI ="products?populate=*";
  const menCategorie ="products?populate=*&filters[protectcategory][$eq]=men";
  const womenCategorie ="products?populate=*&filters[protectcategory][$eq]=women";

  const [myDate, setmyDate] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myDate);
  const [clickedProduct, setclikedProduct] = useState({});
  if (isLoading) {
    return "loading........";
  }
  if (error) {
    console.error("ooops", error);
    return "problem";
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
  color="error"
  value={myDate}
  exclusive
  onChange={handleAlignment}
  aria-label="text alignment"
>
  <ToggleButton
    className="mybutton"
    value={allProductsAPI}
    aria-label="left aligned"
  >
    All Product
  </ToggleButton>
  <ToggleButton
    sx={{ mx: "16px !important" }}
    className="mybutton"
    value={menCategorie}
    aria-label="centered"
  >
    Men Categorie
  </ToggleButton>
  <ToggleButton
    className="mybutton"
    value={womenCategorie}
    aria-label="right aligned"
  >
    Women Categorie
  </ToggleButton>
</ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  maxWidth: 320,
                  mt: 5,
                  ":hover .MuiCardMedia-root": {
                    rotate: "4deg",
                    scale: "1.1",
                    transition: "0.3s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 300 }}
                  image={`http://localhost:1337${item.attributes.prodectimg.data[0].attributes.url}`}
                  title="green iguana"
                />
                <CardContent sx={{ justifyContent: "space-between" }}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.prodecttitle}
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                      ${item.attributes.prodectprice}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.prodectdescription}
                  </Typography>
                </CardContent>
                <CardActions >
                  <Button
                    onClick={() => {
                      handleClickOpen();
                      setclikedProduct(item);
                    }}
                    fontSize="large"
                  >
                    <AddShoppingCartOutlinedIcon
                      sx={{ mr: 1 }}
                      fontSize="small"
                    />
                    Add to cart
                  </Button>
                  <Rating
                    precision={0.5}
                    name="read-only"
                    value={item.attributes.prodectrating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>
        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              color: "red",
              transform: "rotate(180deg)",
              transition: "color 0.3s, transform 0.3s",
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails 
// @ts-ignore
          clickedProduct={clickedProduct} />
        </Dialog>
      </Container>
    );
  }
}
