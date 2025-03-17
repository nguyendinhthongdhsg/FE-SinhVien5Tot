import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer_content">
        <div className="Footer_content-left">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/LogoSV5Tcustom.png`}
            alt="LogoSV5Tcustom.png"
          />
        </div>
        <div className="Footer_content-center">
          <p>
            <b>HỘI SINH VIÊN VIỆT NAM TRƯỜNG ĐẠI HỌC SÀI GÒN</b>
          </p>
          <p>
            <b>Địa chỉ: </b>Phòng A004, Số 273 An Dương Vương, Phường 2, Quận 5, Tp. Hồ Chí
            Minh
          </p>
          <p>
            <b>Email: </b>banhdtt.hsvsgu@gmail.com
          </p>
        </div>
        <div className="Footer_content-right">
          <a href="https://www.facebook.com/tuoitredhsaigon" target="blank">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/facebook.png`}
              alt="facebook.png"
            />
          </a>
          <a href="https://www.tiktok.com/@tuoitredhsg" target="blank">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/tiktok.png`}
              alt="tiktok.png"
            />
          </a>
        </div>
      </div>
      <p className="Footer-author">Copyright © 2025, Designed & Developed by N.Đ.Thông</p>
    </footer>
  );
}

export default Footer;
