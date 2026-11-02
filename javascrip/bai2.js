document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();

    const sliderItems = document.querySelectorAll('nav div');
    let currentIndex = 0;

    function startSlider() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % sliderItems.length;
            updateSlider();
        }, 3000);
    }

    function updateSlider() {
        const offset = -currentIndex * 100;
        sliderItems.forEach(item => {
            item.style.transform = `translateX(${offset}%)`;
            item.style.transition = 'transform 1s ease-in-out';
        });
    }

    startSlider();

    const brandBoxes = document.querySelectorAll('.khungduoi > div');
    brandBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
        });

        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    const productLinks = document.querySelectorAll('.donghonam a, .donghonu a');
    productLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const productName = this.querySelector('p').innerText.split('\n')[0].trim();
            localStorage.setItem('lastViewedProduct', productName);
        });
    });

    const searchIcon = document.querySelector('.fas.fa-search');
    searchIcon.addEventListener('click', function() {
        const searchBox = document.createElement('div');
        searchBox.style.position = 'fixed';
        searchBox.style.top = '0';
        searchBox.style.left = '0';
        searchBox.style.width = '100%';
        searchBox.style.height = '100%';
        searchBox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        searchBox.style.zIndex = '1000';
        searchBox.style.display = 'flex';
        searchBox.style.justifyContent = 'center';
        searchBox.style.alignItems = 'center';

        searchBox.innerHTML = `
            <div style="background-color: white; padding: 20px; border-radius: 10px; max-width: 500px; width: 100%;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2 style="margin: 0; color: black;">Tìm kiếm</h2>
                    <span id="close-search" style="cursor: pointer; font-size: 24px;">&times;</span>
                </div>
                <input type="text" id="search-input" placeholder="Nhập từ khóa tìm kiếm..." style="width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ddd;">
                <button id="search-button" style="background-color: #f44336; color: white; border: none; padding: 10px 20px; cursor: pointer; width: 100%;">Tìm kiếm</button>
            </div>
        `;

        document.body.appendChild(searchBox);

        document.getElementById('close-search').addEventListener('click', function() {
            document.body.removeChild(searchBox);
        });

        document.getElementById('search-button').addEventListener('click', function() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            if (searchTerm) {
                alert(`Bạn đang tìm kiếm: "${searchTerm}"\nĐang chuyển hướng đến trang kết quả...`);
                document.body.removeChild(searchBox);
            } else {
                alert('Vui lòng nhập từ khóa tìm kiếm!');
            }
        });
    });
});

function updateCartCount() {
    const cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = cartCount;
    }
}
