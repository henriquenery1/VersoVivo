import { Baloo_Bhaina_2 } from 'next/font/google';

const balooBhaina = Baloo_Bhaina_2({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="text-center pt-16 relative mb-16">
      <h1 className={`text-7xl font-extrabold text-custom-purple ${balooBhaina.className}`}>{title}</h1> 
    </header>
  );
};

export default Header;
