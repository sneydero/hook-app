import { useEffect, useState } from "react";

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }: any) => {
      setCoords({ x, y });
      console.log(coords);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <>
      <h3>This user already exist</h3>
      {JSON.stringify(coords)}
    </>
  );
};

export default Message;
