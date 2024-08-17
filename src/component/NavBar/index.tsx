import { Link } from 'react-router-dom'

import HomeIcon from '@/assets/home.png'
import RocketIcon from '@/assets/rocket.png'
import UserIcon from '@/assets/user.png'
import { useState } from 'react'


const NavBar = () => {
    const [active, setActive] = useState('home')
    const list = [
        {
            key: "user",
            icon: UserIcon,
            name: "User"
        },
        {
            key: "rocket",
            icon: RocketIcon,
            name: "Rocket"
        },
        {
            key: "home",
            icon: HomeIcon,
            name: "Home"
        },

    ]
    return <div className='flex justify-between items-center w-full px-8 select-none bg-gray-950 my-nav-height'>
        {
            list.map(item => <Link to={item.key} key={item.key}> <div className={active === item.key ? 'text-white' : 'text-gray-400'} onClick={() => {
                setActive(item.key)
            }}>
                <span className='text-xs'>{item.name}</span>
                {/* <img src={item.icon} className='size-5 bg-blend-multiply' alt="" /> */}
            </div></Link>)
        }
    </div>
}

export default NavBar;