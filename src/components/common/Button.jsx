import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react';

const Button = ({
  className = '',
  backShadow = false,
  children,
  ...props
}) => {
  return (
    <>
      <div className='flex relative'>
        <HeadlessButton className={`min-w-14 px-3 py-1.5 border-[1.5px] border-black rounded-sm z-10 peer text-sm ${className}`} {...props}>
          {children}
        </HeadlessButton>
        {backShadow && <div className='absolute text-sm min-w-14 px-3 py-1.5 border-[1.5px] border-black rounded-sm text-black bg-black mt-0.5 ml-0.5 peer-hover:mt-1 peer-hover:ml-1 transition-all'>
          {children}
        </div>}
      </div>
    </>
  )
}

export default Button;