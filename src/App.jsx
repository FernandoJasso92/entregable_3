import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./helpers/random";
import axios from "axios";
import { Location } from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App bg-[url('/images/fondo.png')]">
      <div className='bg-[url("/images/bg.png")] bg-cover grid justify-center'>
        <img
          className='bg-[url("/images/arriba.png")] bg-cover grid justify-center'
          src="./images/logo.png"
          alt=""
        />
      </div>

      <form
        className='bg-[url("/images/bg.png")] bg-cover grid justify-center'
        onSubmit={handleSubmit}
      >
        <div className="grid justify-center font-fira">
          <input
            id="locationId"
            placeholder="Type a location Id ..."
            className="border-2 border-green-600 bg-black text-green-500"
            type="text"
          />
          <button className=" bg-green-500 py-2 px-6 text-white font-bold rounded-full hover:bg-green-200">
            search{" "}
            <i className="bx bx-search bg-green-500 hover:bg-green-200"></i>{" "}
          </button>
        </div>

        <h2 className="grid justify-center text-green-600 font-fira text-xl">
          Welcome to the crazy universe !
        </h2>
      </form>
      <Location location={location} />
      <ResidentList location={location} />
    </div>
  );
}

export default App;
