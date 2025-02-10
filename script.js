function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

 // Scroll to top functionality
 const scrollBtn = document.getElementById('scroll-top');
 window.onscroll = function() {
     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
         scrollBtn.style.display = "flex";
     } else {
         scrollBtn.style.display = "none";
     }
 };

 scrollBtn.onclick = function() {
     window.scrollTo({ top: 0, behavior: 'smooth' });
 };