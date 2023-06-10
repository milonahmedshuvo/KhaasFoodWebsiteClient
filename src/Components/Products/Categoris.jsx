import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoriSingle from "./CategoriSingle";




const Categoris = () => {
  const datas = useLoaderData();
  

  

  return (
    <div>
      


      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 my-28'>

         {
     datas.map( ( data) => <CategoriSingle
            key={data._id}
            data={data}
                ></CategoriSingle> )
            }
          </div>


    </div>
  );
};

export default Categoris;
