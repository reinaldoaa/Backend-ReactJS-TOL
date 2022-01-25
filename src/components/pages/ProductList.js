import React from 'react'
import CategoryTitle from './CategoryTitle';
import ProdutCard from './ProdutCard';

const ProductList = ({heading,data}) => {
    return (
        <div className="xl:px-0 px-8">
        <div className="flex justify-between items-center py-5">
          <CategoryTitle  contenido={heading} />
          <button className="text-blue-500 font-semibold">Ver todos</button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4  rounded-md ">
          {data.map( (product,key)=>{
            return <ProdutCard key={product.id} item={product} />
          }) }
        </div>
      </div>

    )
}

export default ProductList
