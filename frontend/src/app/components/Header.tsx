type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="text-center py-8">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
    </header>
  );
};

export default Header;