import "./BangKhaiThanhTich.css";
import intToRoman from "../../../../utils/intToRoman.js";
import { NotifyWarning } from "../../Toast/index.js";

const botieuchuan = [
  {
    idbotieuchuan: 1,
    noidung: "Đạo đức tốt",
    iddoituong: 1,
  },
  {
    idbotieuchuan: 2,
    noidung: "Học tập tốt",
    iddoituong: 1,
  },
  {
    idbotieuchuan: 3,
    noidung: "Thể lực tốt",
    iddoituong: 1,
  },
  {
    idbotieuchuan: 4,
    noidung: "Tình nguyện tốt",
    iddoituong: 1,
  },
  {
    idbotieuchuan: 5,
    noidung: "Hội nhập tốt",
    iddoituong: 1,
  },
  {
    idbotieuchuan: 6,
    noidung: 'Tập thể Chi hội "Sinh viên 5 tốt"',
    iddoituong: 2,
  },
  {
    idbotieuchuan: 7,
    noidung: 'Tập thể Liên Chi hội "Sinh viên 5 tốt"',
    iddoituong: 3,
  },
  {
    idbotieuchuan: 8,
    noidung: 'Bản khai thành tích cá nhân',
    iddoituong: 1,
  },
  {
    idbotieuchuan: 9,
    noidung: 'Bản khai thành tích Tập thể',
    iddoituong: 2,
  },
  {
    idbotieuchuan: 10,
    noidung: 'Bản khai thành tích Tập thể',
    iddoituong: 3,
  },
];

const loaitieuchuan = [
  {
    idloaitieuchuan: 1,
    noidung: "Điểm trung bình rèn luyện năm học 2023 - 2024:",
    idbotieuchuan: 1,
    kieunhap: 1,
  },
  {
    idloaitieuchuan: 2,
    noidung:
      "Kết quả phân tích chất lượng Đoàn viên cuối năm (Đối với Hội viên là Đoàn viên):",
    idbotieuchuan: 1,
    kieunhap: 1,
  },
  {
    idloaitieuchuan: 3,
    noidung: "Đạt ít nhất 01 trong những tiêu chuẩn sau:",
    idbotieuchuan: 1,
    kieunhap: 0,
  },
  {
    idloaitieuchuan: 4,
    noidung: "Điểm trung bình học tập cả năm học 2023 - 2024:",
    idbotieuchuan: 2,
    kieunhap: 0,
  },
  {
    idloaitieuchuan: 5,
    noidung: "Đạt ít nhất 01 trong những tiêu chuẩn sau:",
    idbotieuchuan: 2,
    kieunhap: 0,
  },
  {
    idloaitieuchuan: 6,
    noidung: "Đạt ít nhất 01 trong những tiêu chuẩn sau:",
    idbotieuchuan: 3,
    kieunhap: 0,
  },
  {
    idloaitieuchuan: 7,
    noidung: "*Đối với những sinh viên khuyết tật, tiêu chuẩn về thể lực bao gồm:",
    idbotieuchuan: 3,
    kieunhap: 0,
  },
  {
    idloaitieuchuan: 8,
    noidung: "Đạt ít nhất 01 trong những tiêu chuẩn sau:",
    idbotieuchuan: 4,
    kieunhap: 0,
  },
  {
    idloaitieuchuan: 9,
    noidung: "Về ngoại ngữ đạt ít nhất 01 trong những tiêu chuẩn sau:",
    idbotieuchuan: 5,
    kieunhap: 0,
  },
  {
    idloaitieuchuan: 10,
    noidung: "Về kỹ năng đạt ít nhất 01 trong những tiêu chuẩn sau:",
    idbotieuchuan: 5,
    kieunhap: 0,
  },
  {
    idloaitieuchuan: 11,
    noidung: "Về hoạt động hội nhập đạt ít nhất 01 trong những tiêu chuẩn sau:",
    idbotieuchuan: 5,
    kieunhap: 0,
  },
  {
    idloaitieuchuan: 12,
    noidung: "Tệp khai thành tích tập thể Chi hội:",
    idbotieuchuan: 9,
    kieunhap: 2,
  },
  
  {
    idloaitieuchuan: 13,
    noidung: "Tệp khai thành tích tập thể Liên Chi hội:",
    idbotieuchuan: 10,
    kieunhap: 2,
  },
  {
    idloaitieuchuan: 14,
    noidung: "Tệp khai thành tích cá nhân:",
    idbotieuchuan: 8,
    kieunhap: 2,
  },
  {
    idloaitieuchuan: 15,
    noidung: "Tập thể Chi hội có 100% sinh viên đăng ký tham gia phong trào “Sinh viên 5 tốt”.",
    idbotieuchuan: 6,
    kieunhap: 2,
  },
  {
    idloaitieuchuan: 16,
    noidung: "Có ít nhất 20% Hội viên của Chi hội đạt Danh hiệu “Sinh viên 5 tốt” từ cấp khoa trở lên.",
    idbotieuchuan: 6,
    kieunhap: 2,
  },
  {
    idloaitieuchuan: 17,
    noidung: "Có ít nhất 01 sinh viên đạt Danh hiệu “Sinh viên 5 tốt” cấp trường.",
    idbotieuchuan: 6,
    kieunhap: 2,
  },
  {
    idloaitieuchuan: 18,
    noidung: "Không có sinh viên vi phạm pháp luật và các quy chế, nội quy của nhà trường, quy định của địa phương nơi cư trú và cộng đồng.",
    idbotieuchuan: 6,
    kieunhap: 2,
  },
  {
    idloaitieuchuan: 19,
    noidung: "Tập thể Liên Chi hội có 90% sinh viên đăng ký tham gia phong trào “Sinh viên 5 tốt”.",
    idbotieuchuan: 7,
    kieunhap: 2,
  },
  {
    idloaitieuchuan: 20,
    noidung: "Có ít nhất 10% sinh viên đạt Danh hiệu “Sinh viên 5 tốt” từ cấp trường trở lên.",
    idbotieuchuan: 7,
    kieunhap: 2,
  },
  {
    idloaitieuchuan: 21,
    noidung: "Có giải pháp thực hiện hiệu quả phong trào “Sinh viên 5 tốt” tại đơn vị.",
    idbotieuchuan: 7,
    kieunhap: 2,
  },
  {
    idloaitieuchuan: 22,
    noidung: "Không có sinh viên vi phạm pháp luật và các quy chế, nội quy của nhà trường, quy định của địa phương nơi cư trú và cộng đồng.",
    idbotieuchuan: 7,
    kieunhap: 2,
  },
];

