const HeaderButton = ({ Icon }) => {
  return (
    <button className="relative mr-4">
      <Icon />
      <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
    </button>
  );
};

export default HeaderButton;
