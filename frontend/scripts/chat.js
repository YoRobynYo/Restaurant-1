document.addEventListener('DOMContentLoaded', () => {
    // --- Get all the chat elements from the HTML ---
    const chatWidget = document.getElementById('chat-widget');
    const chatToggle = document.getElementById('chat-toggle');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    // Make sure all elements were found before continuing
    if (!chatWidget || !chatToggle || !chatMessages || !chatInput || !chatSend) {
        console.error('Chat UI elements not found. Please check your HTML IDs.');
        return;
    }

    // --- Event Listeners ---
    // A variable to keep track of whether the chat is open or closed
let isChatOpen = true; 

// This button will now open AND close the chat
chatToggle.addEventListener('click', () => {
    if (isChatOpen) {
        // If it's open, hide the main chat area and change the button text
        chatMessages.style.display = 'none';
        chatInput.parentElement.style.display = 'none';
        chatToggle.textContent = '↑'; // Change to an "open" icon
        isChatOpen = false;
    } else {
        // If it's closed, show the main chat area and change the button text back
        chatMessages.style.display = 'flex';
        chatInput.parentElement.style.display = 'flex';
        chatToggle.textContent = '×'; // Change back to a "close" icon
        isChatOpen = true;
    }
});

    // Send message when the "Send" button is clicked
    chatSend.addEventListener('click', sendMessage);

    // Send message when the "Enter" key is pressed in the input field
    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // --- Core Functions ---
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender); // sender will be 'user' or 'bot'
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        // Automatically scroll to the newest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function sendMessage() {
        const userInput = chatInput.value.trim();
        if (userInput === '') {
            return; // Don't send empty messages
        }

        // 1. Display the user's message immediately
        addMessage(userInput, 'user');
        chatInput.value = ''; // Clear the input box

        // 2. Send the message to your backend
        try {
            const response = await fetch('http://localhost:8000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userInput }),
            });

            if (!response.ok) {
                // Handle server errors (like 500)
                addMessage('Sorry, something went wrong on our end. Please try again.', 'bot');
                return;
            }

            const data = await response.json();

            // 3. Display the AI's response
            addMessage(data.reply, 'bot');

        } catch (error) {
            // Handle network errors (backend is down, etc.)
            console.error('Error sending message:', error);
            addMessage('Sorry, I seem to be offline right now. Please try again later.', 'bot');
        }
    }
});