function diemTrungTuyen(){

    var diemMon1 = +document.getElementById('diemMonThu1').value;
    var diemMon2 = +document.getElementById('diemMonThu2').value;
    var diemMon3 = +document.getElementById('diemMonThu3').value;
    var doiTuong = document.getElementById('doiTuong').value;
    var khuVuc =  document.getElementById('khuVuc').value;

    var diemChuan = 25;

    var diemUuTienKhuVuc;
    var diemUuTienDoiTuong;

    if (doiTuong === '1') {
        diemUuTienDoiTuong = 2.5;
    } else if (doiTuong === '2') {
        diemUuTienDoiTuong = 1.5;
    } else if (doiTuong === '3') {
        diemUuTienDoiTuong = 1;
    } else {
        diemUuTienDoiTuong = 0;
    }

    if (khuVuc === 'A') {
        diemUuTienKhuVuc = 2;
    } else if (khuVuc === 'B') {
        diemUuTienKhuVuc = 1;
    } else if (khuVuc === 'C') {
        diemUuTienKhuVuc = 0.5;
    } else {
        diemUuTienKhuVuc = 0;
    }

    var diemTongKet = diemMon1 + diemMon2 + diemMon3 +diemUuTienDoiTuong + diemUuTienKhuVuc;

    if (diemTongKet < diemChuan){
        document.getElementById('ketQua').innerHTML = "Bạn đã không trúng tuyển " + diemTongKet;
    } else {
        document.getElementById('ketQua').innerHTML = "Bạn đã trúng tuyển " + diemTongKet;
    }


}

//BÀI TẬP 2

function tinhTienDien() {
    var soKWTieuThu = +document.getElementById('soKw').value;
    var tienDien = 0;

    if (soKWTieuThu <= 50) {
        tienDien = soKWTieuThu * 500;
    } else if (soKWTieuThu <= 100) {
        tienDien = 50 * 500 + (soKWTieuThu - 50) * 650;
    } else if (soKWTieuThu <= 150) {
        tienDien = 50 * 500 + 50 * 650 + (soKWTieuThu - 100) * 850;
    } else if (soKWTieuThu <= 200) {
        tienDien = 50 * 500 + 50 * 650 + 50 * 850 + (soKWTieuThu - 150) * 1100;
    } else {
        tienDien = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (soKWTieuThu - 200) * 1300;
    }
    
    document.getElementById("tongSoTien").innerHTML = "Tiền điện phải trả là: " + tienDien + " đồng";
}

//BÀI TẬP 3

function tinhTienThue(){

    var thuNhapNam = +document.getElementById('tongThuNhapNam').value;
    var soNguoiPhuThuoc = +document.getElementById('soNguoiPhuThuoc').value;


    var tongChiPhi = thuNhapNam - 4000000 - (soNguoiPhuThuoc * 1.6);
    
    var thuNhapChiuThue = 0;

    if ( tongChiPhi <= 60000000) {
       thuNhapChiuThue = tongChiPhi * 0.05;
    } else if (tongChiPhi > 60000000 && tongChiPhi <= 120000000){
        thuNhapChiuThue = tongChiPhi * 0.1 ;
    } else if (tongChiPhi > 120000000 && tongChiPhi <= 210000000){
        thuNhapChiuThue = tongChiPhi * 0.15;
    } else if(tongChiPhi > 210000000 && tongChiPhi <= 384000000){
        thuNhapChiuThue = tongChiPhi * 0.2;
    }else if(tongChiPhi > 384000000 && tongChiPhi <= 624000000){
        thuNhapChiuThue = tongChiPhi * 0.25;
    }else if(tongChiPhi > 624000000 && tongChiPhi <= 960000000){
        thuNhapChiuThue = tongChiPhi * 0.3;

    }else{
        thuNhapChiuThue = tongChiPhi * 0.35;
    }

    document.getElementById('tongTien').innerHTML = 'thu nhập chịu thuế ' + thuNhapChiuThue;

}

// BÀI TẬP 4


function hienThiSoKetNoi() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var labelSoKetNoi = document.getElementById("labelSoKetNoi");
    var inputSoKetNoi = document.getElementById("soKetNoi");
    
    if (loaiKhachHang === "doanhNghiep") {
        labelSoKetNoi.style.display = "block";
        inputSoKetNoi.style.display = "block";
    } else {
        labelSoKetNoi.style.display = "none";
        inputSoKetNoi.style.display = "none";
    }
}

function tinhHoaDon() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoi = parseInt(document.getElementById("soKetNoi").value) || 0;
    var soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value) || 0;
    var phiXuLyHoaDon;
    var phiDichVuCoBan;
    var phiThueKenhCaoCap;
    
    if (loaiKhachHang === "nhaDan") {
        phiXuLyHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        phiThueKenhCaoCap = soKenhCaoCap * 7.5;
    } else {
        phiXuLyHoaDon = 15;
        phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
        phiThueKenhCaoCap = soKenhCaoCap * 50;
    }
    
    var tongHoaDon = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
    
    var ketQua = "Hóa đơn cho khách hàng " + loaiKhachHang + " (Mã khách hàng: " + document.getElementById("maKhachHang").value + "):<br>";
    ketQua += "Phí xử lý hóa đơn: " + phiXuLyHoaDon + "$<br>";
    ketQua += "Phí dịch vụ cơ bản: " + phiDichVuCoBan + "$<br>";
    ketQua += "Phí thuê kênh cao cấp: " + phiThueKenhCaoCap + "$<br>";
    ketQua += "<strong>Tổng hóa đơn: " + tongHoaDon + "$</strong>";
    
    document.getElementById("ketQua1").innerHTML = ketQua;
}

