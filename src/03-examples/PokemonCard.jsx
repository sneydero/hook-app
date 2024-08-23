import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const divRef = useRef(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = divRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [name]);

  return (
    <>
      <blockquote className="blockquote">
        <p ref={divRef} className="mt-1">
          #{id} - {name}
        </p>

        <div>
          {sprites.map((image) => (
            <img key={image} src={image} alt={name} />
          ))}
        </div>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
