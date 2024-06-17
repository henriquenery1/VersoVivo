import { Baloo_Bhaina_2 } from 'next/font/google';
import Link from 'next/link';

const balooBhaina = Baloo_Bhaina_2({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

type TextrProps = {
    title: string;
};

const TextNavigation: React.FC<TextrProps> = ({ title }) => {
    return (
        <Link href={`/`} className='fixed z-10 bottom-0 right-0 text-5xl p-16'>
            <h2>Voltar</h2>
        </Link>
    );
};

export default TextNavigation;
