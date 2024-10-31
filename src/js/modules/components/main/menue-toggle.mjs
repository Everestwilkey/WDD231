export default function menuToggle() {
  const menuButton = document.getElementById('global-nav-toggle');
  const globalNav = document.querySelector('.global-nav');
  menuButton.addEventListener('click', (event) => {
      let target = event.target;
      globalNav.classList.toggle('show')
      if(target.tagName != "BUTTON"){
        target = target.closest('button');
      }
      if (globalNav.classList.contains('show')){
        target.setAttribute("aria-expanded", true);
      } else {target.setAttribute("aria-expanded", false);
    }
  
    console.log("toggle");
    });
  }