const tieuchuan = [
  {
    idtieuchuan: 1,
    idloaitieuchuan: 3,
    kieunhap: 0,
    noidung:
      "Là thành viên chính thức đội thi tìm hiểu về chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh từ cấp khoa trở lên.",
  },
  {
    idtieuchuan: 2,
    idloaitieuchuan: 3,
    kieunhap: 0,
    noidung:
      "Có tham luận, bài viết được trình bày tại các diễn đàn học thuật về các môn khoa học Mác - Lênin, tư tưởng Hồ Chí Minh từ cấp khoa trở lên",
  },
  {
    idtieuchuan: 3,
    idloaitieuchuan: 3,
    kieunhap: 0,
    noidung:
      'Đạt danh hiệu "Thanh niên tiên tiến làm theo lời Bác" các cấp; Sao "Tháng Thanh niên SGU nghĩ đúng - sống đẹp" hoặc là điển hình được biểu dương trong việc thực hiện "Đẩy mạnh học tập và làm theo tư tưởng, phong cách Hồ Chí Minh" từ cấp khoa trở lên.',
  },
  {
    idtieuchuan: 4,
    idloaitieuchuan: 3,
    kieunhap: 0,
    noidung:
      "Có hành động dũng cảm cứu người bị nạn, bắt cướp, giúp người neo đơn, người nghèo, người gặp khó khăn, hoạn nạn trong tình trạng nguy hiểm và cấp thiết được khen thưởng, biểu dương từ cấp trường, cấp xã, phường trở lên hoặc được nêu gương trên các phương tiện truyền thông đại chúng.",
  },
  {
    idtieuchuan: 5,
    idloaitieuchuan: 3,
    kieunhap: 0,
    noidung:
      "Tham gia các chương trình hoặc cuộc thi tìm hiểu về lịch sử, truyền thống của Đảng, Nhà nước, chủ quyền biển đảo và tổ chức Đoàn Thanh niên, Hội Sinh viên, ... được tổ chức từ cấp khoa trở lên.",
  },
  {
    idtieuchuan: 6,
    idloaitieuchuan: 4,
    kieunhap: 0,
    noidung:
      "Sinh viên ngoài khối ngành kỹ thuật:",
  },
  {
    idtieuchuan: 7,
    idloaitieuchuan: 4,
    kieunhap: 0,
    noidung:
      "Sinh viên trong khối ngành kỹ thuật:",
  },
  {
    idtieuchuan: 8,
    idloaitieuchuan: 5,
    kieunhap: 0,
    noidung:
      "Có đề tài nghiên cứu khoa học sinh viên hoặc khóa luận Tốt nghiệp trong năm học được hội đồng khoa học từ cấp khoa trở lên nghiệm thu đánh giá từ 8.0 điểm hoặc loại Tốt trở lên.",
  },
  {
    idtieuchuan: 9,
    idloaitieuchuan: 5,
    kieunhap: 0,
    noidung:
      "Có ít nhất 01 bài viết về lĩnh vực chuyên môn đang theo học, đăng tải trên các sản phẩm của các cơ quan truyền thông uy tín hoặc các bài báo, tạp chí khoa học chuyên ngành của trường hoặc có bài tham luận tham gia các hội thảo khoa học cấp khoa trở lên.",
  },
  {
    idtieuchuan: 10,
    idloaitieuchuan: 5,
    kieunhap: 0,
    noidung:
      "Đạt giải thưởng trong nghiên cứu khoa học, giải thưởng trong các cuộc thi học thuật và ý tưởng sáng tạo từ cấp khoa trở lên.",
  },
  {
    idtieuchuan: 11,
    idloaitieuchuan: 5,
    kieunhap: 0,
    noidung:
      "Đạt giải khuyến khích trở lên trong các cuộc thi chuyên môn cấp Thành do các hiệp hội ngành nghề, các trường đại học, học viện, các cơ quan thông tấn, báo chí tổ chức.",
  },
  {
    idtieuchuan: 12,
    idloaitieuchuan: 6,
    kieunhap: 0,
    noidung:
      "Tham gia các hoạt động sát hạch thể lực và đạt danh hiệu “Sinh viên khỏe”, “Thanh niên khoẻ” từ cấp trường trở lên.",
  },
  {
    idtieuchuan: 13,
    idloaitieuchuan: 6,
    kieunhap: 0,
    noidung:
      "Đạt giải khuyến khích trở lên trong các hội thao từ cấp khoa trở lên (không áp dụng đối với giải thể thao điện tử).",
  },
  {
    idtieuchuan: 14,
    idloaitieuchuan: 6,
    kieunhap: 0,
    noidung:
      "Là thành viên đội tuyển cấp trường các môn thể dục, thể thao.",
  },
  {
    idtieuchuan: 15,
    idloaitieuchuan: 7,
    kieunhap: 0,
    noidung:
      "Tập thể dục hàng ngày.",
  },
  {
    idtieuchuan: 16,
    idloaitieuchuan: 7,
    kieunhap: 0,
    noidung:
      "Rèn luyện ít nhất 01 môn thể thao dành cho người khuyết tật.",
  },
  {
    idtieuchuan: 17,
    idloaitieuchuan: 8,
    kieunhap: 0,
    noidung:
      "Được khen thưởng từ cấp trường trở lên về hoạt động tình nguyện.",
  },
  {
    idtieuchuan: 18,
    idloaitieuchuan: 8,
    kieunhap: 0,
    noidung:
      "Tham gia và được cấp giấy chứng nhận Chiến dịch Xuân Tình nguyện.",
  },
  {
    idtieuchuan: 19,
    idloaitieuchuan: 8,
    kieunhap: 0,
    noidung:
      "Tham gia và được cấp giấy chứng nhận Chương trình tình nguyện tiếp sức mùa thi.",
  },
  {
    idtieuchuan: 20,
    idloaitieuchuan: 8,
    kieunhap: 0,
    noidung:
      "Tham gia và được cấp giấy chứng nhận Chiến dịch tình nguyện mùa hè xanh.",
  },
  {
    idtieuchuan: 21,
    idloaitieuchuan: 8,
    kieunhap: 0,
    noidung:
      "Tham gia và được cấp giấy chứng nhận ít nhất 05 ngày hoạt động tình nguyện/năm.",
  },
  {
    idtieuchuan: 22,
    idloaitieuchuan: 8,
    kieunhap: 0,
    noidung:
      "Tham gia các hoạt động đặc biệt do nhà trường huy động (căn cứ quyết định hoặc thông báo của nhà trường).",
  },
  {
    idtieuchuan: 23,
    idloaitieuchuan: 9,
    kieunhap: 0,
    noidung:
      "Đạt chứng chỉ tiếng anh trình độ b1 (theo khung tham chiếu châu âu) hoặc tương đương b1 hoặc chứng chỉ ngoại ngữ khác ở trình độ tương đương trở lên (không xét thời hạn của chứng chỉ).",
  },
  {
    idtieuchuan: 24,
    idloaitieuchuan: 9,
    kieunhap: 0,
    noidung:
      "Đối tượng sinh viên chuyên ngành ngoại ngữ: chứng chỉ ngoại ngữ được áp dụng với môn ngoại ngữ 2.",
  },
  {
    idtieuchuan: 25,
    idloaitieuchuan: 9,
    kieunhap: 0,
    noidung:
      "Điểm trung bình các học phần ngoại ngữ (trừ môn ngoại ngữ chuyên ngành) từ năm nhất đến thời điểm xét đạt từ 3.2/4.0 trở lên.",
  },
  {
    idtieuchuan: 26,
    idloaitieuchuan: 9,
    kieunhap: 0,
    noidung:
      "Tham gia và đạt giải khuyến khích trở lên các cuộc thi ngoại ngữ (được hiểu là cuộc thi tìm hiểu ngoại ngữ hoặc cuộc thi sử dụng ngoại ngữ để trình bày) từ cấp khoa trở lên.",
  },
  {
    idtieuchuan: 27,
    idloaitieuchuan: 10,
    kieunhap: 0,
    noidung:
      "Tham gia và có giấy chứng nhận hoàn thành ít nhất 01 khóa trang bị kỹ năng thực hành xã hội từ cấp khoa trở lên.",
  },
  {
    idtieuchuan: 27,
    idloaitieuchuan: 10,
    kieunhap: 0,
    noidung:
      "Tham gia và có giấy chứng nhận hoàn thành ít nhất 01 hoạt động trang bị kỹ năng đúng với chuyên ngành của sinh viên.",
  },
  {
    idtieuchuan: 27,
    idloaitieuchuan: 10,
    kieunhap: 0,
    noidung:
      "Đạt thành tích cao trong các cuộc thi về kỹ năng từ cấp khoa trở lên.",
  },
  {
    idtieuchuan: 27,
    idloaitieuchuan: 10,
    kieunhap: 0,
    noidung:
      "Được giấy khen của Đoàn Thanh niên - Hội Sinh viên trường trở lên về các thành tích xuất sắc trong công tác Đoàn - Hội, phong trào Thanh niên - Sinh viên trường trong năm học.",
  },
  {
    idtieuchuan: 28,
    idloaitieuchuan: 11,
    kieunhap: 0,
    noidung:
      "Tham gia ít nhất 01 hoạt động giao lưu quốc tế: hội nghị, hội thảo quốc tế, các chương trình gặp gỡ, giao lưu, hợp tác với thanh niên, sinh viên quốc tế trong và ngoài nước.",
  },
  {
    idtieuchuan: 28,
    idloaitieuchuan: 11,
    kieunhap: 0,
    noidung:
      "Tham gia tích cực ít nhất 01 hoạt động về hội nhập cấp khoa trở lên.",
  },
];

