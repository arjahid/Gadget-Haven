import { useEffect, useState } from "react";


const PhoneCategeory = () => {
     const [data, setData] = useState([]);
      useEffect(() => {
        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
      const phoneData=data.filter(item=>item.category==="Smartphone")
      console.log(phoneData)
    
    return (
        <div className="container mx-auto ">
            <div className="grid grid-cols-3 gap-4 border-2 pt-3 p-4 ">
              
                {
                    phoneData.length>0 ? data.map(item=><div>
                       <div className="border-2 p-4 bg-purple-500 ">
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
                    </div>):<p>No Phone Found</p>
                }
               
            </div>
        </div>
    );
};

export default PhoneCategeory;