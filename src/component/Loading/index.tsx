import React from 'react'

interface IProps {
    loading?: boolean;
    children?: React.ReactNode;
}

const Loading: React.FC<IProps> = ({ loading, children }) => {
    return <div className='relative h-full'>
        {children}
        {
            loading && <div className='absolute left-1/2 top-1/2'>Loading...</div>
        }
    </div>
}

export default Loading;