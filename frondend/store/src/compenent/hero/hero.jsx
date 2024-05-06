import { Box, Container,  Link, Typography } from '@mui/material'
import React from 'react'
import  { useRef, useState } from 'react';
// Import Swiper React components
import './slider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function hero() {
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center",gap:2 }}>
     
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src='src\image-hero\banner-15.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='src\image-hero\banner-25.jpg'/>
        </SwiperSlide>
        
       
      </Swiper>
     

      <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }} >
        <Box sx={{ position: "relative" }}>

          <img width={"100%"} src="src\image-hero\banner-17.jpg" alt="" />

          {/* وضع النصوص فوق الصورة */}
          <Box sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: 31,
          }}>
            <Typography
              variant='caption'
              sx={{
                color: "black",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant='h6'
              sx={{
                color: "black",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            
          </Box>
        </Box>

        <Box sx={{ position: "relative" }}>
      <img width={"100%"} src="src\image-hero\banner-16.jpg" alt="" />

      {/* Positionnement des typographies sur l'image */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: 31,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "#2B3445",
            fontSize: "18px",
            fontWeight: 300,
          }}
        >
          GAMING 4K
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#2B3445",
            lineHeight: "16px",
            mt: 1,
          }}
        >
          DESKTOPS &
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#2B3445",
          }}
        >
          LAPTOPS
        </Typography>
        
        <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
        
      </Box>
    </Box>
      </Box>
    </Container>
  )
}
