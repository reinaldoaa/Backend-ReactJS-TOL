import React from 'react';
//import MdOutlineShoppingCart from 'react-icons/md';

export default function ProdutCard ({item}) {
  //  export default function ProductCard({item}) {
        const {image, title ,desc, price }=item;
        const renderTitle = (title) => {
            return title.length > 80 ? title.substr(0, 80).trim() + "..." : title;
          };
        
        const renderDesc=(desc)=> {
        return desc.length> 100 ? desc.substr(0,100).trim()+"..." : desc;};
            

        return (
            <div className="flex flex-col justify-between cursor-pointer">
                <div className='bg-gray-100 rounded-full aspect-w-1 aspect-h-1'>
                    <img src={image} alt="Product" /> {/* "./images/banner_left.png" */}
                </div>
                <h1 className='font-semibold'>{renderTitle(title)}</h1>
                <p className=' text-xs text-gray-500'>{renderDesc(desc)}</p>
                <p className=' font-semibold text-gray-700'>${price}</p>
                <div className="flex justify-between items-center">
                    {/* <MdOutlineShoppingCart className='bg-gray-800 rounded-lf-full text-white p-1 w-8 h-8'/> */}
                    {/* <AiOutlineHeart className='bg-gray-800 rounded-full text-white p-1 w-8 h-8'/> */}
                    <p className='bg-gray-800 rounded-lf text-white p-1 w-8 h-8'>o </p>
                    <button className='bg-gray-800 text-white px-2 rounded py-1'>
                        Buy Now
                    </button>
                </div>
            </div>
    
    
        )
    

};  

