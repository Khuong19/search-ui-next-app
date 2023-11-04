'use client'
import Image from 'next/image';
import React from 'react';
import SearchButton from './SearchBar';
import { useState } from 'react';
import RadioButton from './RadioButton';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const [selectedRadio, setSelectedRadio] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };
  const pathname = '/result/?search=' + searchTerm;
  
  const handleSearch = () => {
    if (selectedRadio === 'vbl') {
      router.push('/resultVbl');
    } else if (selectedRadio === 'al') {
      router.push('/resultAl');
    } else {
      router.push({
        pathname: pathname,
        query: { keyword: `${searchTerm}` },
      });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="drop-shadow flex items-center gap-3 py-5 justify-center">
        <Link href="/homepage">
          <Image
            src="bootstrap-logo.svg"
            alt="logo"
            width={72}
            height={57}
            className="text-center"
          />
        </Link>
        <SearchButton getSearchResult={handleSearch} />
      </div>
      <div className="mt-[48px] ml-[8px]">
        <RadioButton selected={selectedRadio} onChange={handleRadioChange} />
      </div>
    </div>
  );
};

export default Header;