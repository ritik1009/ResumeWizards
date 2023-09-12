
const InputComponent = ({ labelName, elname, value, updateFunction, idx }) => {
  return (
    <div className="formItem flex md:gap-0 lg:gap-1 px-1 md:px-3 lg:px-5 xl:px-10 items-center justify-between">
      <label className="mr-1 md:mr-5 font-semibold text-sm sm:text-sm md:text-lg">
        {labelName}
      </label>
      <input
        className="formInput text-sm md:text-lg px-2 sm:px-1 md:px-2 lg:px-3 py-1 w-fit sm:w-fit  lg:w-72 bg-slate-200  sm:text-sm"
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