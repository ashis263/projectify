import AddIcon from "./svgIcons/AddIcon";

const AddStatusButton = () => {
  return (
    <button className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white">
      <AddIcon />
      Add
    </button>
  );
};

export default AddStatusButton;
