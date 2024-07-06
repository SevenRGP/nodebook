import React from 'react';
import Button from './common/Button';

const Hero = () => {
  return (
    <>
      <section className='w-full p-7 bg-green-100'>
        <div className='mx-auto'>
          <h1 className='text-5xl text-center'>Welcome, <span className='font-semibold'>Seven</span></h1>
          <p className='text-lg text-center'>to NodeBook</p>
          <Button className='bg-black text-white hover:bg-transparent hover:text-black mx-auto transition mt-3'>Write a Post</Button>
        </div>
      </section>
    </>
  );
};

export default Hero;