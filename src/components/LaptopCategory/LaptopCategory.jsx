import { useEffect, useState } from "react";


const LaptopCategory = () => {
    
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const laptopData = data.filter(item => item.category === "Laptop");
   


  return (
    <div>
       <div className="container mx-auto ">
        {laptopData.length > 0 ? (
          laptopData.map(item => (
            <div className="ml-14" key={item.product_id}>
              <h2>{item.product_title}</h2>
              <img className="w-1/3" src={item.product_image} alt={item.product_title} />
              <p>{item.description}</p>
              <ul>
                {item.Specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
              <p>Price: ${item.price}</p>
              <p>Availability: {item.availability ? "In Stock" : "Out of Stock"}</p>
              <p>Rating: {item.rating}</p>
            </div>
          ))
        ) : (
          <p>No laptops found</p>
        )}
      </div>
    </div>
  );
};

export default LaptopCategory;
