import React from "react";
import bannerPhoto from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="my-16 flex justify-between items-center">
      <div>
        <h1 className="text-6xl font-bold">AngelList Talent is</h1>
        <h1 className="text-6xl font-bold">now Wellfound</h1>
        <p className="text-3xl my-8">Where startups and job seekers connect.</p>
        <div>
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-sky-600">
            Find your next hire
          </button>
          <button className="border ml-4 px-6 py-3 hover:text-sky-600 hover:bg-sky-100 rounded-md outline-none hover:outline-sky-600">
            Find your next job
          </button>
        </div>
      </div>
      <img className="w-[500px]" src={bannerPhoto} alt="" />
    </div>
  );
};

export default Banner;
