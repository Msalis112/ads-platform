import React from "react";

interface ButtonProps {
    text?: string;
    onClick?: () => void;
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
    return <div onClick={props.onClick} className="px-3 py-1 text-white bg-blue-600 rounded-full active:opacity-80 select-none">
        {props.text || props.children}
    </div>
}

export default Button;