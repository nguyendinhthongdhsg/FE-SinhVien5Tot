import PDFView from "../../components/PDFView"
import './BoTieuChuanF.css'

function BoTieuChuanF() {
    return (
        <div className="BoTieuChuanF" >
            <h3>2. Bộ tiêu chuẩn xét chọn Danh hiệu “Sinh viên 5 tốt” và “Tập thể Sinh
            viên 5 tốt” trường Đại học Sài Gòn giai đoạn 2023 - 2025</h3>
            <PDFView PDFSrc={'botieuchuan.pdf'} />
        </div>
    )
}

export default BoTieuChuanF
