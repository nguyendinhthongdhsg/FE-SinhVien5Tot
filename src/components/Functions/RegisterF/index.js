import "./RegisterF.css"
import { NotifyWarning } from "../../components/Toast"

function RegisterF() {

    function checkRegister() {
        NotifyWarning("Đang ngoài thời gian xét chọn, vui lòng quay lại sau!")
    }

    return (
    <div className="RegisterF">
        <div className="RegisterF-left">
            <img src={`${process.env.PUBLIC_URL}/assets/images/posterSV5T.png`}
            alt="LogoSV5Tcustom.png"/>
        </div>
        <div className="RegisterF-right">
            <div className="RegisterF-right-background">
                <div className="RegisterF-form-wrapper">
                    <div className="RegisterF-form-content">
                    <div className="RegisterF-form-header-desktop">
                        <h3>HỘI SINH VIÊN VIỆT NAM TRƯỜNG ĐẠI HỌC SÀI GÒN</h3>
                        <h3>XÉT CHỌN DANH HIỆU SINH VIÊN 5 TỐT</h3>
                    </div>
                    <div className="RegisterF-form-header-mobile">
                        <h3>HỘI SINH VIÊN VIỆT NAM</h3>
                        <h3>TRƯỜNG ĐẠI HỌC SÀI GÒN</h3>
                        <h3>XÉT CHỌN DANH HIỆU</h3>
                        <h3>SINH VIÊN 5 TỐT</h3>
                    </div>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        checkRegister()
                    }}>
                        <h2>Đăng Ký</h2>
                        <input placeholder="Tên đăng nhập"/>
                        <input placeholder="Họ tên"/>
                        <input placeholder="Email"/>
                        <input type="password" placeholder="Mật khẩu"/>
                        <input type="password" placeholder="Nhập lại mật khẩu"/>
                        <div className="RegisterF-form-dangnhap">Bạn đã có tài khoản? <a href="/">Đăng nhập</a></div>
                        <button>Đăng Ký</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RegisterF