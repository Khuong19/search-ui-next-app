'use client'

import DropDown from '../components/DropDown'
import Header from '../components/Header'
import Link from 'next/link'
const ResultVBL = () => {

  return (
    <div className='container max-w-[936px] mx-auto flex flex-col gap-6'>
      <Header />
      <main className=''>
        <div className='title py-2 bg-[#F8F9FA] flex flex-col gap-4 px-9'>
          <h2 className='text-xl'>
            <small className='text-[15px] badge p-1 rounded-md mr-2 bg-light-gray text-white py-[3px] px-[9.25px]'>VBL</small>
            <Link href='/resultVBL' className='text-[#0A58CA]'>
            Quyết định 759/QĐ-QLD năm 2023 về Danh mục 14 thuốc sản xuất trong nước được cấp giấy đăng ký lưu hành tại Việt Nam - Đợt 187 bổ sung do Cục trưởng Cục Quản lý Dược ban hành
            </Link>
          </h2>

          <nav className='nav mb-2 flex items-center gap-5 justify-start text-sm'>
            <span className='nav-item'>
              <span className='font-bold'>Mã: </span>
              63/2023/AL
            </span>
            <span className='nav-item'>
              <span className='font-bold'>Ngày thông qua: </span>
              Đã biết
            </span>
            <span className='nav-item'>
              <span className='font-bold'>Hiệu lực: </span>
              Đã biết
            </span>
            <span className='nav-item'>
              <span className='font-bold'>Cập nhật: </span>
              03/10/2023
            </span>
          </nav>

          <ul className='nav mb-2 flex items-center gap-5 justify-start text-sm text-light-gray'>
            <li className='nav-item border rounded-md px-[8px] py-[4px] bg-light-gray text-white border-white'>
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

        <div className='Content py-2 flex px-9'>
          Nội dung
        </div>
      </main>
      <DropDown />
    </div>
  )
}

export default ResultVBL