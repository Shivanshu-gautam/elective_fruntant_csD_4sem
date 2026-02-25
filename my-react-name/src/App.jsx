import React from "react";
import Wrapper from "./component/footer";
import UserCard from "./component/header";
import { useState,use } from "react";
function App() {
  const [isgame, setgame] = useState("Cricket");
  const [cricketer, setCricketer] = useState([
    { name: "Virat Kohli", age: 35, city: "Delhi", team: "RCB" },
    { name: "Rohit Sharma", age: 37, city: "Mumbai", team: "MI" },
    { name: "KL Rahul", age: 32, city: "Bangalore", team: "KXIP" },
    { name: "MS Dhoni", age: 42, city: "Chennai", team: "CSK" },
  ]);
  const [footballer, setFootballer] = useState([
    { name: "Lionel Messi", age: 36, city: "Paris", team: "PSG" },
    { name: "Cristiano Ronaldo", age: 39, city: "Manchester", team: "MU" },
    { name: "Neymar Jr", age: 32, city: "Paris", team: "PSG" },
    { name: "Kylian Mbappe", age: 25, city: "Paris", team: "PSG" },
  ]);

  const onclick = () => {
    if (isgame === "Cricket") {
      setgame("Football");
    } else {
      setgame("Cricket");
    }
  };
  const deleteUser = (id) => {
    if (isgame === "Cricket") {
      const updatedCricketer = cricketer.filter((item, index) => index !== id);
      setCricketer(updatedCricketer);
    } else {
      const updatedFootballer = footballer.filter(
        (item, index) => index !== id,
      );
      setFootballer(updatedFootballer);
    }
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const age = e.target[1].value;
    const city = e.target[2].value;
    const team = e.target[3].value;
    if (isgame === "Cricket") {
      setCricketer([...cricketer, { name, age, city, team }]);
    } else {
      setFootballer([...footballer, { name, age, city, team }]);
    }
  };
  const hideForm = () => {
    const form = document.querySelector("form");
    form.classList.toggle("hidden");
  };
  return (
    <div className="bg-amber-200 min-h-screen w-full flex flex-row items-center justify-center py-6 overflow-y-auto">
      <div className="w-full flex flex-col items-center justify-center gap-6 m-5">
        <button
          onClick={hideForm}
          className="bg-red-500 text-white p-2 rounded-lg m-4 shadow-red-400 shadow-md"
        >
          Hide Form
        </button>
        <div className="p-4 m-4 bg-blue-400  rounded-lg w-xl shadow-blue-600 shadow-md">
          <h3 className="text-xl font-bold text-center">{`Add New ${isgame} player`}</h3>
          <form
            onSubmit={onsubmit}
            className="flex flex-col items-center justify-center"
          >
            <input
              type="text"
              placeholder="Enter Name"
              className="p-2 m-2 rounded-lg w-full bg-white shadow-gray-400 shadow-md"
            />
            <input
              type="text"
              placeholder="Enter Age"
              className="p-2 m-2 rounded-lg w-full bg-white shadow-gray-400 shadow-md"
            />
            <input
              type="text"
              placeholder="Enter City"
              className="p-2 m-2 rounded-lg w-full bg-white shadow-gray-400 shadow-md"
            />
            <input
              type="text"
              placeholder="Enter Team"
              className="p-2 m-2 rounded-lg w-full bg-white  shadow-gray-400 shadow-md"
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-lg m-4 shadow-green-700 shadow-md hover:bg-green-600 transition duration-300"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
        <div className="flex flex-col items-center justify-center m-5">
          <button
            onClick={onclick}
            className="bg-red-500 text-white p-2 rounded-lg m-4 shadow-red-400 shadow-md"
          >
            {isgame}
          </button>
          <h1 className="text-3xl font-bold text-center  p-10">
            {isgame} DASHBOARD
          </h1>
          {isgame === "Cricket" && (
            <Wrapper title="Cricketer Details">
              {cricketer.map((item, index) => {
                return (
                  <UserCard
                    key={index}
                    id={index}
                    data={item}
                    deleteUser={deleteUser}
                  />
                );
              })}
            </Wrapper>
          )}
          {isgame === "Football" && (
            <Wrapper title="Footballer Details">
              {footballer.map((item, index) => {
                return (
                  <UserCard
                    key={index}
                    id={index}
                    data={item}
                    deleteUser={deleteUser}
                  />
                );
              })}
            </Wrapper>
          )}
        </div>
        {/* <Wrapper title="Team Details">

        </Wrapper> //children props is used to pass any content inside the wrapper component and we can access that content in the wrapper component by using props.children and we can also pass any other props in the wrapper component and access them in the wrapper component by using props.propsname */}
    </div>
  );
}

export default App;