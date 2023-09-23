const ButtonNextPrev = ({handlePrevClick,handleNextClick}) => {
  return (
    <div className="buttonsNextPrev flex justify-between px-5 md:px-12">
      {handlePrevClick ? (
        <button
          className="bg-gray-500 w-20 md:w-44 text-white py-1 px-1 md:px-2 text-sm md:text-xl font-semibold justify-self-end"
          onClick={handlePrevClick}
        >
          Prev
        </button>
      ) : (
        <button
          className="bg-gray-500 w-20 md:w-44 text-white py-1 px-1 md:px-2 text-sm md:text-xl font-semibold justify-self-end"
          onClick={handlePrevClick}
          disabled
        >
          Prev
        </button>
      )}
      <button
        onClick={handleNextClick}
        className="bg-green-500 w-20 md:w-44 text-white py-1 px-1 md:px-2 text-sm md:text-xl font-semibold"
      >
        Next
      </button>
    </div>
  );
}

export default ButtonNextPrev