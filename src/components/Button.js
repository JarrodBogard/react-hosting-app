import React from "react";

export function Button(props) {
  const { label = "Default", handleClick = () => console.log("I am default") } =
    props;
  return <button onClick={handleClick}>{label}</button>;
}
