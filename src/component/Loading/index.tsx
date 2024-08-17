import LoadingGif from '@/assets/loading.gif'
import React from 'react'
interface IProps {
    loading?: boolean;
    children?: React.ReactNode;
}

const Loading: React.FC<IProps> = ({ loading, children }) => {
    return <div className='relative h-full'>
        {children}
        {
            loading && <div className={`absolute w-28 h-28 left-1/2 top-1/2 bg-loading -translate-x-1/2 -translate-y-1/2`}></div>
        }
    </div>
}

export default Loading;