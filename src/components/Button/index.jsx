import React from 'react'

const Button = ({text,bgColor,icon,align}) => {
  return (
    <div style={{
      backgroundColor:bgColor
    }} className= {`w-fit gap-2 flex items-center  p-1 rounded-[5px] text-white`}>
        {align =="left" ?
          <div className='flex items-center gap-2'>
            {icon && icon}
            <p>{text}</p> 
          </div>
          :
          <div className='flex items-center gap-2'>
            <p>{text}</p>
            {icon && icon}
          </div>
        }
        
    </div>
  )
}

export default Button