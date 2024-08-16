import React, { useEffect, useRef, useState, memo } from 'react'


interface VideoProps {
    isActive: boolean;
    isNext: boolean;
    data: {
        id: number | string;
        url: string;
    }
}

const Image: React.FC<VideoProps> = (props) => {

    return <img src={props.data.url} className='h-full w-full' />
}

export default memo(Image);