import "./ThongTinHoSo.css";
import BieuMauThongTinCaNhan from "../../BieuMauThongTinCaNhan";
import { useState } from "react";
import { NotifyWarning } from "../../Toast";

function ThongTinHoSo(props) {
  const [isOpenModelInfo, setIsOpenModelInfo] = useState(false);
  const submit = (event) => {
    event.preventDefault()
    NotifyWarning("Đang ngoài thời gian xét chọn, vui lòng quay lại sau!")
  }

  return (
    <>
      <div className="ThongTinHoSo">
        <div className="ThongTinHoSo-content">
          <div className="ThongTinHoSo-left">
            <div>
              - Họ và tên: <span>{props.nguoidung.hoten}</span>
            </div>
            <div>
              - Lớp: <span>{props.nguoidung.lop}</span>
            </div>
            <div>
              - Khoa: <span>{props.nguoidung.khoa}</span>
            </div>
          </div>
          <div className="ThongTinHoSo-right">
            <div>
              - Ngày sinh: <span>{props.nguoidung.ngaysinh}</span>
            </div>
            <div>
              - Lần cập nhật cuối: 13:34 - 17/02/2025<span></span>
            </div>
            <div className="ThongTinHoSo-XemThongTinChiTiet">
              <button
                onClick={() => {
                  setIsOpenModelInfo(!isOpenModelInfo);
                }}
              >
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="ThongTinHoSo-model"
        style={{ display: isOpenModelInfo ? "flex" : "none" }}
        onClick={(e) => {
          if (e.target.className === "ThongTinHoSo-model") {
            setIsOpenModelInfo(!isOpenModelInfo);
          }
        }}
      >
        <div className="ThongTinHoSo-model-content">
          <div>
            <BieuMauThongTinCaNhan nguoidung={props.nguoidung} readOnly={true} submit={submit}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThongTinHoSo;
