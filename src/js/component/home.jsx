import React from "react";
import Card from "./card";
import CardClock from "./cardClock";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ seconds }) => {
  return (
    <div className=" container-fluid d-flex gap-2 justify-content-center bg-black">
      <CardClock />
      <Card number={Math.floor((seconds % 1000000) / 100000)} />
      <Card number={Math.floor((seconds % 100000) / 10000)} />
      <Card number={Math.floor((seconds % 10000) / 1000)} />
      <Card number={Math.floor((seconds % 1000) / 100)} />
      <Card number={Math.floor((seconds % 100) / 10)} />
      <Card number={seconds % 10} />
    </div>
  );
};

export default Home;
