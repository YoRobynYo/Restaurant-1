// Simple site-wide JS: small interactions and form handling

// Smoothly intercept anchor for demo single-page feeling
document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (!a) return;
  // keep external links and mailto, tel alone
  if (a.hostname && a.hostname !== location.hostname) return;
});

// Review form handling (testimonials page)
const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
  reviewForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! Your review has been received (demo).');
    reviewForm.reset();
  });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! Message sent (demo).');
    contactForm.reset();
  });
}

// Reservation form
const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
  reservationForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Reservation request submitted (demo). We will contact you to confirm.');
    reservationForm.reset();
  });
}