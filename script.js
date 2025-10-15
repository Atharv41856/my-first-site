// Simple demo: show thank-you on "send"
document.getElementById('sendBtn').addEventListener('click', () => {
  document.getElementById('contactForm').style.display = 'none';
  const p = document.getElementById('formMsg');
  p.style.display = 'block';
});
