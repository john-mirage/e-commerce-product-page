import {Container, Image} from "@components/gallery/gallery.style";
import { Swiper, SwiperSlide } from 'swiper/react';
import productImage1 from "@assets/images/image-product-1.jpg";
import productImage2 from "@assets/images/image-product-2.jpg";
import productImage3 from "@assets/images/image-product-3.jpg";
import productImage4 from "@assets/images/image-product-4.jpg";

import 'swiper/css';

function Gallery() {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image src={productImage1} alt="product image"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={productImage2} alt="product image"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={productImage3} alt="product image"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={productImage4} alt="product image"/>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Gallery;