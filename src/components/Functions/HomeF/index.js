import "./HomeF.css";
import { useNavigate } from "react-router-dom";

function HomeF() {
  const navigate = useNavigate();

  return (
    <div className="HomeF">
      <div className="HomeF-content">
        <div className="HomeF-ThongBao">
          <button
            onClick={() => {
              navigate("/thong-bao-xet");
            }}
          >
            Thông báo hướng dẫn chi tiết về việc đăng ký và nộp hồ sơ trực tuyến
            xét chọn Danh hiệu “Sinh viên 5 tốt” trường Đại học Sài Gòn năm 2024
          </button>
          <div>1</div>
        </div>
        <div className="HomeF-BoTieuChuan">
          <button
            onClick={() => {
              navigate("/bo-tieu-chuan");
            }}
          >
            Bộ tiêu chuẩn xét chọn Danh hiệu “Sinh viên 5 tốt” và “Tập thể Sinh
            viên 5 tốt” trường Đại học Sài Gòn giai đoạn 2023 - 2025
          </button>
          <div>2</div>
        </div>
        <div className="HomeF-ThanhTich">
          <a
            href={`${process.env.PUBLIC_URL}/assets/file/SV5T_mau01_canhan_2024.docx`}
            download={true}
          >
            <p>Mẫu khai cá nhân</p>
            <i className="fa-solid fa-download"></i>
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/assets/file/SV5T_mau02_tapthe_2024.docx`}
            download={true}
          >
            <p>Mẫu khai tập thể</p>
            <i className="fa-solid fa-download"></i>
          </a>
          <div>3</div>
        </div>
        <div className="HomeF-NopHoSo">
          <button
            onClick={() => {
              navigate("/nop-ho-so");
            }}
          >
            Nộp hồ sơ trực tuyến xét chọn Danh hiệu
          </button>
          <div>4</div>
        </div>
      </div>
    </div>
  );
}

export default HomeF;
