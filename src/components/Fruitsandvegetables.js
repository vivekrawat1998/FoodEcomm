import React from 'react';

const Fruitsandvegetables = () => {
  return (
    <div className='container pt-8'>
      <div className='lg:flex justify-between items-center'>
      <div className='space-y-2'>
        <h1 className='font-medium text-2xl'>Fruits & Vegetables</h1>
        <p className='text-gray-500'>Buy farm fresh fruits and vegetables online at the best prices</p>
      </div>
      <div className='list-none space-x-4'>
         <button className='item-btn'>Fruits</button>
         <button>Vegetables</button>
         <button>Bread & Bakery</button>
      </div>
      </div>
    </div>
  );
}

export default Fruitsandvegetables