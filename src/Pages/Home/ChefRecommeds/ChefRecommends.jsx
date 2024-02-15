import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import sliderimg1 from '../../../assets/home/slide1.jpg'
import sliderimg2 from '../../../assets/home/slide2.jpg'
import sliderimg3 from '../../../assets/home/slide3.jpg'

const ChefRecommends = () => {
  return (
    <div>
      <Sectiontitle heading={"Chef Recommends"} 
      subHeading={"You should try"}></Sectiontitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={sliderimg1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderimg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderimg3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderimg1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderimg2} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default ChefRecommends;