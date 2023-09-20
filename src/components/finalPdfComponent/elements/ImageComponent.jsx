const ImageComponent = ({ labelName, elname, updateFunction}) => {
  return (
    <div className="formItem flex gap-1 md:gap-0  px-0 md:px-2 items-center justify-between">
      <label className=" text-left whitespace-nowrap text-ellipsis overflow-hidden mr-1 w-1/3 md:w-auto md:mr-5 font-semibold text-xs sm:text-base ">
        {labelName}
      </label>
      <input
        className="formInput text-xs sm:text-base  px-2 sm:px-1 md:px-2 lg:px-3 py-1 w-2/4 sm:w-60  lg:w-60 bg-slate-200"
        type="file"
        accept="image/*"
        placeholder={labelName}
        name={elname}
        onChange={(e) => updateFunction(e)}
      />
    </div>
  );
};

export default ImageComponent;
