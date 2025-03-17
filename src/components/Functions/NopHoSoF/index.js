import ThongTinHoSo from "../../components/PhieuKhaiHoSo/ThongTinHoSo";
import BangKhaiThanhTich from "../../components/PhieuKhaiHoSo/BangKhaiThanhTich";
import "./NopHoSoF.css";
import { useState } from "react";

const doituongxet = [
  {
    iddoituong: 1,
    noidung: "Cá nhân",
  },
  {
    iddoituong: 2,
    noidung: "Chi hội",
  },
  {
    iddoituong: 3,
    noidung: "Liên Chi hội",
  },
];

function NopHoSoF() {
  const nguoidung = JSON.parse(sessionStorage.getItem("nguoidung"));
  const [iddoituong, setIddoituong] = useState(1); // Lấy giá trị của param 'name'


  return (
    <div className="NopHoSoF">
      <div className="NopHoSoF-content">
        <div className="NopHoSoF-header">
          <h3>4. Nộp hồ sơ trực tuyến</h3>
        </div>
        <div className="NopHoSoF-toolbar">
          {
            doituongxet.map((item, index) => {
              return (
                <button key={index} className={item.iddoituong === iddoituong ? 'active' : ''} onClick={() => {
                      setIddoituong(item.iddoituong)
                    }}>
                        {item.noidung}
                </button>
              )
            })
          }
        </div>
        <div className="NopHoSoF-ThongTinHoSo">
          <ThongTinHoSo nguoidung={nguoidung}/>
        </div>
        <div className="NopHoSoF-BangKhaiThanhTich">
          {iddoituong ? <BangKhaiThanhTich iddoituong={iddoituong}/> : <BangKhaiThanhTich iddoituong={1}/>}
        </div>
      </div>
    </div>
  );
}

export default NopHoSoF;
