import BieuMauThongTinCaNhan from "../../components/BieuMauThongTinCaNhan"
import { NotifyWarning } from "../../components/Toast"
import "./ThongTinCaNhanF.css"

function ThongTinCaNhanF() {
    const nguoidung = JSON.parse(sessionStorage.getItem('nguoidung')) 

    const submit = (event) => {
        event.preventDefault()
        NotifyWarning("Đang ngoài thời gian xét chọn, vui lòng quay lại sau!")
    }

    return (
        <div className="ThongTinCaNhanF">
            <div className="ThongTinCaNhanF-content">
                <BieuMauThongTinCaNhan nguoidung={nguoidung} readOnly={true} submit={submit}/>
            </div>
        </div>
    )
}

export default ThongTinCaNhanF