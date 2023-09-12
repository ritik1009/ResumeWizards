const DateInputComponent = ({ labelName, elname, value, updateFunction, idx }) => {
  return (
    <div className="formItem flex md:gap-0 lg:gap-1 px-1 md:px-3 lg:px-5 xl:px-10 items-center justify-between">
      <label className=" md:mr-5 text-sm font-semibold sm:text-sm md:text-lg ">
        {labelName}
      </label>
      <input
        className="formInput text-sm md:text-lg sm:px-1 md:px-2 lg:px-3 py-1 w-fit md:w-fit lg:w-60 xl:w-72 bg-slate-200 sm:text-sm"
        type="date"
        placeholder={labelName}
        name={elname}
        value={value}
        onChange={(e) => updateFunction(e, { idx })}
      />
    </div>
  );
};

export default DateInputComponent;
