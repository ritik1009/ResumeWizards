
const InputComponent = ({labelName,placeholder,value,updateEducations,idx}) => {
  return (
    <div className="formItem flex gap-1 px-10 items-center justify-between">
      <label className=" mr-5 font-semibold">{labelName}</label>
      <input
        className="formInput px-3 py-1 w-72 bg-slate-200"
        type="text"
        placeholder={placeholder}
        name={placeholder}
        value={value}
        onChange={(e) => updateEducations(e, { idx })}
      />
    </div>
  );
}

export default InputComponent