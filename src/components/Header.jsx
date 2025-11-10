import HeaderButton from "./HeaderButton";
import MenuButton from "./MenuButton";
import SearchBar from "./SearchBar";
import MailIcon from "./svgIcons/MailIcon";
import NotificationIcon from "./svgIcons/NotificationIcon";

const Header = () => {
  const headerButtons = [
    {
      id: 1,
      icon: MailIcon,
    },
    {
      id: 2,
      icon: NotificationIcon,
    },
  ];
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <MenuButton />
      <SearchBar />
      <div className="flex items-center">
        {headerButtons.map((btn) => (
          <HeaderButton key={btn.id} Icon={btn.icon} />
        ))}
      </div>
    </header>
  );
};

export default Header;
