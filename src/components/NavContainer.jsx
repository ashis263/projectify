import DashboardIcon from "./svgIcons/DashboardIcon";
import ProjectIcon from "./svgIcons/ProjectIcon";
import ContactIcon from "./svgIcons/ContactIcon";
import KanbanIcon from "./svgIcons/KanbanIcon";
import CalendarIcon from "./svgIcons/CalendarIcon";
import MessageIcon from "./svgIcons/MessageIcon";
import SettingIcon from "./svgIcons/SettingIcon";
import NavItem from "./NavItem";

const NavContainer = () => {
  const navLinks = [
    {
      id: 1,
      label: "Dashboard",
      link: "",
      Icon: DashboardIcon,
    },
    {
      id: 2,
      label: "Projects",
      link: "",
      Icon: ProjectIcon,
    },
    {
      id: 3,
      label: "Contact",
      link: "",
      Icon: ContactIcon,
    },
    {
      id: 4,
      label: "Kanban",
      link: "",
      Icon: KanbanIcon,
    },
    {
      id: 5,
      label: "Calendar",
      link: "",
      Icon: CalendarIcon,
    },
    {
      id: 6,
      label: "Messages",
      link: "",
      Icon: MessageIcon,
    },
    {
      id: 7,
      label: "Settings",
      link: "",
      Icon: SettingIcon,
    },
  ];
  return (
    <nav>
      <ul className="space-y-4">
        {navLinks.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavContainer;
