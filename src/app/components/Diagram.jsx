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

  const contentMapping = {
    van_ban_duoc_huong_dan: "Văn bản được hướng dẫn",
    van_ban_duoc_hop_nhat: "Văn bản được hợp nhất",
    van_ban_bi_sua_doi_noi_dung: "Văn bản bị sửa đổi bổ sung",
    van_ban_bi_dinh_chinh: "Văn bản bị đính chính",
    van_ban_bi_thay_the: "Văn bản bị thay thế",
    van_ban_duoc_dan_chieu: "Văn bản được dẫn chiếu",
    van_ban_duoc_can_cu: "Văn bản được căn cứ",
    van_ban_lien_quan_ngon_ngu: "Văn bản liên quan ngôn ngữ",
    van_ban_lien_quan_cung_noi_dung: "Văn bản liên quan cùng nội dung",
    van_ban_huong_dan: "Văn bản hướng dẫn",
    van_ban_hop_nhat: "Văn bản hợp nhất",
    van_ban_sua_doi_bo_sung: "Văn bản hợp sửa đổi bổ sung",
    van_ban_dinh_chinh: "Văn bản đính chính",
    van_ban_thay_the: "Văn bản thay thế",
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
                    {contentMapping[key] || key}
                    {expandedItems[key] ? " - Ấn để ẩn" : " - Ấn để hiện"}
                  </div>
                  {expandedItems[key] &&
                    dataURL[key].map((item) => (
                      <ul className="" key={item.custom_id}>
                        <li className="text-[#0a58ca]">
                          <Link href="" onClick={() => handleLinkClick(item.custom_id)}>
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
