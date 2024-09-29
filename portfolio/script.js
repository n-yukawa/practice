// メニューを開閉するボタン
const responsive_menu_btn = document.querySelector('.responsive-btn');
responsive_menu_btn.addEventListener('click', menuToggle);

// ×ボタンをクリックしてメニューを閉じる
const close_btn = document.querySelector('.close-btn');
close_btn.addEventListener('click', menuToggle);

// メニュー開閉の切り替え関数
function menuToggle() {
    const header_menu_detail = document.querySelector('.header-nav');
    header_menu_detail.classList.toggle('menu-active');
}

// ナビゲーションリンクをすべて取得
const navLinks = document.querySelectorAll('.nav-link');

// 各リンクにクリックイベントを追加してメニューを閉じる
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // メニューを閉じる
        const header_menu_detail = document.querySelector('.header-nav');
        header_menu_detail.classList.remove('menu-active');
    });
});
