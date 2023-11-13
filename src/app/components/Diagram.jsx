import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import fetchIdFromCustomId from "../utils/fetchIdFromCustomId";
import Link from "next/link";

const Diagram = ({ dataURL }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const router = useRouter();
  const handleItemClick = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };


  async function handleLinkClick (customId){
    const id = await fetchIdFromCustomId(customId);
    if (!id){
      alert('Không tồn tại bài viết')
      return 
    }
    router.push(`/result/${id}`)
  }
  if (dataURL && typeof dataURL === "object") {
    return (
      <div>
        <ul>
          {Object.keys(dataURL).map(
            (key) =>
              dataURL[key] &&
              dataURL[key].length > 0 && (
                <li key={key} className="dark:text-black">
                  <div
                    onClick={() => handleItemClick(key)}
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                  >
                    {key}
                    {expandedItems[key] ? " - Ấn để ẩn" : " - Ấn để hiện"}
                  </div>
                  {expandedItems[key] &&
                    dataURL[key].map((item) => (
                      <ul className="">
                        <li className="text-[#0a58ca]">
                          <Link href='' onClick={() => handleLinkClick(item.custom_id)} >
                            {item.title}
                          </Link>
                        </li>
                        <li>Số Hiệu: {item.so_hieu}</li>
                        <li>Lĩnh Vực: {item.linh_vuc}</li>
                        <li>Ngày ban hành: {item.ngay_ban_hanh}</li>
                        <li className="mb-5">
                          Ngày hiệu lực: {item.ngay_hieu_luc}
                        </li>
                      </ul>
                    ))}
                </li>
              )
          )}
        </ul>
      </div>
    );
  } else {
    return null; 
  }
};

export default Diagram
