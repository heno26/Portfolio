// Scroll to top button
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Welcome console message
window.addEventListener('load', () => {
  console.log("Welcome to PixelPerfect Studio – your frontend partner!");
});