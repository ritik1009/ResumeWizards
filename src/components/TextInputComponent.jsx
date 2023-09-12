const TextInputComponent = ({
  labelName,
  elname,
  value,
  updateFunction,
  idx,
}) => {
  return (
    <div className="formItem flex gap-1 px-10 items-center justify-between row-span-2">
      <label className="mr-5 font-semibold">{labelName}</label>
      <textarea
        className="formInput px-3 py-1 h-full w-72 bg-slate-200"
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