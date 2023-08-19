import './css/landing.css';

import LandingImg1 from './images/landing1.webp';
import LandingImg2 from './images/landing2.webp';


import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';

import {Autoplay} from 'swiper';


function Landing(){
    return(
        <>
            <section className='landing'>
                <div className='landing-content'>
                    
                <Swiper  grabCursor={true} spaceBetween={50} slidesPerView={1} 
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    >


            
                        <SwiperSlide>
                            <img src={LandingImg1}/>

                        </SwiperSlide>

                        <SwiperSlide>
                        <img src={LandingImg2}/>

                        </SwiperSlide>
                        
                    
                </Swiper>
            

                    <div className='text'>
                        <h1> 
                            Let’s Learn English Together
                        </h1>

                        <p> The place where we all come together to learn English in a spirit of collaboration and inspiration. This platform represents an educational community based on interaction and sharing, as we seek to grow and develop together in the language world. </p>

                        <div className='landing-links'>


                            <a href="#websites">
                                Global websites
                            </a>

                            <a href="#worksheets">
                                Worksheets
                            </a>

                            <a href="#videos">
                                Learning videos
                            </a>

                            <a href="#dictionary">
                                Dictionary
                            </a>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing;