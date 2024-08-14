import { Link } from 'react-router-dom'

import HomeIcon from '@/assets/home.png'
import RocketIcon from '@/assets/rocket.png'
import UserIcon from '@/assets/user.png'
import { useState } from 'react'


const NavBar = () => {
    const [active, setActive] = useState('home')
    const list = [
        {
            key: "home",
            icon: HomeIcon,
        },
        {
            key: "rocket",
            icon: RocketIcon,
        },
        {
            key: "user",
            icon: UserIcon,
        },
    ]
    return <div className='flex justify-between w-full px-10 py-5 select-none'>
        {
            list.map(item => <Link to={item.key} key={item.key}> <div className={active === item.key ? 'bg-white rounded-full p-2 transition-all' : 'p-2'} onClick={() => {
                setActive(item.key)
            }}>
                <img src={item.icon} className='size-5 bg-blend-multiply' alt="" />
            </div></Link>)
        }
    </div>
}

export default NavBar;