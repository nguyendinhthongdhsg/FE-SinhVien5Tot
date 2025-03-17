import "./Header.css"; // File CSS

const Header = () => {
  return (
    <header className="Header">
      <div className="Header_content">
        <div className="Header_sgu-img">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logoSGU.png`}
            alt="logoSGU.png"
          />
        </div>
        <div className="Header_chaomung-h1">
          <div className="Header_chaomung-marquee">
            <h1>
            CHÀO MỪNG 20 NĂM NGÀY THÀNH LẬP HỘI SINH VIÊN VIỆT NAM TRƯỜNG ĐẠI HỌC SÀI GÒN (28/02/2005 - 28/02/2025)
            </h1>
          </div>
        </div>
        <div className="Header_sv5t-img">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/LogoSV5Tcustom.png`}
            alt="LogoSV5Tcustom.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
