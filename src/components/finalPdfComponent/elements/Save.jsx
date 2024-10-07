import React from 'react'

const Save = ({handleClick}) => {
  return (
    <button
      className="bg-green-500 w-32 md:w-44 text-white py-1 px-1 md:px-2 text-base md:text-xl font-semibold justify-self-center cursor-pointer mt-4"
      onClick={handleClick}
    >
      Save
    </button>
  );
}

export default Save