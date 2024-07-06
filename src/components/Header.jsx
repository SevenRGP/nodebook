import React from 'react';
import Logo from '../assets/Logo.svg';
import { Button } from './index';

const Header = () => {
  return (
    <>
      <header className='w-full flex items-center justify-center'>
        <nav className='w-full max-w-[1200px] flex items-center justify-between p-2'>
          <div className='h-7'>
            <img src={Logo} alt="Logo" className='h-full' />
          </div>

          <div className='flex'>
            <Button backShadow={true} className='bg-white'>Login</Button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;