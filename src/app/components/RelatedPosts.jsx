import React from 'react';
import Link from 'next/link';

const RelatedPosts = ({ dataURL }) => {
  // Kiểm tra nếu cả hai giá trị là null
  if (dataURL.posts_lien_quan_hieu_luc === null && dataURL.posts_lien_quan_noi_dung === null) {
    return <p className='dark:text-black'>Không tồn tại</p>;
  }

  return (
    <div>
      <div className='vbl-post py-2 bg-[#F8F9FA] flex flex-col gap-6 px-9 my-[16px] dark:text-black'>
        <h2 className='text-xl'>
          <small className='text-[15px] badge p-1 rounded-md mr-2 bg-light-gray text-white py-[3px] px-[9.25px]'>VBL</small>
          <Link href='' className='text-[#0A58CA] dark:text-[#6ea8fe]'>
            {dataURL.posts_lien_quan_hieu_luc || dataURL.posts_lien_quan_noi_dung}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default RelatedPosts;
