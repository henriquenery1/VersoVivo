'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import magnifyingGlass from "../../public/magnifyingGlassSearch.svg";

interface SearchBarProps {
    placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
    const searchParams = useSearchParams();

    function handleSearch(term: string) {
        console.log(term);
    }

    return (
        <div className='flex items-center justify-center'>
            <div className="bg-[#7B7B82] bg-opacity-70 w-[35rem] shadow-lg rounded-xl flex items-center justify-between px-4">
                <input
                    className="bg-transparent pl-4 py-[9px] outline-2 placeholder:text-gray-700 text-4xl font-normal flex-grow focus:outline-none"
                    placeholder={placeholder}
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                />
                <Image
                    priority
                    src={magnifyingGlass}
                    height={32}
                    width={32}
                    alt="Search Icon"
                />
            </div>
        </div>
    );
}
