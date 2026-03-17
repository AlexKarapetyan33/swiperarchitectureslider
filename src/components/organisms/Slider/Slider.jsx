import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from './Slider.module.css'

export const Slider = ({products}) => {
  return (
    <Swiper className={style.slider}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
    >
      {
        products.map((prod) => {
            return <SwiperSlide className={style.swiperslide}>
                <img src={prod.image} alt="" />
                <button>Wuiev Product</button>
            </SwiperSlide>
        })
      }
      
      ...
    </Swiper>
  );
};