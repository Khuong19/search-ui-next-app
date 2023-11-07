"use client";
import Header from "../../components/Header";
import DropDown from "../../components/DropDown";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Date from "@/app/utils/formatTime";
import Content from "@/app/components/Content";
import Attributes from "@/app/components/Attributes";
import RelatedPosts from "@/app/components/RelatedPosts";
import Diagram from "@/app/components/Diagram";
import Download from "@/app/components/Download";
export default function Details({ params }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `http://5.104.83.78:1337/api/law-posts?populate=*&filters[id][%24eq]=${params.id}`
    );
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
  };

  console.log(data);
  return (
    <div className="container max-w-[936px] mx-auto">
      <Header />
      {data &&
        data.data &&
        data.data.map((item) => (
          <main>
            <div
              key={item.id}
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
                  {item.attributes.title}
                </Link>
              </h2>

              <nav className="nav mb-2 flex items-center gap-5 justify-start text-sm dark:text-light-gray">
                <span className="nav-item ">
                  <span className="font-bold">Mã: </span>
                  {item.attributes.origin_id}
                </span>
                <span className="nav-item">
                  <span className="font-bold">Ngày thông qua: </span>
                  {item.attributes.ngay_ban_hanh}
                </span>
                <span className="nav-item">
                  <span className="font-bold">Hiệu lực: </span>
                  {item.attributes.ngay_hieu_luc}
                </span>
                <span className="nav-item">
                  <span className="font-bold">Cập nhật: </span>
                  <Date dateString={item.attributes.updatedAt}></Date>
                </span>
              </nav>

              <ul className="nav mb-2 flex items-center gap-5 justify-start text-sm text-light-gray">
                <li
                  className={`nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white ${
                    activeComponent === "Component1" ? "active" : ""
                  }`}
                  onClick={() => handleComponentClick("Component1")}
                >
                  <Link href="">
                    <i className="bi bi-file-earmark-text"></i> Nội dung
                  </Link>
                </li>
                <li
                  className={`nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white ${
                    activeComponent === "Component2" ? "active" : ""
                  }`}
                  onClick={() => handleComponentClick("Component2")}
                >
                  <Link href="">
                    <i className="bi bi-check2"></i> Thuộc tính
                  </Link>
                </li>
                <li
                  className={`nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white ${
                    activeComponent === "Component3" ? "active" : ""
                  }`}
                  onClick={() => handleComponentClick("Component3")}
                >
                  <Link href="">
                    <i className="bi bi-list-task"></i> Văn bản liên quan
                  </Link>
                </li>
                <li
                  className={`nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white ${
                    activeComponent === "Component4" ? "active" : ""
                  }`}
                  onClick={() => handleComponentClick("Component4")}
                >
                  <Link href="">
                    <i className="bi bi-diagram-2"></i> Lược đồ
                  </Link>
                </li>
                <li className="nav-item border border-light-gray rounded-md px-[8px] py-[4px] hover:bg-light-gray hover:text-white hover:border-white">
                  <a href="">
                    <i className="bi bi-cloud-arrow-down"></i> Tải về
                  </a>
                </li>
              </ul>
              {activeComponent === "Component1" && (
                <Content dataURL={item.attributes.content} />
              )}
              {activeComponent === "Component2" && (
                <Attributes dataURL={item} />
              )}
              {activeComponent === "Component3" && (
                <RelatedPosts dataURL={item.attributes.post_lien_quan} />
              )}
              {activeComponent === "Component4" && (
                <Diagram dataURL={item.attributes.luoc_do} />
              )}
            </div>
          </main>
        ))}
      <DropDown />
    </div>
  );
}
