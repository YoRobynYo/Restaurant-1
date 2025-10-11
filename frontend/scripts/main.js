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

// AI Chat Widget
const chatWidget = document.getElementById('chat-widget');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatToggle = document.getElementById('chat-toggle');

if (chatWidget) {
  // Send message function
  async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, 'user');
    chatInput.value = '';
    
    try {
      // Send to backend API
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_input: message,
          user_email: 'guest@restro.example'
        })
      });
      
      const data = await response.json();
      addMessage(data.reply, 'bot');
    } catch (error) {
      addMessage('Sorry, I\'m having trouble connecting. Please try again.', 'bot');
    }
  }
  
  // Add message to chat
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // Event listeners
  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // Toggle chat widget
  chatToggle.addEventListener('click', () => {
    chatWidget.style.display = 'none';
  });
}
