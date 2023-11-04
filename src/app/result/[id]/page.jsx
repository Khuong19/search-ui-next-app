
import Header from "../../components/Header";
import DropDown from "../../components/DropDown";
import Link from "next/link";
async function getContent(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

export default async function Content({ params }) {
  const content = await getContent(params.id);
  return (
    <div>
      <main className="container max-w-[936px] mx-auto">
        <Header />
        <div
          key={content.id}
          className=" vbl-post py-2 bg-[#F8F9FA] flex flex-col gap-6 px-9 my-[16px]"
        >
          <h2 className="text-xl">
            <small className="text-[15px] badge p-1 rounded-md mr-2 bg-light-gray text-white py-[3px] px-[9.25px]">
              VBL
            </small>
            <Link
              href="#"
              className="text-[#0A58CA] dark:text-[#6ea8fe]"
              aria-disabled
            >
              {content.title}
            </Link>
          </h2>

          <nav className="nav mb-2 flex items-center gap-5 justify-start text-sm dark:text-light-gray">
            <span className="nav-item ">
              <span className="font-bold">Mã: </span>
              63/2023/AL
            </span>
            <span className="nav-item">
              <span className="font-bold">Ngày thông qua: </span>
              Đã biết
            </span>
            <span className="nav-item">
              <span className="font-bold">Hiệu lực: </span>
              Đã biết
            </span>
            <span className="nav-item">
              <span className="font-bold">Cập nhật: </span>
              03/10/2023
            </span>
          </nav>

          <ul className="nav mb-2 flex items-center gap-5 justify-start text-sm text-light-gray">
            <li className="nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white">
              <Link href="/resultVbl">
                <i className="bi bi-file-earmark-text"></i> Nội dung
              </Link>
            </li>
            <li className="nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white">
              <Link href="/resultVbl">
                <i className="bi bi-check2"></i> Thuộc tính
              </Link>
            </li>
            <li className="nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white">
              <Link href="/resultVbl">
                <i className="bi bi-list-task"></i> Văn bản liên quan
              </Link>
            </li>
            <li className="nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white">
              <Link href="/resultVbl">
                <i className="bi bi-diagram-2"></i> Lược đồ
              </Link>
            </li>
            <li className="nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white">
              <Link href="/resultVbl">
                <i className="bi bi-cloud-arrow-down"></i> Tải về
              </Link>
            </li>
          </ul>
          <div className="content">
            <h1 className="font-bold">CONTENT OF THE POST</h1>
            {content.body}
          </div>
        </div>
      <DropDown />
      </main>
    </div>
  );
}
