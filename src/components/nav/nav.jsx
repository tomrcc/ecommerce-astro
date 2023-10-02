export default function Nav() {
  const navItems = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/shop',
      label: 'Shop',
    },
  ];
  return (
    <nav className="relative z-10 py-5 px-5 md:px-10 lg:px-20">
      <ul className="flex gap-8">
        {navItems.map((navItem) => {
          return (
            <li>
              <a href={navItem.path}>{navItem.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
