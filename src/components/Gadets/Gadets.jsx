import { useEffect, useState } from "react";
import Gadet from "../Gadet/Gadet";
import { NavLink, Outlet } from "react-router-dom";

const Gadets = () => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
    console.log("data", gadgets);
  }, []);
  return (
    <div>
      <h2 className="text-2xl text-center pb-3">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="container mx-auto flex pt-8">
        <div className="w-1/4 h-[490px] bg-[#F7F7F7] p-5 mr-4 ">
          <div className="p-4">
            <div>
              <button className="btn btn-outline bg-purple-700  w-[240px] h-[6px] ">
                All Product
              </button>
            </div>

            <div className="pt-2">
              {/*  */}
              {}
              <NavLink
                to={`/gadets/&{catagory}`}
                className="btn btn-outline text-black w-[240px] h-[6px]"
              >
                Laptops
              </NavLink>

              <div className="pt-2">
                {" "}
                <NavLink
                  to={`/phones/&{catagory}`}
                  className="btn btn-outline text-black w-[240px] h-[6px]"
                >
                  Phones
                </NavLink>
              </div>
              <div className="pt-3">
                <NavLink
                  to={"/accessories/&{catagory}"}
                  className="btn btn-outline text-black w-[240px] h-[6px]"
                >
                  Accessories
                </NavLink>
              </div>
              <div className="pt-2">
                {" "}
                <NavLink to={'/smartWatch/&{catagory}'} className="btn btn-outline text-black w-[240px] h-[6px]">
                  Smart Watches
                </NavLink>
              </div>
              <div className="pt-2">
                <NavLink to={"/iphone/&{catagory}"} className="btn btn-outline text-black w-[240px] h-[6px]">
                  I phone
                </NavLink>
                
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          {gadgets.map((gadget) => (
            <Gadet key={gadget.product_id} gadet={gadget}></Gadet>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadets;
