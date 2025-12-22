# 🏠 Website Quản lý Ký túc xá - Đại học Trà Vinh (TVU Dormitory Management)

![React](https://img.shields.io/badge/Frontend-ReactJS-blue)
![NodeJS](https://img.shields.io/badge/Backend-NodeJS-green)
![Express](https://img.shields.io/badge/Framework-ExpressJS-lightgrey)
![MySQL](https://img.shields.io/badge/Database-MySQL-orange)

## 📖 Giới thiệu (Introduction)

Đây là dự án **Thực tập Đồ án Chuyên ngành** (hoặc Cơ sở ngành tùy theo giai đoạn) được thực hiện bởi sinh viên Khoa Kỹ thuật và Công nghệ, Trường Đại học Trà Vinh.

Dự án nhằm mục đích số hóa quy trình quản lý ký túc xá, thay thế phương pháp quản lý thủ công (sổ sách, Excel) bằng hệ thống website hiện đại. Hệ thống giúp sinh viên dễ dàng đăng ký phòng, tra cứu hóa đơn, gửi yêu cầu hỗ trợ, đồng thời giúp Ban quản lý kiểm soát dữ liệu chính xác và minh bạch.

---

## 👨‍💻 Thông tin tác giả (Author)

- **Sinh viên thực hiện:** Đỗ Gia Hào
- **MSSV:** 110122070
- **Lớp:** DA22TTD
- **Giảng viên hướng dẫn:** ThS. Lê Minh Tự
- **Đơn vị:** Khoa Công nghệ Thông tin - Trường ĐH Trà Vinh

---

## 🛠 Công nghệ sử dụng (Tech Stack)

Dự án được xây dựng dựa trên kiến trúc phân lớp (Layered Architecture):

### Frontend (Giao diện)
- **ReactJS**: Xây dựng giao diện người dùng (SPA), Component-based.
- **HTML5, CSS3, JavaScript**: Bố cục và định dạng giao diện.
- **Axios**: Gọi API tới Backend.

### Backend (Xử lý nghiệp vụ)
- **Node.js**: Môi trường thực thi JavaScript.
- **ExpressJS**: Framework xây dựng RESTful API.

### Database (Cơ sở dữ liệu)
- **MySQL**: Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS).
- **MySQL2**: Thư viện kết nối Node.js với MySQL.

---

## 🚀 Chức năng chính (Features)

Hệ thống phân quyền cho 3 đối tượng người dùng:

### 1. Sinh viên (Student)
- 🔐 Đăng ký/Đăng nhập tài khoản.
- 🏠 Xem danh sách phòng, tình trạng phòng (trống/đầy).
- 📝 Đăng ký thuê phòng trực tuyến.
- 💰 Xem hóa đơn điện, nước, phí nội trú.
- 🆘 Gửi yêu cầu hỗ trợ/sửa chữa cơ sở vật chất.
- 👤 Quản lý thông tin cá nhân.

### 2. Nhân viên Quản lý KTX (Manager)
- 📂 Quản lý thông tin sinh viên nội trú.
- 🏢 Quản lý tình trạng phòng, tòa nhà.
- 🧾 Quản lý hợp đồng và hóa đơn thanh toán.
- 🛠 Tiếp nhận và xử lý yêu cầu hỗ trợ từ sinh viên.
- 📊 Xuất báo cáo thống kê.

### 3. Quản trị viên (Admin)
- 🛡 Quản lý tài khoản người dùng (Phân quyền).
- ⚙️ Cấu hình hệ thống (Giá phòng, thông báo chung).
- 💾 Sao lưu dữ liệu hệ thống.

---

## 💾 Thiết kế Cơ sở dữ liệu (Database Schema)

Các bảng chính trong hệ thống:
- `sinhvien`: Thông tin sinh viên.
- `phong`: Thông tin phòng ở, giá thuê, số giường.
- `hopdong`: Hợp đồng thuê phòng.
- `hoadon`: Hóa đơn điện, nước, phòng.
- `dondangky`: Đơn đăng ký phòng chờ duyệt.
- `yeucauhotro`: Các ticket hỗ trợ.
- `taikhoan`: Thông tin đăng nhập và phân quyền.

*(Xem chi tiết ERD trong thư mục `/docs` hoặc báo cáo đính kèm)*

---

## 🔧 Cài đặt và Hướng dẫn sử dụng (Installation)

### Yêu cầu tiên quyết
- Node.js (v14 trở lên)
- MySQL Server (XAMPP/WAMP hoặc MySQL Workbench)
- Git

### Các bước cài đặt

**1. Clone dự án**
```bash
git clone https://github.com/username/tvu-dormitory-management.git
cd tvu-dormitory-management
