import axios from "axios";
import React, { useEffect, useState } from "react";

const residentsStatus = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  Unknown: "bg-gray-500",
};

const ResidentCard = ({ resident }) => {
  const [residentInfo, setResidentInfo] = useState();

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article>
      <div className=" border-2 border-green-500 relative">
        <img className="w-full" src={residentInfo?.image} alt="" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#020A02]/80 text-white p-1 px-2 flex gap-2 items-center rounded-sm">
          <div
            className={`w-2 h-3 ${
              residentsStatus[residentInfo?.status]
            } rounded-full`}
          ></div>
          <span>{residentInfo?.status}</span>
        </div>
      </div>
      <section className=" border-2 border-green-500 text-white bg-black font-fira text-sm">
        <h3 className="text-xl">{residentInfo?.name}</h3>
        <ul>
          <li>
            <span className="text-gray-500 text-xs">Species: </span>
            <span>{residentInfo?.species}</span>
          </li>
          <li>
            <span className="text-gray-500 text-xs">Origin: </span>
            <span>{residentInfo?.name}</span>
          </li>
          <li>
            <span className="text-gray-500 text-xs">Times appear: </span>
            <span>{residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
