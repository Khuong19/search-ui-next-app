'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import DropDown from '../components/DropDown'
import Header from '../components/Header'
import { Pagination } from 'antd'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import 
const Result = () => {
  const searchResults = useSelector((state) => state.searchResults);
  const [data, setData] = useState([]);

  const router = useRouter();

  const fetchData = async () => {
    const response = await axios.get(
      `http://5.104.83.78:1337/api/search-law-post?search=48/2023/NQ-HĐND&page=${currentPage}`
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className='container max-w-[936px] mx-auto'>
      <Header />
      <main >

      {data && data.hits.hits && data.hits.hits.length > 0 && (
        <div key={item.id} className=' vbl-post py-2 bg-[#F8F9FA] flex flex-col gap-6 px-9 my-[16px]'>
          <h2 className='text-xl'>
            <small className='text-[15px] badge p-1 rounded-md mr-2 bg-light-gray text-white py-[3px] px-[9.25px]'>VBL</small>
            <Link href='/result/${item.id}' className='text-[#0A58CA] dark:text-[#6ea8fe]'>
              {item.title}
            </Link>
          </h2>

          <nav className='nav mb-2 flex items-center gap-5 justify-start text-sm dark:text-light-gray'>
            <span className='nav-item '>
              <span className='font-bold'>Mã: </span>
              {item.so_hieu}
            </span>
            <span className='nav-item'>
              <span className='font-bold'>Ngày thông qua: </span>
              {item.ngay_ban_hanh}
            </span>
            <span className='nav-item'>
              <span className='font-bold'>Hiệu lực: </span>
              {item.hieu_luc}
            </span>
            <span className='nav-item'>
              <span className='font-bold'>Cập nhật: </span>
              {item.updated_at}
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

      )}
      {/* <div className='al py-2 bg-light-blue flex flex-col gap-4 px-9 my-[16px] dark:bg-[#032830]'>
          <h2 className='text-xl'>
            <small className='text-[15px] badge p-1 rounded-md mr-2 bg-[#0dcaf0] text-black py-[3px] px-[9.25px]'>AL</small>
            <Link href='/resultAl' className='text-[#0A58CA] dark:text-[#6ea8fe]'>
            Về xem xét quyết định hành chính có liên quan đến hành vi hành chính bị khiếu kiện
            </Link>
          </h2>

          <nav className='nav mb-2 flex items-center gap-5 justify-start text-sm dark:text-light-gray'>
            <span className='nav-item'>
              <span className='font-bold'>Mã: </span>
              63/2023/AL
            </span>
            <span className='nav-item'>
              <span className='font-bold'>Ngày thông qua: </span>
              03/08/2022
            </span>
            <span className='nav-item'>
              <span className='font-bold'>Hiệu lực: </span>
              03/08/2022
            </span>
            <span className='nav-item'>
              <span className='font-bold'>Cập nhật: </span>
              03/10/2023
            </span>
          </nav>

          <ul className='nav mb-2 flex items-center gap-5 justify-start text-sm text-light-gray'>
            <li className='nav-item border bg-transparent border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white'>
              <Link href='/resultVbl'>
                <i class="bi bi-file-earmark-text"></i> Nội dung
              </Link>
            </li>
            <li className='nav-item border bg-transparent border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white'>
              <Link href='/resultVbl'>
              <i class="bi bi-check2"></i> Thuộc tính
              </Link>
            </li>
            <li className='nav-item border bg-transparent border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white'>
              <Link href='/resultVbl'>
              <i class="bi bi-list-task"></i> Văn bản liên quan
              </Link>
            </li>
            <li className='nav-item border bg-transparent border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white'>
              <Link href='/resultVbl'>
              <i class="bi bi-diagram-2"></i> Lược đồ
              </Link>
            </li>
            <li className='nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white'>
              <Link href='/resultVbl'>
              <i class="bi bi-cloud-arrow-down"></i> Tải về
              </Link>
            </li>
          </ul>
      </div> */}
      </main>
      <DropDown />
      <Pagination
          current={currentPage}
          total={data.took}
          pageSize={10}
          onChange={handlePageChange}
        />
    </div>
    
  )
}

export default Result