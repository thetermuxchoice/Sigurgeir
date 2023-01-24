import React, { useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useFetch } from '../../customHooks/useFetch';
import { Card } from '../Card.jsx/Card';
import '../../styles/slider.css';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Slider = () => {

  const {data, isLoading, error} = useFetch('https://api.escuelajs.co/api/v1/products');
  let productsList= [];
  if (data) productsList = [...data.slice(1, 16)];

  return (
    <div className='sliderContainer' id='slider'>      
      {
        isLoading ?
        <div>
          Loading content...
        </div>
        :
        error ?
        <div>
          The was an error...
        </div>
        :
        <div className='slides'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={false}
            breakpoints={{
              900:{
                width:800,
                slidesPerView: 2,
                spaceBetween:100
              },
              1000:{
                width:1000,
                slidesPerView: 2,
                spaceBetween:130,
              },
              1200: {
                  width: 1200,
                  slidesPerView: 3,
                  spaceBetween:130
              }
          }}
            pagination={{ clickable: true }}            
            spaceBetween={100}
            slidesPerView={1}
            className='controller'
            style={{
              width:'90vw',
              height:'450px',
              paddingLeft:'20px',
              paddingRight:'0px',
          
            }}>
              {productsList.map((product, index)=>{
                return(
                  <div key={index+product.price}>
                    <SwiperSlide key={index+1}>
                      <Card 
                        key={index+product.title}
                        title={product.title}
                        price={product.price}
                        images={product.images}
                      />
                    </SwiperSlide>
                  </div>                  
                )
              })
              }
            </Swiper>
        </div>
      }
    </div>
  )
}
