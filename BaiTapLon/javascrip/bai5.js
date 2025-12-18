function addToCart(name, price) {
    let product = {
        name: name,
        price: price
    };
    localStorage.setItem('product', JSON.stringify(product));
    let cartCount = localStorage.getItem('cartCount') || 0;
    cartCount = parseInt(cartCount) + 1;
    localStorage.setItem('cartCount', cartCount);

    document.getElementById('cart-count').textContent = cartCount;
}
function buyNow(name, price) {
    let product = {
        name: name,
        price: price
    };
    localStorage.setItem('product', JSON.stringify(product));
    window.location.href = 'thanhtoan.html';
}