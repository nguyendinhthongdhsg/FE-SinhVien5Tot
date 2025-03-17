import PDFView from "../../components/PDFView"
import "./ThongBaoXetF.css"

function ThongBaoXetF() {
    return (
        <div className="ThongBaoXetF">
            <h3>1. Thông báo hướng dẫn chi tiết về việc đăng ký và nộp hồ sơ trực tuyến
            xét chọn Danh hiệu “Sinh viên 5 tốt” trường Đại học Sài Gòn năm 2024</h3>
            <PDFView PDFSrc={'thongbaoxet.pdf'} />
        </div>
    )
}

export default ThongBaoXetF
