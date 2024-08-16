import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState, useEffect } from 'react';
import Video from '@/component/Video';
import Image from '@/component/Image';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import Loading from '@/component/Loading';
const User = () => {
    const [slides, setSlides] = useState([{
        id: 1,
        type: "video",
        url: 'https://videos.pexels.com/video-files/20721021/20721021-uhd_1440_2560_30fps.mp4'
    },
    { id: 2, type: "video", url: 'https://videos.pexels.com/video-files/10034411/10034411-uhd_1440_2732_25fps.mp4' }
        ,
    { id: 3, type: "video", url: 'https://videos.pexels.com/video-files/12861296/12861296-uhd_1440_2560_60fps.mp4' }
    ]);
    const swiper = useSwiper()

    useEffect(() => {
        swiper?.update()
    }, [slides]);

    const addSlide = () => {
        const newSlideId = slides.length + 1;
        setSlides([...slides, { id: newSlideId, type: "img", url: 'https://mt316.99img.biz/uuid/pica/73901.jpg' }]);
    };
    return <div className='h-full'>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className='z-0 my-player-height'
            direction='vertical'
            onSlideChange={() => {
                addSlide()
            }}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id} className='h-full'>
                    {({ isActive, isNext }) => <div className='h-full bg-black'>
                        {
                            slide.type === 'img' ? <Image isActive={isActive} isNext={isNext} data={slide} /> : <Video isActive={isActive} isNext={isNext} data={slide} />
                        }
                    </div>}
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
}

export default User;