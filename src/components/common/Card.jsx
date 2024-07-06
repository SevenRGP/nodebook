import React from 'react';

const Card = ({
  className = '',
  image = 'https://picsum.photos/seed/picsum/200/300',
  title = '',
  ...props
}) => {
  return (
    <>
      <div className={`min-w-[280px] p-2 ${className}`} {...props}>
        <div className='w-full'>
          <img src={image} alt={title} className='w-full max-h-[160px]' />
        </div>
        <p className='text-base font-medium overflow-hidden whitespace-nowrap text-ellipsis'>{title}</p>
      </div>
    </>
  )
}

export default Card;