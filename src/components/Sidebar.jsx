import LWSLogo from "./LWSLogo";
import NavContainer from "./NavContainer";

const Sidebar = () => {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <LWSLogo/>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <NavContainer/>
    </aside>
  );
};

export default Sidebar;
