import React from "react";
import artiacl1 from "../../Images/06.jpg";
import artiacl2 from "../../Images/07.jpg";
import artiacl3 from "../../Images/08.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Artical = () => {
  return (
    <div>
      <h2 className="lg:text-5xl text-4xl lg:text-left text-center font-bold mt-10">
        Recent articles and news
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl  hover:scale-110 hover:duration-500">
          <figure>
            <img className="h-100" src={artiacl1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <p className="text-lg text-left text-gray-500">February 4, 2022</p>
            <h2 className="text-2xl text-left font-bold">
              Better than snoozing: driving an EV
            </h2>
            <a href="" className="text-lx font-bold text-orange-500">
              Read More{"  "}
              <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl hover:scale-110 hover:duration-500">
          <figure>
            <img className="h-100" src={artiacl2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <p className="text-lg text-left text-gray-500">March 8, 2022</p>
            <h2 className="text-2xl text-left font-bold">
              Saving the world, one charge at a time
            </h2>
            <a href="" className="text-lx font-bold text-orange-500">
              Read More{"  "}
              <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl hover:scale-110 hover:duration-500">
          <figure>
            <img className="h-100" src={artiacl3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <p className="text-lg text-left text-gray-500">April 7, 2022</p>
            <h2 className="text-2xl text-left font-bold">
              It’s time to plug-in to the new road ahead!
            </h2>
            <a href="" className="text-lx font-bold text-orange-500">
              Read More{"  "}
              <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artical;
