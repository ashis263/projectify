import { useState } from "react";
import useTasks from "../hooks/useTasks";

const SearchBar = () => {
  const [searchKey, setSearchKey] = useState("");
  const { tasksDispatch } = useTasks();
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchKey(text);
    tasksDispatch({
      type: "search",
      payload: text.toLowerCase(),
    });
  };
  return (
    <div className="mx-4 flex-1">
      <input
        type="text"
        value={searchKey}
        onChange={handleSearch}
        placeholder="Search here"
        className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
