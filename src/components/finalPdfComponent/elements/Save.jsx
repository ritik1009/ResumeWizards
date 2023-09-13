import React from 'react'

const Save = ({handleClick}) => {
  return (
    <button
      className="bg-green-500 w-20 md:w-44 text-white py-1 px-1 md:px-2 text-sm md:text-xl font-semibold justify-self-end cursor-pointer"
      onClick={handleClick}
    >
      Save
    </button>
  );
}

export default Save