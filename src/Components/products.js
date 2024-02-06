import React, { useEffect, useState } from "react";
import ProductsCart from "./productsCart";

function Products() {
    const [data,setData] = useState([])
    useEffect(()=>{

        fetch('http://fakestoreapiserver.reactbd.com/products').then((response)=>{

              return response.json()
        }).then((result)=>{

            setData(result)
        })
    },[])
    
  

  return (
    <div className="py-5 xs:py-0">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center ">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[2px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id
          quasi quam dignissimos dolorem eius cum dolorum assumenda nam
          similique ad enim fuga omnis recusandae earum eos sapiente libero
          delectus et corrupti, soluta excepturi dicta? Alias perferendis sequi
          dolore sint?
        </p>
      </div>
      <div className="max-w-screen-xl  mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10">
        {
          data.map((item,idx)=>(
            <ProductsCart key={idx} product={item}/>
          ))
        }
      </div>
      
    </div>

  );
}

export default Products;
