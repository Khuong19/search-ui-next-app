'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Date from '../utils/formatTime'
import DropDown from '../components/DropDown'
import Header from '../components/Header'
import { Pagination } from 'antd'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Result = (context) => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState(context.searchParams.search);
    
    if (context.searchParams.search === '' || context.searchParams.search === undefined){
      router.push('/homepage')
    } 
    
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    
    const fetchData = async (currentPage) => {
      const apiUrl = process.env.API_BASE_URL;
      const response = await axios.get(
        `${apiUrl}/api/search-law-post?search=${searchTerm}&page=${currentPage}&limit=10`
        );
        setData(response.data);
      };
      
    

    useEffect(() => {
      fetchData(currentPage);
    }, [currentPage]);
    useEffect(() => {
      fetchData(1);
    }, [searchTerm]);

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    console.log(data.took)
  return (
    <div className='container max-w-[936px] mx-auto'>
      <Header />
      <main >

      {data && data.hits && data.hits.hits && data.hits.hits.length > 0 && (
        data.hits.hits.map((item) => (
          <div key={item._id} className=' vbl-post py-2 bg-[#F8F9FA] flex flex-col gap-6 px-9 my-[16px]'>
            <h2 className='text-xl'>
              <small className='text-[15px] badge p-1 rounded-md mr-2 bg-light-gray text-white py-[3px] px-[9.25px]'>VBL</small>
              <Link href={`/result/${item._id}`} className='text-[#0A58CA] dark:text-[#6ea8fe]'>
                {item._source.title}
              </Link>
            </h2>

            <nav className='nav mb-2 flex items-center gap-5 justify-start text-sm dark:text-light-gray'>
              <span className='nav-item '>
                <span className='font-bold'>Mã: </span>
                {item._source.so_hieu}
              </span>
              <span className='nav-item'>
                <span className='font-bold'>Ngày thông qua: </span>
                {item._source.ngay_ban_hanh}
              </span>
              <span className='nav-item'>
                <span className='font-bold'>Hiệu lực: </span>
                {item._source.hieu_luc}
              </span>
              <span className='nav-item'>
                <span className='font-bold'>Cập nhật: </span>
                <Date dateString={item._source.updated_at}></Date>
              </span>
            </nav>

            <ul className='nav mb-2 flex items-center gap-5 justify-start text-sm text-light-gray'>
              <li className='nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white'>
                <Link href='/resultVbl'>
                  <i className="bi bi-file-earmark-text"></i> Nội dung
                </Link>
              </li>
              <li className='nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white'>
                <Link href='/resultVbl'>
                <i className="bi bi-check2"></i> Thuộc tính
                </Link>
              </li>
              <li className='nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white'>
                <Link href='/resultVbl'>
                <i className="bi bi-list-task"></i> Văn bản liên quan
                </Link>
              </li>
              <li className='nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white'>
                <Link href='/resultVbl'>
                <i className="bi bi-diagram-2"></i> Lược đồ
                </Link>
              </li>
              <li className='nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white'>
                <Link href='/resultVbl'>
                <i className="bi bi-cloud-arrow-down"></i> Tải về
                </Link>
              </li>
            </ul>
          </div>
        ))
      )}
  
      </main>
      <DropDown />
      <Pagination
        className='mb-[60px]'
          current={currentPage}
          total={data.took}
          onChange={handlePageChange}
        />
    </div>
    
  )
}

export default Result