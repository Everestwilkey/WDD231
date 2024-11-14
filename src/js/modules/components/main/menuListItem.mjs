export default function listToggle() {
    const menuButtons = document.querySelectorAll('.global-nav__split-button__toggle');

    menuButtons.forEach(menuButton => {
        menuButton.addEventListener('click', (event) => {
            // Find the nearest submenu related to this toggle button
            const submenu = menuButton.closest('.global-nav__split-button').nextElementSibling;
            
            if (submenu && submenu.classList.contains('global-nav__submenu')) {
                // Toggle the 'show' class on the submenu
                submenu.classList.toggle('show');
                
                // Update aria-expanded based on the submenu's visibility
                const isExpanded = submenu.classList.contains('show');
                menuButton.setAttribute("aria-expanded", isExpanded);
                
                console.log("Submenu toggled:", isExpanded);
            }
        });
    });
}
