import React from 'react'

const Button = ({text,bgColor,icon}) => {
  return (
    <div style={{
      backgroundColor:bgColor
    }} className= {`w-fit gap-2 flex items-center  p-1 rounded-[5px] text-white`}>
        {icon && icon}
        <p>{text}</p>
    </div>
  )
}

export default Button