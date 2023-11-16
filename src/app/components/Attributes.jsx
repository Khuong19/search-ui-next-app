import React from 'react';

const Attributes = ({ dataURL }) => {
  const attributes = [
    { label: 'Số hiệu', value: dataURL.attributes.so_hieu },
    { label: 'Nơi ban hành', value: dataURL.attributes.noi_ban_hanh },
    { label: 'Ngày ban hành', value: dataURL.attributes.ngay_ban_hanh },
    { label: 'Ngày công báo', value: dataURL.attributes.ngay_cong_bao },
    { label: 'Loại văn bản', value: dataURL.attributes.loai_van_ban },
    { label: 'Người ký', value: dataURL.attributes.nguoi_ky },
    { label: 'Ngày hiệu lực', value: dataURL.attributes.ngay_hieu_luc },
    { label: 'Số công báo', value: dataURL.attributes.so_cong_bao },
    { label: 'Tình trạng', value: dataURL.attributes.tinh_trang },
    { label: 'Lĩnh vực', value: dataURL.attributes.linh_vuc },
  ];

  return (
    <table className="table-auto border-collapse rounded-lg overflow-hidden shadow-md dark:text-black">
      <thead>
        <tr className="bg-gray-100">
          <th className="text-left p-2">Thuộc tính</th>
          <th className="text-left p-2">Nội dung</th>
        </tr>
      </thead>
      <tbody>
        {attributes.map((attribute, index) => (
          <tr key={index} className="bg-white">
            <td className="border border-gray-300 p-2">{attribute.label}</td>
            <td className="border border-gray-300 p-2">{attribute.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Attributes;
