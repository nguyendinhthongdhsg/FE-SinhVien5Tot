import { useState } from "react";
import "./ToolbarUser.css";
import { useNavigate } from "react-router-dom";

function ToolbarUser() {
  const nguoidung = JSON.parse(sessionStorage.getItem("nguoidung"));
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <div className="ToolbarUser">
      <div
        className="ToolbarUser-icon"
        onClick={() => {
          setIsUserMenuOpen(!isUserMenuOpen);
        }}
      >
        <i className="fa-solid fa-user"></i>
      </div>
      <div
        className="ToolbarUser-menu"
        style={{ display: isUserMenuOpen ? "block" : "none" }}
      >
        <ul>
          <p>Xin chào {nguoidung.hoten}</p>
          <hr />
          <li>
            <button
              onClick={() => {
                setIsUserMenuOpen(false);
                navigate("/thong-tin-ca-nhan");
              }}
            >
              <i className="fa-solid fa-circle-info"></i>
              <p>Thông tin cá nhân</p>
            </button>
          </li>
          <hr />
          <li>
            <button
              onClick={() => {
                setIsUserMenuOpen(false);
                navigate("/");
                setTimeout(() => {
                  sessionStorage.removeItem("nguoidung");
                  window.location.reload();
                }, 100);
              }}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
              <p>Đăng xuất</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ToolbarUser;
