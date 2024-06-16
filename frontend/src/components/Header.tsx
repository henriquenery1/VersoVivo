type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="text-center py-8 relative z-10">
      <h1 className="text-7xl font-bold text-white">{title}</h1>
    </header>
  );
};

export default Header;
