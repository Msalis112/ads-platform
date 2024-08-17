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
    const videoEnd = useRef<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    function onCanPlay() {
        if (videoEnd.current) return
        setLoading(false)
        console.log('oncanplay')
    }

    function onWaiting() {
        if (videoEnd.current) return
        setLoading(true)
        console.log('loading...')
    }

    function onEnded() {
        videoEnd.current = true
        startPlay()
    }

    function startPlay() {
        if (!videoRef.current) return
        if (videoRef.current.currentTime > 0) {
            videoRef.current.currentTime = 0
        }
        videoRef.current.play()
    }

    function pause() {
        if (!videoRef.current) return
        videoRef.current.pause()
    }

    function togglePlay() {
        if (props.isActive) {
            startPlay()
        } else {
            pause()
        }
    }

    function removeEvent() {
        if (!videoRef.current) return
        videoRef.current.onwaiting = null
        videoRef.current.oncanplay = null
        videoRef.current.onended = null
        videoEnd.current = false
    }

    function videoEvent() {
        if (!videoRef.current) return
        videoRef.current.onwaiting = onWaiting
        videoRef.current.oncanplay = onCanPlay
        videoRef.current.onended = onEnded
    }

    function eventListener() {
        if (props.isActive) {
            videoEvent()
        } else {
            removeEvent()
        }
    }

    // 播放
    useEffect(togglePlay, [props.isActive])

    // 监听事件
    useEffect(eventListener, [props.isActive])


    return <Loading loading={loading}><video ref={videoRef} preload={props.isNext ? 'auto' : 'none'} src={props.data.url} className='h-full w-full' /></Loading>
}

export default memo(Video);