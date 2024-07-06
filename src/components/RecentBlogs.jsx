import React from 'react';
import { Container, Card } from './index';

const RecentBlogs = () => {
  return (
    <>
      <div className='p-4'>
        <h2 className='text-3xl mb-3 text-center font-medium'>Recent Posts</h2>
        <div className='w-full flex justify-center'>
          <Container className='max-w-[1200px]'>
            <Card />
            <Card />
            <Card />
            <Card />
          </Container>
        </div>
      </div>
    </>
  )
}

export default RecentBlogs;