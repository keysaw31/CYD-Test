// function toggleMenu(x) {
//    x.classList.toggle("change");
//    var menuDropdown = document.getElementById("menuDropdown");
//    menuDropdown.style.display = (menuDropdown.style.display === "block") ? "none" : "block";
// }
//     setTimeout(function() {
//         window.location.href = '#main-content'; 
//     }, 3000);


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('hamburgerMenu');
  const navLinks = document.getElementById('navLinks');

  menuButton.addEventListener('click', function() {
      // Check if the menu is open and set the position accordingly
      if (navLinks.style.left === '0px') {
          navLinks.style.left = '-100%';
      } else {
          navLinks.style.left = '0px';
      }
  });
});



// Page scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      
      let offset;
      // Adjust the offset values as needed for each section
      if (this.getAttribute('href') === '#about') {
        offset = 150; // Example offset for About
      } else if (this.getAttribute('href') === '#contact') {
        offset = 200; // Example offset for Contact
      } else {
        offset = 20; // Default offset for other sections
      }
  
      const sectionTop = section.offsetTop - offset;
  
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    });
  });
  

// Quote button page scroll
document.getElementById('quoteButton').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default anchor behavior

  const contactSection = document.getElementById('contact');
  const offset = 200; // Adjust this value to set how much higher you want to scroll
  const contactTop = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({ top: contactTop, behavior: 'smooth' });
});


  
    