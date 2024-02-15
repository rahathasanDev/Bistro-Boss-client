import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'


const Testomonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <section className='my-20'>
      <Sectiontitle
        heading={'Testimonials'}
        subHeading={'what out client say'}>
      </Sectiontitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          reviews.map(review => <SwiperSlide
            key={review._id}>
            <div className=' flex flex-col items-center mx-24 my-16'>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className='py-4'>{review.details}</p>
              <h3 className="2xl text-orange-500">{review.name}</h3>

            </div>
          </SwiperSlide>)
        }


      </Swiper>

    </section>
  );
};

export default Testomonial;