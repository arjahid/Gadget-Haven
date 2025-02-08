import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewAddedCard = () => {
  const { product_id } = useParams();
  const [data, setData] = useState([]);
  const [viewData, setViewData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const foundData = data.find((item) => item.product_id === parseInt(product_id));
        setViewData(foundData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [product_id]);

  return (
    <div>
      <h2>Your added card</h2>
      {viewData ? (
        <div>
          <h3>{viewData.product_title}</h3>
          <img className="w-1/3" src={viewData.product_image} alt={viewData.product_title} />
          <p>{viewData.description}</p>
          <p>Price: ${viewData.price}</p>
          <p>Availability: {viewData.availability ? "In Stock" : "Out of Stock"}</p>
          <p>Rating: {viewData.rating}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ViewAddedCard;