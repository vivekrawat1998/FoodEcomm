import React from 'react';
import CategoriesCard from './CategoriesCard';

const Catergories = () => {
    const data =[
        {
            id: 0,
            name: "Fresh Fruits",
            counts: "9 Products",
            image: "/category__1 (1).webp"
        },
     {  id: 1,
            name: "Fresh Vegs",
            counts: "8 Products",
            image: "/category__1.webp"
        },
         {   id: 2,
            name: "Canned Goods",
            counts: "10 Products",
            image: "/category__2.webp"
        },
         {   id: 3,
            name: "Bread & Bakery",
            counts: "11 Products",
            image: "/category__3.webp"
        },{
            id: 4,
            name: "Fishes",
            counts: "4 Products",
            image: "/category__4.webp"
        },
           { id: 5,
            name: "Eggs & Dairy",
            counts: "7 Products",
            image: "/category__5.webp"
        },
          {  id: 6,
            name: "Soft Drinks",
            counts: "11 Products",
            image: "/category__6.webp"
        },
         {   id: 7,
            name: "Fresh Fruits",
            counts: "9 Products",
            image: "/category__1 (1).webp"
        }
    ]
  return (
    <div className=' container pt-10 '>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {data.map((el => <CategoriesCard
        key={el.id}
        name={el.name}
        counts={el.counts}
        image={el.image}/>))}    
  </div>
    </div>
  );
}

export default Catergories