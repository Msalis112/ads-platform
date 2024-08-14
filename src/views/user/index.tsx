import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState, useEffect } from 'react';
import Video from '@/component/Video';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
const User = () => {
    const [slides, setSlides] = useState([{
        id: 1,
        url: 'https://v26-web-prime.douyinvod.com/video/tos/cn/tos-cn-ve-15/oIWICEDqgAYaAtyXeifi4zBBsFVZriATUGqNQv/?a=6383&ch=5&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=462&bt=462&cs=0&ds=6&ft=AQHeBxbkRR0sTlC42Dv2Nc.xBiGNbL60sbsU_40c09q2Nv7TGW&mime_type=video_mp4&qs=12&rc=NWc2ZWg7M2hnNjM6ODo1M0BpanE8cmw5cjlqdDMzNGkzM0AzYl9fNTExNmAxXy9iNF8tYSNpM2lqMmRzbGtgLS1kLS9zcw%3D%3D&btag=c0000e00028000&cquery=101s_100B_100D_100J_100o&dy_q=1723550207&expire=1723561097&feature_id=46a7bb47b4fd1280f3d3825bf2b29388&l=202408131956469D8AC05647F49316A4E9&ply_type=4&policy=4&signature=49073c87c6a8689b3157cd11e38f2a6c&tk=webid&webid=fa6cda412c16c7667c793c3549025f122b064c8fecfdcae9cd663ea2db1893d23c0ef35657a0d3424e5f9c9f3f1fd578290e251d6e39bc416906558b9f92750f42b620be77177e704d5adb3de747bcec9bf6309fd6fa3422abd892698db56f508e6f57656bb6b942f7b00665080bcbe1de43330dc7d4536a0684518be79746f26940f902a9a59da32b3170aa0e1b09e498dd19371d5809fae66f182f6c341751-c523b4381fda498f6cc6d946061c51cb&fid=cd7a65e5b80b956206d6a9d6f960b34b&__vid=7399145963866049829'
    },
    { id: 2, url: 'https://v26-web-prime.douyinvod.com/video/tos/cn/tos-cn-ve-15/oMPmJNA5LAv1g9u1gQFkifNDlfMCwoTEAABcWI/?a=6383&ch=5&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=596&bt=596&cs=0&ds=6&ft=AQHeBxbkRR0sTlC42Dv2Nc.xBiGNbL~fCbsU_40c09q2Nv7TGW&mime_type=video_mp4&qs=12&rc=OWdnNTRmM2RkOWk3O2QzM0BpMzRtc3Q5cjxtdDMzNGkzM0AzXjAwNjAtXi4xYDVjYjFjYSM2ZGdnMmRjLTFgLS1kLWFzcw%3D%3D&btag=c0000e00028000&cquery=100K_100o_101s_100B_100H&dy_q=1723554351&expire=1723565231&feature_id=46a7bb47b4fd1280f3d3825bf2b29388&l=202408132105493CFF4BF2FDF84C21C74B&ply_type=4&policy=4&signature=352857f5fa1b18340b2f592a75eace42&tk=webid&__vid=7388489668393782554&webid=fa6cda412c16c7667c793c3549025f122b064c8fecfdcae9cd663ea2db1893d23c0ef35657a0d3424e5f9c9f3f1fd578290e251d6e39bc416906558b9f92750f42b620be77177e704d5adb3de747bcec9bf6309fd6fa3422abd892698db56f508e6f57656bb6b942f7b00665080bcbe1de43330dc7d4536a0684518be79746f26940f902a9a59da32b3170aa0e1b09e498dd19371d5809fae66f182f6c341751-6e7df5c4df40542b621d69f6237df68a&fid=cd7a65e5b80b956206d6a9d6f960b34b' }
        , 
        { id: 3, url: 'https://v3-web-prime.douyinvod.com/video/tos/cn/tos-cn-ve-15/oEmaCM8MLBBIFAF9qAeE732QBvAvgTfODuYDE7/?a=6383&ch=5&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=805&bt=805&cs=0&ds=6&ft=AQHeBxbkRR0sTlC42Dv2Nc.xBiGNbLQ2WSsU_40c09q2Nv7TGW&mime_type=video_mp4&qs=12&rc=O2Y8OTVpZWZpZ2VmNjgzNUBpajR5Om85cjU4dDMzNGkzM0A0MTMtLmEuXjUxMS1gMi9eYSNxcGIwMmRza3JgLS1kLS9zcw%3D%3D&btag=c0000e00008000&cquery=100o_101s_100B_100x_100z&dy_q=1723635826&expire=1723646640&feature_id=46a7bb47b4fd1280f3d3825bf2b29388&l=2024081419434486CD3FDB27C07104E09C&ply_type=4&policy=4&signature=de0f9042dc4f5c8bcdcc606e394c77f0&tk=webid&__vid=7402892566431124774&webid=fa6cda412c16c7667c793c3549025f122b064c8fecfdcae9cd663ea2db1893d23c0ef35657a0d3424e5f9c9f3f1fd578290e251d6e39bc416906558b9f92750f42b620be77177e704d5adb3de747bcec9bf6309fd6fa3422abd892698db56f508e6f57656bb6b942f7b00665080bcbe1de43330dc7d4536a0684518be79746f26940f902a9a59da32b3170aa0e1b09e498dd19371d5809fae66f182f6c341751-d970830ff63f55cee23c029b6a8ffd1b&fid=cd7a65e5b80b956206d6a9d6f960b34b' }
    ]);
    const swiper = useSwiper()

    useEffect(() => {
        swiper?.update()
    }, [slides]);

    const addSlide = () => {
        const newSlideId = slides.length + 1;
        setSlides([...slides, { id: newSlideId, url: 'https://v26-web-prime.douyinvod.com/video/tos/cn/tos-cn-ve-15/o4IA6NeBHCDBAA7Y4JEAiFEBtIDzddQPvfHfGE/?a=6383&br=387&bt=387&btag=c0000e00010000&cd=0%7C0%7C0%7C3&ch=5&cquery=100H_100K_100o_101s_100B&cr=3&cs=0&cv=1&dr=0&ds=6&dy_q=1723554071&expire=1723564892&feature_id=46a7bb47b4fd1280f3d3825bf2b29388&ft=AQHeBxbkRR0sTlC42Dv2Nc.xBiGNbLgyCbsU_40c09q2Nv7TGW&is_ssr=1&l=202408132101096667A906A601381D9718&lr=all&mime_type=video_mp4&ply_type=4&policy=4&qs=12&rc=M2U8aGZmOjszNjQzOWdkZkBpandtdXY5cmk0dDMzNGkzM0BgNS02XjVfNmMxNjQuMi0wYSMwcC1fMmRzb3FgLS1kLS9zcw%3D%3D&signature=a7b7ab24819555729b78fa39ddf09f5d&tk=webid&__vid=7402262252276976947&webid=fa6cda412c16c7667c793c3549025f122b064c8fecfdcae9cd663ea2db1893d23c0ef35657a0d3424e5f9c9f3f1fd578290e251d6e39bc416906558b9f92750f42b620be77177e704d5adb3de747bcec9bf6309fd6fa3422abd892698db56f508e6f57656bb6b942f7b00665080bcbe1de43330dc7d4536a0684518be79746f26940f902a9a59da32b3170aa0e1b09e498dd19371d5809fae66f182f6c341751-b32c562de10d51b32d147e030f6cc44e&fid=cd7a65e5b80b956206d6a9d6f960b34b' }]);
    };
    return <div className='h-full bg-blue-500'>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className='h-full z-0'
            direction='vertical'
            onSlideChange={() => {
                addSlide()
            }}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id} className='h-full'>
                    {({ isActive, isNext }) => <div className='h-full bg-black'>
                        <Video isActive={isActive} isNext={isNext} data={slide} />
                    </div>}

                </SwiperSlide>
            ))}
        </Swiper>
    </div>
}

export default User;