import { useEffect, useState } from "react";


const ViewAddedCard = () => {
     const [data, setData] = useState([]);
          useEffect(() => {
            fetch("/data.json")
              .then((res) => res.json())
              .then((data) => setData(data));
          }, []);
          console.log(data)
         const {product_id}=data
         console.log(product_id)
    return (
        <div>
            <h2>YOur addeed card</h2>
        </div>
    );
};

export default ViewAddedCard;