import React, { useEffect, useRef } from 'react'


interface VideoProps {
    isActive: boolean;
    isNext: boolean;
    data: {
        id: number | string;
        url: string;
    }
}

const Video: React.FC<VideoProps> = (props) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0
            if (props.isActive) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()

            }
        }
    }, [props.isActive])

    return <video ref={videoRef} preload={props.isNext ? 'preload' : ''}  src={props.data.url} className='h-full w-full' />
}

export default Video;