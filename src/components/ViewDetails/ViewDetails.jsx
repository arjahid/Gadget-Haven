import { NavLink, useLoaderData, useParams } from "react-router-dom";
import ViewAddedCard from "../ViewAddedCard/ViewAddedCard";

const ViewDetails = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  const newData = data.find((item) => item.product_id === parseInt(product_id));

  if (!newData) {
    return <div>Product not found</div>;
  }

  const {product_id: id,
    product_title,
    product_image,
    category,
    price,
    description,
    availability,
    rating,
    Specification,
  } = newData;
  

  const handleAddedToCart = (id) => {
    console.log("Added to cart",id);
  }

  return (
    <div>
      <div className="bg-[#9538E2] text-white p-10 h-[300px]">
        <h2 className="text-3xl text-center">
          Produco Details <br />
          Gadget Haven Accessories
        </h2>
        <p className="text-center pt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="text-center pt-8"></div>
      </div>

      <div className="hero bg-purple-600  border-2 border-white-300  w-[1200px] h-[700px] mt-[-10%] mx-auto">
        <div className="hero-content flex justify-center items-center  w-[1200px] h-[700px] mt-[-25%] mx-auto ">
          <img
            src={product_image}
            alt={product_title}
            className="max-w-sm rounded-lg shadow-2xl mr-9"
          />
          <div>
            <h1 className="text-5xl font-bold pb-4 text-black">
              {product_title}
            </h1>
            <p className="text-black font-bold  pt-2">Price: {price}</p>
            <p className="py-6 text-black font-bold ">{description}</p>
            <p className="text-black font-bold">Specfication {Specification}</p>
            <p className="text-black pt-2 font-bold">Category: {category}</p>

            <p className="text-black pt-2 font-bold">
              Availability: {availability}
            </p>
            <div className="flex gap-3 justify- items-center">
              <div className="rating">
              <input
                  type="radio"
                  name={rating}
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
              <p className="text-black pt-2 font-bold">Rating: {rating}</p>
            </div>
            <div className="pt-2">
              {" "}
             <NavLink to="/ViewAddedCard"><button onClick={()=>handleAddedToCart} className="bg-green-500 text-white p-2 rounded-lg">Add to Cart</button></NavLink>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ViewDetails;
