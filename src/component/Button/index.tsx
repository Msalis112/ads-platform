import React from "react";

interface ButtonProps {
    text?: string;
    icon?: string;
    onClick?: () => void;
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
    return <div onClick={props.onClick} className="px-3 py-1 text-white bg-blue-600 text-sm rounded-full active:opacity-80 select-none flex items-center">
        {
            props.icon && <span className={`${props.children || props.text ? 'mr-1' : ''}`}><img className='w-4 h-4' src={props.icon} /></span>
        }
        {props.text || props.children}
    </div>
}

export default Button;