function BangKhaiThanhTich(props) {
  const iddoituong = props.iddoituong;
  let numberParent = 0;
  let numberChild = 0;

  return (
    <div className="BangKhaiThanhTich">
      <div className="BangKhaiThanhTich-content">
        <table className="BangKhaiThanhTich-table">
          <thead>
            <tr>
              <th style={{ width: 10 }}>STT</th>
              <th>Nội dung tiêu chuẩn</th>
              <th>Tự đánh giá</th>
              <th>Minh chứng</th>
              <th>HSV Trường phản hồi</th>
            </tr>
          </thead>
          <tbody>
            {botieuchuan.map((itemBoTieuChuan, indexBoTieuChuan) => {
              if (itemBoTieuChuan.iddoituong === iddoituong) {
                numberParent++;
                numberChild = 0;
                return (
                  <>
                    <tr key={indexBoTieuChuan} className="bo-tieu-chuan">
                    <td>{numberParent}</td>
                    <td colSpan={4}>
                      {intToRoman(numberParent)}. {itemBoTieuChuan.noidung}
                    </td>
                  </tr>
                    {
                      loaitieuchuan.map((itemLoaiTieuChuan, indexLoaiTieuChuan) => {
                        if(itemLoaiTieuChuan.kieunhap === 1 && itemLoaiTieuChuan.idbotieuchuan === itemBoTieuChuan.idbotieuchuan) {
                          numberChild++;
                          return (
                            <tr key={indexLoaiTieuChuan}>
                              <td>{numberParent}.{numberChild}</td>
                              <td>{itemLoaiTieuChuan.noidung}</td>
                              <td className="input"><input type="text"/></td>
                              <td className="upload" onClick={() => {
                                NotifyWarning("Đang ngoài thời gian xét chọn, vui lòng quay lại sau!")
                              }}><i className="fa-solid fa-upload"></i></td>
                              <td></td>
                            </tr>
                          )
                        }
                      })
                    }
                    {
                      loaitieuchuan.map((itemLoaiTieuChuan, indexLoaiTieuChuan) => {
                        if(itemLoaiTieuChuan.kieunhap === 2 && itemLoaiTieuChuan.idbotieuchuan === itemBoTieuChuan.idbotieuchuan) {
                          return (
                            <>
                              <tr key={indexLoaiTieuChuan}>
                                <td>-</td>
                                <td colSpan={2}>{itemLoaiTieuChuan.noidung}</td>
                                <td className="upload" onClick={() => {
                                  NotifyWarning("Đang ngoài thời gian xét chọn, vui lòng quay lại sau!")
                                }}><i className="fa-solid fa-upload"></i></td>
                                <td></td>
                              </tr>
                            </>
                          )
                        }
                        if(itemLoaiTieuChuan.kieunhap === 0 && itemLoaiTieuChuan.idbotieuchuan === itemBoTieuChuan.idbotieuchuan) {
                          numberChild++;
                          return (
                            <>
                              <tr key={indexLoaiTieuChuan}>
                                <td>{numberParent}.{numberChild}</td>
                                <td colSpan={4}>{itemLoaiTieuChuan.noidung}</td>
                              </tr>
                              {
                                tieuchuan.map((itemTieuChuan, indexTieuChuan) => {
                                  if(itemLoaiTieuChuan.kieunhap === 0 && itemTieuChuan.idloaitieuchuan === itemLoaiTieuChuan.idloaitieuchuan) {
                                    return <tr key={indexTieuChuan}>
                                            <td>-</td>
                                            <td>{itemTieuChuan.noidung}</td>
                                            <td className="checkbox"><input type="checkbox"/></td>
                                            <td className="upload" onClick={() => {
                                              NotifyWarning("Đang ngoài thời gian xét chọn, vui lòng quay lại sau!")
                                            }}><i className="fa-solid fa-upload"></i></td>
                                            <td></td>
                                          </tr>
                                  }
                                })
                              }
                              {
                                tieuchuan.map((itemTieuChuan, indexTieuChuan) => {
                                  if(itemLoaiTieuChuan.kieunhap === 1 && itemTieuChuan.idloaitieuchuan === itemLoaiTieuChuan.idloaitieuchuan) {
                                    return <tr key={indexTieuChuan}>
                                            <td>-</td>
                                            <td>{itemTieuChuan.noidung}</td>
                                            <td></td>
                                            <td className="upload" onClick={() => {
                                              NotifyWarning("Đang ngoài thời gian xét chọn, vui lòng quay lại sau!")
                                            }}><i className="fa-solid fa-upload"></i></td>
                                            <td></td>
                                          </tr>
                                  }
                                })
                              }
                            </>
                          )
                        }
                      })
                    }
                  </>
                );
              }
            })}
            <tr className="bo-tieu-chuan">
              <td colSpan={2} className="left">Các cấp duyệt:</td>
              <td className="center">LCH SV Khoa</td>
              <td className="center">HSV Trường</td>
              <td className="center">Hội đồng</td>
            </tr>
            <tr>
              <td colSpan={2} className="left">Kết quả duyệt:</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="BangKhaiThanhTich-save">
          <button onClick={() => {
            NotifyWarning("Đang ngoài thời gian xét chọn, vui lòng quay lại sau!");
          }}>Lưu</button>
        </div>
      </div>
    </div>
  );
}

export default BangKhaiThanhTich;
