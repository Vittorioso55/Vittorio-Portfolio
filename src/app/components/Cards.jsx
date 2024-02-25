
import React from 'react';



const Cards = () => {
    return (
      <div className='w-full py-[10rem] px-4 bg-black'>
        <div className='max-w-[1240px] mt-40 mx-auto grid md:grid-cols-3 gap-8 '>
              
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img
              className=' w-full mx-auto mt-[-3rem] bg-white '
              src="/image/Genesi/genesinew2.jpg"
            //   alt="Genesi"
            />
            <div className='text-center font-medium text-white'>
              <p className=' border-b mx-8 mt-1 text-white'>Genesi-01</p>
              <p className=' border-b mx-8 text-white'>Rule: Designer</p>
              <p className=' border-b mx-8 text-white'>2024</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>

          <div className='w-15 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='text-center font-medium text-white'>
            <img
              className=' w-full mx-auto mt-[-3rem] bg-white '
              src="/image/Genesi/genesinew2.jpg"
            //   alt="Genesi"
            />
              <p className=' border-b mx-8 mt-1 text-white'>500 GB Storage</p>
              <p className=' border-b mx-8 text-white'>1 Granted User</p>
              <p className=' border-b mx-8 text-white'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            
           
           
            <img
              className=' w-full mx-auto mt-[-3rem] bg-white '
              src="/image/Genesi/genesinew2.jpg"
            //   alt="Genesi"
            />
            <div className='text-center font-medium text-white'>
              <p className=' border-b mx-8 mt-1 text-white'>500 GB Storage</p>
              <p className=' border-b mx-8 text-white'>1 Granted User</p>
              <p className=' border-b mx-8 text-white'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cards;