import { Baloo_Bhaina_2 } from 'next/font/google';
import Link from 'next/link';

const balooBhaina = Baloo_Bhaina_2({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

type TextrProps = {
    title: string;
    paginate: string
};

const TextNavigation: React.FC<TextrProps> = ({ title, paginate }) => {
    return (
        <Link href={paginate} className='fixed bottom-0 right-0 text-5xl p-16'>
            <h2>{title}</h2>
        </Link>
    );
};

export default TextNavigation;
