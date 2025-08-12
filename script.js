// Chat App JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.querySelector('.chat-container');
    const inputField = document.querySelector('.input-field');
    const sendBtn = document.querySelector('.send-btn');
    const pricingOptions = document.querySelectorAll('.pricing-option');
    const radioBtns = document.querySelectorAll('.radio-btn');

    // Sample responses for the dog walker
    const walkerResponses = [
        "That sounds great! I'd be happy to help with your dog walking needs.",
        "Perfect! I'm available for those times. What breed is your dog?",
        "I love walking dogs! How old is your furry friend?",
        "That works perfectly with my schedule. I'll see you then!",
        "Great choice! I'm looking forward to meeting your dog.",
        "I'm excited to help! Dogs are the best walking companions.",
        "That's a wonderful idea! Walking is so good for dogs.",
        "I'm available and ready to help! What's your dog's name?"
    ];

    // Function to add a new message to the chat
    function addMessage(text, isSent = true, delay = 0) {
        setTimeout(() => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
            
            const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            messageDiv.innerHTML = `
                <p>${text}</p>
                <span class="message-time">${timestamp}</span>
            `;
            
            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
            
            // Add animation
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateY(20px)';
            setTimeout(() => {
                messageDiv.style.transition = 'all 0.3s ease';
                messageDiv.style.opacity = '1';
                messageDiv.style.transform = 'translateY(0)';
            }, 10);
        }, delay);
    }

    // Function to simulate typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message received typing-indicator';
        typingDiv.innerHTML = `
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        chatContainer.appendChild(typingDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        return typingDiv;
    }

    // Function to remove typing indicator
    function removeTypingIndicator(typingDiv) {
        if (typingDiv) {
            typingDiv.remove();
        }
    }

    // Send message function
    function sendMessage() {
        const message = inputField.value.trim();
        if (message) {
            // Add user message
            addMessage(message, true);
            inputField.value = '';
            
            // Show typing indicator
            const typingDiv = showTypingIndicator();
            
            // Simulate walker response after a delay
            setTimeout(() => {
                removeTypingIndicator(typingDiv);
                const randomResponse = walkerResponses[Math.floor(Math.random() * walkerResponses.length)];
                addMessage(randomResponse, false);
            }, 1500 + Math.random() * 1000);
        }
    }

    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Make radio buttons interactive
    radioBtns.forEach((radio, index) => {
        radio.addEventListener('click', function() {
            // Remove active class from all radio buttons
            radioBtns.forEach(btn => {
                btn.classList.remove('active');
                btn.style.background = '';
            });
            
            // Add active class to clicked radio button
            this.classList.add('active');
            this.style.background = 'white';
            
            // Add a message about the selection
            const duration = index === 0 ? '30 minute walk' : '1 hour walk';
            const price = index === 0 ? '$29' : '$49';
            
            setTimeout(() => {
                addMessage(`I'll take the ${duration} for ${price}!`, true);
                
                // Show typing indicator
                const typingDiv = showTypingIndicator();
                
                // Walker response
                setTimeout(() => {
                    removeTypingIndicator(typingDiv);
                    addMessage(`Perfect! I've booked you for the ${duration}. I'll see you soon!`, false);
                }, 1500);
            }, 500);
        });
    });

    // Make menu button interactive
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', function() {
        this.style.transform = 'rotate(90deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 200);
        
        // Add a fun message
        addMessage('Menu clicked! 🍔', true);
    });

    // Add some initial interaction
    setTimeout(() => {
        addMessage('Hi! I'm ready to help with your dog walking needs. What would you like to know?', false, 2000);
    }, 1000);

    // Make the input field more responsive
    inputField.addEventListener('input', function() {
        if (this.value.trim()) {
            sendBtn.style.transform = 'scale(1.1)';
            sendBtn.style.background = 'hsl(293, 100%, 63%)';
        } else {
            sendBtn.style.transform = 'scale(1)';
            sendBtn.style.background = 'hsl(271, 36%, 24%)';
        }
    });

    // Add hover effects to existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(message => {
        message.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        message.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
