document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenuIcon = document.querySelector('.mobile-menu');
    const mobileMenuIconOpen = document.querySelector('.fa-bars');
    const mobileMenuIconClose = document.querySelector('.fa-xmark');
    const tabMenu = document.querySelector('.tab-menu');

    // Pastikan state awal benar
    mobileMenuIconOpen.style.display = 'inline-block';
    mobileMenuIconClose.style.display = 'none';
    
    function toggleMenu() {
        if (menuToggle.checked) {
            tabMenu.style.display = 'flex';
            mobileMenuIconOpen.style.display = 'none';
            mobileMenuIconClose.style.display = 'inline-block';
        } else {
            tabMenu.style.display = 'none';
            mobileMenuIconOpen.style.display = 'inline-block';
            mobileMenuIconClose.style.display = 'none';
        }
    }

    mobileMenuIcon.addEventListener('click', function(event) {
        event.preventDefault();
        menuToggle.checked = !menuToggle.checked;
        toggleMenu();
    });

    // Event listener untuk click di luar menu
    document.addEventListener('click', function(event) {
        if (!tabMenu.contains(event.target) && 
            !event.target.closest('.mobile-menu') && 
            menuToggle.checked) {
            menuToggle.checked = false;
            toggleMenu(); // Pastikan icons diupdate
        }
    });

    // Handle resize window
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            tabMenu.style.display = 'flex';
            mobileMenuIconOpen.style.display = 'inline-block';
            mobileMenuIconClose.style.display = 'none';
            menuToggle.checked = false; // Reset state checkbox
        } else if (!menuToggle.checked) {
            tabMenu.style.display = 'none';
            mobileMenuIconOpen.style.display = 'inline-block'; 
            mobileMenuIconClose.style.display = 'none';
        }
    });
});