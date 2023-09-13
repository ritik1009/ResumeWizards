
const InputComponent = ({ labelName, elname, value, updateFunction, idx }) => {
  return (
    <div className="formItem flex gap-5 md:gap-0 lg:gap-1 px-1 md:px-3 lg:px-5 xl:px-10 items-center justify-between">
      <label className=" text-left whitespace-nowrap text-ellipsis overflow-hidden mr-1 w-1/3 md:w-auto md:mr-5 font-semibold text-sm sm:text-xs md:text-lg">
        {labelName}
      </label>
      <input
        className="formInput text-sm md:text-lg px-2 sm:px-1 md:px-2 lg:px-3 py-1 w-2/4 sm:w-60  lg:w-72 bg-slate-200  sm:text-sm"
        type="text"
        placeholder={labelName}
        name={elname}
        value={value}
        onChange={(e) => updateFunction(e, { idx })}
      />
    </div>
  );
};

export default InputComponent