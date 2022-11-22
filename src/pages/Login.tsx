import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { LogoMain } from "../assets";
import { LoginBtn } from "../components";
import { CITIES, LOGIN_BUTTONS } from "../utils";

export const Login = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(
    useSelector((state: any) => state.auth.loggedIn) || false,
  );
  const [locationDetected, setLocationDetected] = useState<boolean>(false);

  function citySelect(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "default") {
      setLocationDetected(false);
    } else {
      setLocationDetected(true);
    }
  }

  return (
    <div className="bg-[url('/src/assets/Darkmap.svg')] h-screen w-screen bg-center bg-cover">
      <div className="h-full w-full backdrop-blur-[2px] flex justify-center items-center">
        <div className="bg-white rounded-lg p-4 text-center w-[90%]">
          <img src={LogoMain} alt="TownSquare Logo" className="mx-auto" />
          {!loggedIn ? (
            <>
              <p className="text-3xl my-3">Sign In / Log In</p>
              <p className="text-lg mb-2">
                Login to save your progress. We won't post anything anywhere.
              </p>
              <div>
                {LOGIN_BUTTONS.map((button) => (
                  <LoginBtn styles={button} key={nanoid()} setLoggedIn={setLoggedIn} />
                ))}
              </div>
            </>
          ) : (
            <div className="my-3">
              <p className="text-3xl text-indigo-500">Welcome</p>
              <p className="text-3xl font-extralight mb-16">Choose your City</p>
              <div>
                <p className="text-left my-2">Choose City/Town:</p>
                <select
                  name="City"
                  id="City"
                  className="w-full mb-4 text-lg p-2 bg-slate-200 rounded-lg"
                  defaultValue={"default"}
                  onChange={(e) => {
                    citySelect(e);
                  }}>
                  <option value="default">Not Selected</option>
                  {CITIES.map((city) => (
                    <option key={nanoid()} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <p>(or)</p>
                <div
                  className="flex justify-center items-center text-lg border-2 border-gray-400 rounded-lg p-2 my-2"
                  onClick={() => setLocationDetected(true)}>
                  <BiCurrentLocation className="text-2xl" />
                  <p className="grow text-left mx-4">Detect Location</p>
                </div>
                {locationDetected && (
                  <button className="bg-blue-500 rounded-lg p-2 text-white ml-auto flex items-center">
                    Proceed
                    <FaAngleRight />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
