import img from '../../assets/banner.jpg'

const ImgSection = () => {
    return (
        <div className="w-[1110px] h-[563px] mx-auto mt-10 relative ">
        <img className="w-[1000px] h-[500px] mt-[-25%] mx-auto block " src={img} alt="" />
      </div>
      
    );
};

export default ImgSection;