import Image from 'next/image'
import SearchButton from './components/SearchBar'
import RadioButton from './components/RadioButton'
import DropDown from './components/DropDown'
export default function Home() {
  return (
    <section className='flex flex-col gap-5 items-center justify-center min-h-[860px]'>
        <Image src='bootstrap-logo.svg'
          alt='logo'
          width={72}
          height={57}
          className='text-center'/>
        <p className='font-light italic'>Tìm kiếm trong 303,231 văn bản luật và 70,000 án lệ</p>
        <SearchButton/>
        <RadioButton />
        <DropDown />

    </section>
  )
}
