import React from "react";
import ErrorBoundary from "../Components/ErrorBoundary";

const About = () => {
  // throw new Error("Error in About.jsx");
  return (
    <div>
      <div>
        <h1>Abou us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          architecto voluptates provident hic at corrupti qui explicabo ipsam
          ipsum odit! A assumenda dignissimos saepe quos vel quo quibusdam
          tempore voluptatibus?*29
        </p>
      </div>
      <ErrorBoundary>
          <Abouterror/>
      </ErrorBoundary>
    </div>
  );
};

const Abouterror = () => {

  // Error Boundary will not work in case of event handlers, thats why error boundary will not catch any error on the click of
  const handleClick = () => {
      throw new Error("Failed to load data... ");
    }

  throw new Error("Failed to load data... ");

  return (
    <div>
      <button onClick={handleClick}>Get Details</button>
    </div>
  )
}

export default About;

