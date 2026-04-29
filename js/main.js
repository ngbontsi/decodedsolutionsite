document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
});