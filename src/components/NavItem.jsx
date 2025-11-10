const NavItem = ({item}) => {
  const { label, link, Icon} = item;
  return (
    <li>
      <a href="#" className="flex items-center">
        <Icon/>
        {label}
      </a>
    </li>
  );
};

export default NavItem;
