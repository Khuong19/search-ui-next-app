'use client'
import { useState } from 'react';
import Image from 'next/image';
import SearchButton from '../components/SearchBar';
import RadioButton from '../components/RadioButton';
import DropDown from '../components/DropDown';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [selectedRadio, setSelectedRadio] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  const handleSearch = () => {
    if (selectedRadio === 'vbl') {
      router.push('/resultVbl');
    } else if (selectedRadio === 'al') {
      router.push('/resultAl');
    } else {
      router.push({
        pathname: '/search',
        query: { keyword: `${searchTerm}` },
      });
    }
  };

  return (
    <section className="flex flex-col gap-5 items-center justify-center min-h-[860px]">
      <Image
        src="bootstrap-logo.svg"
        alt="logo"
        width={72}
        height={57}
        className="text-center"
      />
      <p className="font-light italic">Tìm kiếm trong 303,231 văn bản luật và 70,000 án lệ</p>
      <SearchButton getSearchResult={handleSearch} />
      <RadioButton selected={selectedRadio} onChange={handleRadioChange} />
      <DropDown />
    </section>
  );
}