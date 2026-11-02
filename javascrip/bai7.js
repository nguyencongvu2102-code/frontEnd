document.addEventListener('DOMContentLoaded', function () {
    createCartStructure();
    loadCartItems();
    updateCartCount();
});

function createCartStructure() {
    if (document.getElementById('cart-items-container')) return;

    const mainContent = document.querySelector('body');
    const cartStructure = document.createElement('div');
    cartStructure.className = 'container mt-4 mb-4';
    cartStructure.innerHTML = `
        <h2 class="text-center mb-4">Giỏ hàng của bạn</h2>
        <div class="row">
            <div class="col-md-8">
                <div class="row font-weight-bold mb-3 d-none d-md-flex">
                    <div class="col-md-2">Hình ảnh</div>
                    <div class="col-md-4">Sản phẩm</div>
                    <div class="col-md-2">Giá</div>
                    <div class="col-md-2">Số lượng</div>
                    <div class="col-md-1">Tổng</div>
                    <div class="col-md-1"></div>
                </div>
                <div id="cart-items-container"></div>
            </div>
            <div class="col-md-4">
                <div id="cart-summary" class="card">
                    <div class="card-header bg-primary text-white">
                        <h5 class="mb-0">Tóm tắt đơn hàng</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between mb-2">
                            <span>Tạm tính:</span>
                            <span id="cart-subtotal">0₫</span>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Phí vận chuyển:</span>
                            <span id="cart-shipping">10.000₫</span>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between font-weight-bold">
                            <span>Tổng cộng:</span>
                            <span id="cart-total">0₫</span>
                        </div>
                        <button class="btn btn-success btn-block mt-3" onclick="checkout()">Thanh toán</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    const footer = document.querySelector('footer');
    mainContent.insertBefore(cartStructure, footer);
}

function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById('cart-items-container');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p class="text-center">Giỏ hàng của bạn trống.</p>';
        document.getElementById('cart-summary').style.display = 'none';
        return;
    }

    document.getElementById('cart-summary').style.display = 'block';

    let totalPrice = 0;
    let html = '';

    cartItems.forEach((item, index) => {
        const itemPrice = parseFloat(item.price.replace(/[^\d]/g, ''));
        const itemTotal = itemPrice * item.quantity;
        totalPrice += itemTotal;

        html += `
            <div class="cart-item row align-items-center mb-3 p-2" style="background-color: #f8f9fa; border-radius: 5px;">
                <div class="col-md-3">
                    <h5>${item.name}</h5>
                </div>
                <div class="col-md-2">
                    <span>${item.price}</span>
                </div>
                <div class="col-md-2">
                    <div class="input-group">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, -1)">-</button>
                        <input type="text" class="form-control text-center" value="${item.quantity}" readonly>
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <div class="col-md-1">
                    <span>${formatCurrency(itemTotal)}</span>
                </div>
                <div class="col-md-1">
                    <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });

    cartContainer.innerHTML = html;

    document.getElementById('cart-subtotal').innerText = formatCurrency(totalPrice);
    const shipping = 10000;
    document.getElementById('cart-shipping').innerText = formatCurrency(shipping);
    document.getElementById('cart-total').innerText = formatCurrency(totalPrice + shipping);
}

function updateQuantity(index, change) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (cartItems[index]) {
        cartItems[index].quantity += change;
        if (cartItems[index].quantity < 1) cartItems[index].quantity = 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartCount();
        loadCartItems();
    }
}

function removeItem(index) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartCount();
        loadCartItems();
    }
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem('cartCount', count);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = count;
    }
}

function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + '₫';
}

function checkout() {
    alert('Cảm ơn bạn đã mua hàng! Đơn hàng của bạn đang được xử lý.');
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartCount', 0);
    updateCartCount();
    loadCartItems();
}
