import React, { useEffect, useRef, useState, memo } from 'react'
import Loading from '../Loading';

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
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        if (videoRef.current) {
            if (videoRef.current.currentTime !== 0) {
                videoRef.current.currentTime = 0
            }
            if (props.isActive) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }

        }
    }, [props.isActive])

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.onwaiting =  (e) => {
                if (videoRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
                    console.log('can play')
                  } else {
                    setLoading(true)

                  }
            
            }
            videoRef.current.oncanplay = function (e) {
                setLoading(false)
            }
            videoRef.current.onerror = function (e) {
                setLoading(false)
                console.log(props.data.id, 'onerror')
            }
        }
    }, [])


    return <Loading loading={loading}><video loop ref={videoRef} preload={props.isNext ? 'auto' : ''} src={props.data.url} className='h-full w-full' /></Loading>
}

export default memo(Video);