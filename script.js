const navIcon = document.querySelector('.nav-icon');
const navList = document.querySelector('.nav-list');


navIcon.addEventListener('click', (e) => {
 
    if(navIcon.classList.contains('nav-icon')) {
      e.preventDefault();
      navIcon.setAttribute('class', 'nav-icon_close');
      navList.style.opacity = '1';
      navList.style.visibility = 'visible';
    }  else if(navIcon.classList.contains('nav-icon_close')) {
        navIcon.setAttribute('class', 'nav-icon');
        navList.style.opacity = '0';
        navList.style.visibility = 'hidden';
    } 
});



