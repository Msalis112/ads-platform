import React from "react";


const Avatar: React.FC<{ name?: string }> = ({ name }) => {
    return <div className="avatar flex items-center">
        <div className='w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mr-2'></div>
        <div className="text-white text-sm">{name}</div>
    </div>
}

export default Avatar;