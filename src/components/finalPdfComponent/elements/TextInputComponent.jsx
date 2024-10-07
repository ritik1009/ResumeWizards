const TextInputComponent = ({
  labelName,
  elname,
  value,
  updateFunction,
  idx,
}) => {
  return (
    <div className="formItem flex-col sm:flex-row flex gap-2 md:gap-0 lg:gap-1 sm:px-1 md:px-2  sm:items-center justify-between row-span-4 h-32">
      <label className="text-left whitespace-nowrap text-ellipsis overflow-hidden mr-1 w-[95%] sm:w-1/3 md:w-auto md:mr-5 font-semibold text-base sm:text-xs md:text-lg">
        {labelName}
      </label>
      <textarea
        className="formInput text-base md:text-base px-2 sm:px-1 md:px-2 lg:px-3 py-1 h-full w-[95%] sm:w-60  lg:w-60 bg-slate-200  sm:text-xs"
        type="text"
        placeholder={labelName}
        name={elname}
        value={value}
        onChange={(e) => updateFunction(e, { idx })}
      />
    </div>
  );
};

export default TextInputComponent