import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Diagram = ({ dataURL }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const router = useRouter();
  const handleItemClick = (id) => {
    // Toggle the state for the clicked item
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  console.log(dataURL)
  if (dataURL && typeof dataURL === "object") {
    return (
      <div>
        <ul>
          {Object.keys(dataURL).map(
            (key) =>
              dataURL[key] &&
              dataURL[key].length > 0 && (
                <li key={key}>
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
                          <a href={`/result/${item.custom_id}`}>Tên văn bản: {item.title} </a>
                        </li>
                        <li>Số Hiệu: {item.so_hieu}</li>
                        <li>Lĩnh Vực: {item.linh_vuc}</li>
                        <li>Ngày ban hành: {item.ngay_ban_hanh}</li>
                        <li className="mb-5">
                          Ngày hiệu lực: {item.ngay_hieu_luc}
                        </li>
                        {/* Add other details as needed */}
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

export default Diagram;
