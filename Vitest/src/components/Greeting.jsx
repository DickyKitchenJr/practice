import React from "react";

const Greeting = ({name}) => {
  if (name) return <h1>Hello {name}</h1>;

  return <button>Login</button>;
};

export default Greeting;
