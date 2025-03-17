import { useEffect } from "react"
import { NotifyError, NotifyWarning } from "../../components/Toast"
import "./LoginF.css"

function LoginF() {

    useEffect(() => {
        const tendangnhap = document.querySelector("input[name=tendangnhap]")
        const matkhau = document.querySelector("input[name=matkhau]")

        tendangnhap.value = "TaiKhoanKiemThu"
        matkhau.value = "TaiKhoanKiemThu"
    })

    function checkLogin() {
        const tenDangNhapE = document.querySelector('input[name=tendangnhap]')
        const matKhauE = document.querySelector('input[name=matkhau]')
        const tenDangNhapV = tenDangNhapE.value
        const matKhauV = matKhauE.value

        if(!tenDangNhapV) {
            NotifyWarning("Vui lòng nhập tên đăng nhập!")
            return
        }
        if(!matKhauV) {
            NotifyWarning("Vui lòng nhập mật khẩu!")
            return
        }
        if(tenDangNhapV === "TaiKhoanKiemThu" && matKhauV === "TaiKhoanKiemThu") {
            const nguoidung = {
                mssv: '3122410400',
                hoten: 'Tài khoản kiểm thử',
                gioitinh: 'Nam',
                ngaysinh: '30/10/2004',
                dantoc: 'kinh',
                chuyennganh: 'Công nghệ Thông tin',
                lop: 'DCT1226',
                khoa: 'Công nghệ Thông tin',
                sinhviennam: '3',
                chucvu: '',
                ngayvaodoan: '26/03/2021',
                ngayvaodangdubi: '',
                ngayvaodangchinhthuc: '',
                sodienthoai: '',
                email: '',
                linkanhchandung: 'https://i.imgur.com/ZYCdsPJ.png'
            }
            sessionStorage.setItem('nguoidung', JSON.stringify(nguoidung))
            window.location.reload()
        } else {
            NotifyError("Tài khoản hoặc mật khẩu chưa chính xác.")
        }
    }

    return (
    <div className="LoginF">
        <div className="LoginF-left">
            <img src={`${process.env.PUBLIC_URL}/assets/images/bieuchung_ngaytruyenthong_hsv_sgu.jpg`}
            alt="LogoSV5Tcustom.png"/>
        </div>
        <div className="LoginF-right">
            <div className="LoginF-right-background">
                <div className="LoginF-form-wrapper">
                    <div className="LoginF-form-content">
                    <div className="LoginF-form-header-desktop">
                        <h3>HỘI SINH VIÊN VIỆT NAM TRƯỜNG ĐẠI HỌC SÀI GÒN</h3>
                        <h3>XÉT CHỌN DANH HIỆU SINH VIÊN 5 TỐT</h3>
                    </div>
                    <div className="LoginF-form-header-mobile">
                        <h3>HỘI SINH VIÊN VIỆT NAM</h3>
                        <h3>TRƯỜNG ĐẠI HỌC SÀI GÒN</h3>
                        <h3>XÉT CHỌN DANH HIỆU</h3>
                        <h3>SINH VIÊN 5 TỐT</h3>
                    </div>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        checkLogin()
                    }}>
                        <h2>Đăng nhập</h2>
                        <input name="tendangnhap" placeholder="Tên đăng nhập"/>
                        <input name="matkhau" type="password" placeholder="Mật khẩu"/>
                        <div className="LoginF-form-quenmatkhau"><a href="/forgot-password">Quên mật khẩu?</a></div>
                        <div className="LoginF-form-dangky">Bạn chưa có tài khoản? <a href="/register">Đăng ký</a></div>
                        <button>Đăng nhập</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LoginF