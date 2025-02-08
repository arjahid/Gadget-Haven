import { useEffect, useState } from "react";


const SmartWatch = () => {
     const [data, setData] = useState([]);
          useEffect(() => {
            fetch("/data.json")
              .then((res) => res.json())
              .then((data) => setData(data));
          }, []);
            const sw=data.filter(item=>item.category==="Smart Watch")
    return (
        <div>
            <h1>dhfjh</h1>
            <div>
                {
                    sw.length>0?sw.map(item=><div>
                        <div className="border-2 p-4 bg-purple-500 text-center">
                        <h2 className="text-black font-bold text-xl pb-2 text-center">{item.product_title}</h2>
                         <img className="w-1/3 mx-auto" src={item.product_image} alt={item.product_title} />
                         <p className="text-black font-semibold p-b2"><span className="font-bold">Description</span>: {item.description}</p>
                         <ul className="text-black font-semibold p-b2">
                             {
                                 item.Specification.map((spec,index)=><li key={index}>{spec}</li>)
                             }
                         </ul>
                         <p className="text-black font-semibold p-b2">Price: ${item.price}</p>
                         <p className="text-black font-semibold p-b2">Availability: {item.availability ? "In Stock" : "Out of Stock"}</p>
                         <p className="text-black font-semibold p-b2">Rating: {item.rating}</p> 
                        </div>

                    </div>):<p className="text-4xl">No Smart Watch Found Here</p>
                }
            </div>
        </div>
    );
};

export default SmartWatch;