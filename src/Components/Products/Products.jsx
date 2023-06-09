import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const Products = () => {
  const { data: names = [] } = useQuery({
    queryKey: ["name"],
    queryFn: async () => {
      const res = await fetch("https://khaas-food-server.vercel.app/categorisName");
      const data = await res.json();
      return data;
    },
  });

  

  return (
    <div className="relative w-full  ">
         <img className=" h-[200px] w-full" src="https://www.khaasfood.com/wp-content/uploads/2022/12/1900-570-1536x461.webp" alt="" />

        
        <ul className="absolute top-8 flex justify-evenly w-full flex-wrap">


           {
            names.map((name)=><li
             className="text-lg text-white w-[180px]  text-center mb-10"
             key={name._id}
            
            
            > <Link to={`/products/name/${name.name}`} className="text-white">{name.name}</Link> </li> )
           }

          
          {/* <li className="text-lg text-white ">pink</li>
          <li className="text-lg text-white ">pink</li>
          <li className="text-lg text-white ">pink</li>
          <li className="text-lg text-white ">pink</li>
          <li className="text-lg text-white ">pink</li>
          <li className="text-lg text-white ">pink</li> */}
        </ul>

    </div>
      
  );
};

export default Products;
