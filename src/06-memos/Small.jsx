import React from "react";

const Small = ({ value }) => {
  console.log("Ingresó de nuevo");

  return <small>{value}</small>;
};

export default React.memo(Small, null);
