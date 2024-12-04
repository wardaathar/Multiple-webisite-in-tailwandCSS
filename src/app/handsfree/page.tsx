import Image from 'next/image';
import React from 'react'

const handsfree = () => {

  const handsfreeData =[
    {id:1 ,name:'Black Wiresless', price:'5', description:'More colors,sizes are availables', image:'/blackwireless.png'},
    {id:2 ,name:'Red Wireless', price:'10', description:'More colors,sizes are availables', image:'/redblue.png'},
    {id:3,name:'Blue & Red', price:'10', description:'More colors,sizes are availables', image:'red.png'},
    {id:4 ,name:'Wireless Magnet', price:'60', description:'More colors,sizes are availables', image:'/wirelessmagnet.png'},
    {id:5 ,name:'Wirelesssansar.png', price:'80', description:'More colors,sizes are availables', image:'/wirelesssansar.png'},
    {id:6 ,name:'New In Purple', price:'30', description:'More colors,sizes are availables', image:'/Newpurple.png'},


  ]
  return (
     
        <div className="handsfree grid grid-cols-1 md:grid-cols-3 gap-10 my-10" style={{ backgroundImage: "url('proxy-image.png')" }} >
          {handsfreeData.map((handsfree) => (
            <div key={handsfree.id} className="handsfree-card bg-white p-5 rounded-md shadow-md text-center">
              <Image src={handsfree.image} alt={handsfree.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"/>
              <h3 className='mt-4 text-2xl font-bold'>{handsfree.name}</h3>
              <p className='text-gray-600'>{handsfree.description}</p>
              <div className='price text-orange-500 text-xl font-semibold mt-2'>${handsfree.price}</div>
              <button className='mt-4 px-4 py-2  hover:bg-slate-600 bg-blue-500 text-white rounded-md'>Add to Card</button>
            </div>
          

          )) }
        
    </div>
  );
} ;

export default handsfree