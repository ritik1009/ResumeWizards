const AddNew = ({add,remove,lis}) => {
  return (
    <div className="flex items-center justify-start sm:justify-end sm:pr-12 pb-4 mt-3 gap-1">
      <button
        className="add text-sm md:text-3xl bg-green-600 flex items-center text-white px-3 py-1 rounded-md"
        onClick={add}
      >
        <ion-icon name="add-circle-outline"></ion-icon>
        <span className="text-sm  md:text-xl">Add</span>
      </button>
      {lis.length > 1 ? (
        <button
          className="add text-sm md:text-3xl bg-gray-600 flex items-center text-white px-3 py-1 rounded-md"
          onClick={remove}
        >
          <ion-icon name="remove-circle-outline"></ion-icon>
          <span className="text-sm md:text-xl">Remove</span>
        </button>
      ) : (
        <button
          className="add text-sm md:text-3xl bg-gray-400 flex items-center text-white px-3 py-1 rounded-md"
          onClick={remove}
          disabled
        >
          <ion-icon name="remove-circle-outline"></ion-icon>
          <span className="text-sm md:text-xl">Remove</span>
        </button>
      )}
    </div>
  );
}

export default AddNew