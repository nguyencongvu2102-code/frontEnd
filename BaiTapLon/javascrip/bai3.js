let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
updateCartCount();

function updateCartCount() {
    document.getElementById('cart-count').innerText = cartCount;
    localStorage.setItem('cartCount', cartCount);
}

function addToCart() {
    cartCount++;
    updateCartCount();
    
    const productName = document.querySelector('.product-title').innerText;
    const productPrice = document.querySelector('.product-price').innerText;
    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    cartItems.push({
        name: productName,
        price: productPrice,
        quantity: 1
    });
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
}

function buyNow() {
    addToCart();
    window.location.href = '../HTML/giohang.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.product-rating .fa-star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.style.color = '#f39c12');
            for (let i = 0; i <= index; i++) {
                stars[i].style.color = '#e67e22';
            }
            localStorage.setItem('productRating', index + 1);
            alert(`Bạn đã đánh giá ${index + 1} sao cho sản phẩm này!`);
        });
    });
});



// function buyNow() {
//     addToCart();
//     const productName = document.querySelector('.product-title').innerText;
//     const productPrice = document.querySelector('.product-price').innerText;
    
//     localStorage.setItem('product', JSON.stringify({
//         name: productName,
//         price: parseFloat(productPrice.replace('VNĐ', '').trim())  
//     }));
    
//     window.location.href = '../HTML/thanhtoan.html';
// }