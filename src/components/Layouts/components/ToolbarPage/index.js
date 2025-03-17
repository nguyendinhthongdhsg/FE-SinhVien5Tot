import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ToolbarPage.css";

function ToolbarPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = `${process.env.PUBLIC_URL}/assets/file/SV5T_mau02_tapthe_2024.docx`;
    a.download = "SV5T_mau02_tapthe_2024.docx";
    document.body.appendChild(a);
    a.click();
    a.href = `${process.env.PUBLIC_URL}/assets/file/SV5T_mau01_canhan_2024.docx`;
    a.download = "SV5T_mau01_canhan_2024.docx";
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="ToolbarPage">
      <div
        className="ToolbarPage-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      <div
        className="ToolbarPage-menu"
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        <ul>
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/");
              }}
            >
              Trang chủ
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/thong-bao-xet");
              }}
            >
              Thông báo hướng dẫn
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/bo-tieu-chuan");
              }}
            >
              Bộ tiêu chuẩn xét
            </button>
          </li>
          <li>
            <button onClick={handleDownload}>Mẫu khai thành tích</button>
          </li>
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/nop-ho-so");
              }}
            >
              Nộp hồ sơ trực tuyến
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ToolbarPage;
