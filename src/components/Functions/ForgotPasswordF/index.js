import { NotifyWarning } from "../../components/Toast"
import "./ForgotPasswordF.css"

function ForgotPasswordF() {

    function checkForgotPassword() {
        NotifyWarning("Đang ngoài thời gian xét chọn, vui lòng quay lại sau!")
    }

    return (
    <div className="ForgotPasswordF">
        <div className="ForgotPasswordF-left">
            <img src={`${process.env.PUBLIC_URL}/assets/images/posterSV5T.png`}
            alt="LogoSV5Tcustom.png"/>
        </div>
        <div className="ForgotPasswordF-right">
            <div className="ForgotPasswordF-right-background">
                <div className="ForgotPasswordF-form-wrapper">
                    <div className="ForgotPasswordF-form-content">
                    <div className="ForgotPasswordF-form-header-desktop">
                        <h3>HỘI SINH VIÊN VIỆT NAM TRƯỜNG ĐẠI HỌC SÀI GÒN</h3>
                        <h3>XÉT CHỌN DANH HIỆU SINH VIÊN 5 TỐT</h3>
                    </div>
                    <div className="ForgotPasswordF-form-header-mobile">
                        <h3>HỘI SINH VIÊN VIỆT NAM</h3>
                        <h3>TRƯỜNG ĐẠI HỌC SÀI GÒN</h3>
                        <h3>XÉT CHỌN DANH HIỆU</h3>
                        <h3>SINH VIÊN 5 TỐT</h3>
                    </div>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        checkForgotPassword()
                    }}>
                        <h2>Quên mật khẩu</h2>
                        <input name="tendangnhap" placeholder="Tên đăng nhập"/>
                        <input name="matkhaumoi" type="password" placeholder="Mật khẩu mới"/>
                        <input name="nhaplaimatkhau" type="password" placeholder="Nhập lại mật khẩu mới"/>
                        <button>Gửi yêu cầu</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ForgotPasswordF