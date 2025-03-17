import { useEffect, useState } from "react";
import "./BieuMauThongTinCaNhan.css";

function BieuMauThongTinCaNhan(props) {
    const [isOpenAvatar, setIsOpenAvatar] = useState(false)

  useEffect(() => {
    const mssv = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=mssv]"
    );
    const hoten = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=hoten]"
    );
    const gioitinh = document.querySelector(
      ".BieuMauThongTinCaNhan select[name=gioitinh]"
    );
    const ngaysinh = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=ngaysinh]"
    );
    const dantoc = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=dantoc]"
    );
    const chuyennganh = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=chuyennganh]"
    );
    const lop = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=lop]"
    );
    const khoa = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=khoa]"
    );
    const sinhviennam = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=sinhviennam]"
    );
    const chucvu = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=chucvu]"
    );
    const ngayvaodoan = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=ngayvaodoan]"
    );
    const ngayvaodangdubi = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=ngayvaodangdubi]"
    );
    const ngayvaodangchinhthuc = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=ngayvaodangchinhthuc]"
    );
    const sodienthoai = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=sodienthoai]"
    );
    const email = document.querySelector(
      ".BieuMauThongTinCaNhan input[name=email]"
    );

    mssv.value = props.nguoidung.mssv;
    hoten.value = props.nguoidung.hoten;
    gioitinh.value = props.nguoidung.gioitinh;
    ngaysinh.value = props.nguoidung.ngaysinh;
    dantoc.value = props.nguoidung.dantoc;
    chuyennganh.value = props.nguoidung.chuyennganh;
    lop.value = props.nguoidung.lop;
    khoa.value = props.nguoidung.khoa;
    sinhviennam.value = props.nguoidung.sinhviennam;
    chucvu.value = props.nguoidung.chucvu;
    ngayvaodoan.value = props.nguoidung.ngayvaodoan;
    ngayvaodangdubi.value = props.nguoidung.ngayvaodangdubi;
    ngayvaodangchinhthuc.value = props.nguoidung.ngayvaodangchinhthuc;
    sodienthoai.value = props.nguoidung.sodienthoai;
    email.value = props.nguoidung.email;

    const avatar = document.querySelector(".BieuMauThongTinCaNhan .avatar > img")
    const avatarModel = document.querySelector(".BieuMauThongTinCaNhan .avatar-model > img")
    avatar.src = props.nguoidung.linkanhchandung
    avatarModel.src = props.nguoidung.linkanhchandung
  }, [props.nguoidung]);

  const phongToAnh = () => {
    setIsOpenAvatar(true)
  }

  return (
    <div className="BieuMauThongTinCaNhan">
        <h3>Thông tin cá nhân</h3>
        <div className="avatar">
            <img alt="avatar" onClick={() => {
                phongToAnh()
            }}/>
        </div>
        <div className="avatar-model" style={{display: isOpenAvatar ? 'block' : 'none'}} onClick={() => {
            setIsOpenAvatar(false)
        }}>
            <img alt="avatar-model"/>
        </div>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label>
            Mã số sinh viên:<span>*</span>
          </label>
          <input name="mssv" type="text" required readOnly={props.readOnly} />
        </div>
        <div className="form-group">
          <label>
            Họ tên:<span>*</span>
          </label>
          <input name="hoten" type="text" required readOnly={props.readOnly} />
        </div>
        <div className="form-group-double">
          <div className="form-group">
            <label>
              Giới tính:<span>*</span>
            </label>
            <select required name="gioitinh" disabled={props.readOnly}>
              <option value="">Chọn</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              Ngày sinh:<span>*</span>
            </label>
            <input name="ngaysinh" type="text" required readOnly={props.readOnly}/>
          </div>
        </div>
        <div className="form-group-double">
          <div className="form-group">
            <label>
              Dân tộc:<span>*</span>
            </label>
            <input name="dantoc" type="text" required readOnly={props.readOnly}/>
          </div>
          <div className="form-group">
            <label>
              Lớp:<span>*</span>
            </label>
            <input name="lop" type="text" required readOnly={props.readOnly}/>
          </div>
          <div className="form-group">
            <label>
              Sinh viên năm:<span>*</span>
            </label>
            <input name="sinhviennam" type="number" min="1" max="5" required readOnly={props.readOnly}/>
          </div>
        </div>
        <div className="form-group">
          <label>
            Chuyên ngành:<span>*</span>
          </label>
          <input name="chuyennganh" type="text" required readOnly={props.readOnly}/>
        </div>
        <div className="form-group">
          <label>
            Khoa:<span>*</span>
          </label>
          <input name="khoa" type="text" required readOnly={props.readOnly}/>
        </div>
        <div className="form-group">
          <label>Chức vụ Đoàn - Hội:</label>
          <input name="chucvu" type="text" readOnly={props.readOnly}/>
        </div>
        <div className="form-group-double">
          <div className="form-group">
            <label>Ngày vào Đoàn:</label>
            <input name="ngayvaodoan" type="text" readOnly={props.readOnly}/>
          </div>
          <div className="form-group">
            <label>Ngày vào Đảng (dự bị):</label>
            <input name="ngayvaodangdubi" type="text" readOnly={props.readOnly}/>
          </div>
          <div className="form-group">
            <label>Ngày vào Đảng (chính thức):</label>
            <input name="ngayvaodangchinhthuc" type="text" readOnly={props.readOnly}/>
          </div>
        </div>
        <div className="form-group">
          <label>
            Số điện thoại:<span>*</span>
          </label>
          <input name="sodienthoai" type="tel" required readOnly={props.readOnly}/>
        </div>
        <div className="form-group">
          <label>
            Email:<span>*</span>
          </label>
          <input name="email" type="email" required readOnly={props.readOnly}/>
        </div>
        <button type="submit">Chỉnh sửa</button>
      </form>
    </div>
  );
}

export default BieuMauThongTinCaNhan;
