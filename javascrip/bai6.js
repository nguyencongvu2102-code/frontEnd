function searchProduct() {
    const keyword = document.getElementById('search-input').value.toLowerCase();
    if (keyword.includes("patek")) {
        window.location.href = "../HTML/Patek_Philippe.html";
    }else if (keyword.includes("đồng hồ patek")) {
        window.location.href = "../HTML/Patek_Philippe.html";
    }
    else if (keyword.includes("đong ho patek")) {
        window.location.href = "../HTML/Patek_Philippe.html";
    }
    else if (keyword.includes("đồng hồ patek philippe")) {
        window.location.href = "../HTML/Patek_Philippe.html";
    }
    else if (keyword.includes("đong ho patek philippe")) {
        window.location.href = "../HTML/Patek_Philippe.html";
    }else if (keyword.includes("rolex")) {
        window.location.href = "../HTML/Rolex.html";
    }else if (keyword.includes("đồng hồ rolex")) {
        window.location.href = "../HTML/Rolex.html";
    }else if (keyword.includes("đong ho rolex")) {
        window.location.href = "../HTML/Rolex.html";
    }
     else if (keyword.includes("timex")) {
        window.location.href = "../HTML/Timex.html";
    }else if (keyword.includes("đồng hồ timex")) {
        window.location.href = "../HTML/Timex.html";
    }else if (keyword.includes("đong ho timex")) {
        window.location.href = "../HTML/Timex.html";
    }
     else if(keyword.includes("đồng hồ nam")){
        window.location.href = "../HTML/Nam.html";
    }else if(keyword.includes("đồng hồ nữ")){
        window.location.href = "../HTML/Nu.html";
    }else if(keyword.includes("đong ho nam")){
        window.location.href = "../HTML/Nam.html";
    }
    else if(keyword.includes("nam")){
        window.location.href = "../HTML/Nam.html";
    }
    else if(keyword.includes("đong ho nu")){
        window.location.href = "../HTML/Nu.html";
    }else if(keyword.includes("nu")){
        window.location.href = "../HTML/Nu.html";
    }else if(keyword.includes("nữ")){
        window.location.href = "../HTML/Nu.html";
    }
    else if(keyword.includes("đồng hồ sinh viên")){
        window.location.href = "../HTML/SinhVien.html";
    }else if(keyword.includes("đong ho sinh vien")){
        window.location.href = "../HTML/SinhVien.html";
    }else if(keyword.includes("đồng hồ cao cấp")){
        window.location.href = "../HTML/CaoCap.html";
    }else if(keyword.includes("đong ho cao cap")){
        window.location.href = "../HTML/CaoCap.html";
    }else if(keyword.includes("cao cấp")){
        window.location.href = "../HTML/CaoCap.html";
    }else if(keyword.includes("cao cap")){
        window.location.href = "../HTML/CaoCap.html";
    }
    else {
        alert("Không tìm thấy sản phẩm.");
    }
}