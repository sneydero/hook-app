import React from 'react'


const ShowIncrement =({increment}) => {

    console.log('Se vuelve a dibujar')
  return (
    <button className="btn btn-primary"
    onClick={() => {increment(5)}}>
    Increment
    </button>
  )
};

export default React.memo(ShowIncrement);
