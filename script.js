// Enhanced Chat App JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.querySelector('.chat-container');
    const inputField = document.querySelector('.input-field');
    const sendBtn = document.querySelector('.send-btn');
    const pricingOptions = document.querySelectorAll('.pricing-option');
    const radioBtns = document.querySelectorAll('.radio-btn');
    const menuBtn = document.querySelector('.menu-btn');

    // Chat state management
    let chatHistory = [];
    let isTyping = false;
    let selectedWalkOption = null;

    // Enhanced walker responses with context awareness
    const walkerResponses = {
        greeting: [
            "Hi there! I'm Samuel, your dog walker. How can I help you today? 🐕",
            "Hello! I'm available for dog walking services. What do you need? 🦮",
            "Hey! Ready to help with your furry friend. What's the plan? 🐾"
        ],
        general: [
            "That sounds great! I'd be happy to help with your dog walking needs.",
            "Perfect! I'm available for those times. What breed is your dog?",
            "I love walking dogs! How old is your furry friend?",
            "That works perfectly with my schedule. I'll see you then!",
            "Great choice! I'm looking forward to meeting your dog.",
            "I'm excited to help! Dogs are the best walking companions.",
            "That's a wonderful idea! Walking is so good for dogs.",
            "I'm available and ready to help! What's your dog's name?"
        ],
        pricing: [
            "Great choice! I've got you booked for that walk.",
            "Perfect! I'll see you then for the walk.",
            "Excellent! I'm looking forward to walking your dog.",
            "Awesome! I've added that to my schedule."
        ],
        questions: [
            "What's your dog's energy level like?",
            "Does your dog have any special needs I should know about?",
            "What's your preferred walking route?",
            "How does your dog behave around other dogs?"
        ]
    };

    // Initialize chat with welcome message
    function initializeChat() {
        setTimeout(() => {
            const welcomeMessage = walkerResponses.greeting[Math.floor(Math.random() * walkerResponses.greeting.length)];
            addMessage(welcomeMessage, false, 0);
        }, 1000);
    }

    // Enhanced message creation with better structure
    function createMessageElement(text, isSent = true, timestamp = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
        
        const time = timestamp || new Date();
        const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <p>${text}</p>
            <span class="message-time">${timeString}</span>
        `;
        
        return messageDiv;
    }

    // Enhanced message addition with better animations
    function addMessage(text, isSent = true, delay = 0) {
        setTimeout(() => {
            const messageDiv = createMessageElement(text, isSent);
            
            // Add to chat history
            chatHistory.push({
                text: text,
                isSent: isSent,
                timestamp: new Date(),
                id: Date.now()
            });
            
            chatContainer.appendChild(messageDiv);
            
            // Smooth scroll to bottom
            smoothScrollToBottom();
            
            // Enhanced animation
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateY(20px)';
            
            requestAnimationFrame(() => {
                messageDiv.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                messageDiv.style.opacity = '1';
                messageDiv.style.transform = 'translateY(0)';
            });
            
            // Save to localStorage
            saveChatHistory();
            
        }, delay);
    }

    // Smooth scrolling function
    function smoothScrollToBottom() {
        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: 'smooth'
        });
    }

    // Enhanced typing indicator
    function showTypingIndicator() {
        if (isTyping) return null;
        
        isTyping = true;
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
        smoothScrollToBottom();
        return typingDiv;
    }

    // Remove typing indicator
    function removeTypingIndicator(typingDiv) {
        if (typingDiv) {
            typingDiv.style.opacity = '0';
            typingDiv.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                if (typingDiv.parentNode) {
                    typingDiv.remove();
                }
                isTyping = false;
            }, 300);
        }
    }

    // Smart response generation based on context
    function generateSmartResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Check for pricing-related messages
        if (message.includes('price') || message.includes('cost') || message.includes('$')) {
            return "I offer 30-minute walks for $29 and 1-hour walks for $49. Which would you prefer?";
        }
        
        // Check for time-related messages
        if (message.includes('time') || message.includes('when') || message.includes('schedule')) {
            return "I'm flexible with timing! What works best for you? I can do morning, afternoon, or evening walks.";
        }
        
        // Check for dog-related questions
        if (message.includes('dog') || message.includes('pet') || message.includes('walk')) {
            return walkerResponses.questions[Math.floor(Math.random() * walkerResponses.questions.length)];
        }
        
        // Check for booking confirmations
        if (message.includes('book') || message.includes('confirm') || message.includes('yes')) {
            return "Perfect! I'll send you a confirmation shortly. Looking forward to meeting your dog! 🐕";
        }
        
        // Default response
        return walkerResponses.general[Math.floor(Math.random() * walkerResponses.general.length)];
    }

    // Enhanced send message function
    function sendMessage() {
        const message = inputField.value.trim();
        if (message && !isTyping) {
            // Add user message
            addMessage(message, true);
            inputField.value = '';
            
            // Disable input while processing
            inputField.disabled = true;
            sendBtn.disabled = true;
            
            // Show typing indicator
            const typingDiv = showTypingIndicator();
            
            // Generate smart response
            const response = generateSmartResponse(message);
            
            // Simulate realistic response time
            const responseDelay = 1000 + Math.random() * 2000;
            
            setTimeout(() => {
                removeTypingIndicator(typingDiv);
                addMessage(response, false);
                
                // Re-enable input
                inputField.disabled = false;
                sendBtn.disabled = false;
                inputField.focus();
            }, responseDelay);
        }
    }

    // Enhanced radio button functionality
    function handlePricingSelection(index) {
        // Remove active class from all radio buttons
        radioBtns.forEach(btn => {
            btn.classList.remove('active');
            btn.style.background = '';
        });
        
        // Add active class to clicked radio button
        radioBtns[index].classList.add('active');
        radioBtns[index].style.background = 'white';
        
        // Store selection
        selectedWalkOption = index;
        
        // Add confirmation message
        const duration = index === 0 ? '30 minute walk' : '1 hour walk';
        const price = index === 0 ? '$29' : '$49';
        
        setTimeout(() => {
            addMessage(`I'll take the ${duration} for ${price}!`, true);
            
            // Show typing indicator
            const typingDiv = showTypingIndicator();
            
            // Walker confirmation response
            setTimeout(() => {
                removeTypingIndicator(typingDiv);
                const confirmation = walkerResponses.pricing[Math.floor(Math.random() * walkerResponses.pricing.length)];
                addMessage(`${confirmation} I'll see you soon! 🐾`, false);
            }, 1500);
        }, 500);
    }

    // Enhanced menu button functionality
    function handleMenuClick() {
        // Add rotation animation
        menuBtn.style.transform = 'rotate(90deg)';
        setTimeout(() => {
            menuBtn.style.transform = 'rotate(0deg)';
        }, 200);
        
        // Show menu options (you could expand this)
        addMessage('Menu clicked! 🍔', true);
        
        // Simulate menu response
        setTimeout(() => {
            addMessage('Here are your options: Profile, Settings, Help, or Logout. What would you like to do?', false);
        }, 1000);
    }

    // Local storage functions
    function saveChatHistory() {
        try {
            localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
        } catch (e) {
            console.log('Could not save chat history');
        }
    }

    function loadChatHistory() {
        try {
            const saved = localStorage.getItem('chatHistory');
            if (saved) {
                chatHistory = JSON.parse(saved);
                // Restore messages to UI
                chatHistory.forEach(msg => {
                    const messageDiv = createMessageElement(msg.text, msg.isSent, new Date(msg.timestamp));
                    chatContainer.appendChild(messageDiv);
                });
                smoothScrollToBottom();
            }
        } catch (e) {
            console.log('Could not load chat history');
        }
    }

    // Enhanced input field functionality
    function handleInputChange() {
        const hasText = inputField.value.trim().length > 0;
        
        if (hasText) {
            sendBtn.style.transform = 'scale(1.1)';
            sendBtn.style.background = 'hsl(293, 100%, 63%)';
            sendBtn.style.boxShadow = '0 4px 12px rgba(147, 51, 234, 0.3)';
        } else {
            sendBtn.style.transform = 'scale(1)';
            sendBtn.style.background = 'hsl(271, 36%, 24%)';
            sendBtn.style.boxShadow = 'none';
        }
    }

    // Enhanced message hover effects
    function addMessageInteractions() {
        const messages = document.querySelectorAll('.message');
        messages.forEach(message => {
            message.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            });
            
            message.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            });
            
            // Add click to copy functionality
            message.addEventListener('click', function() {
                const text = this.querySelector('p').textContent;
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(text).then(() => {
                        // Show copy feedback
                        const originalText = this.querySelector('p').textContent;
                        this.querySelector('p').textContent = 'Copied! ✓';
                        this.style.background = 'rgba(34, 197, 94, 0.1)';
                        
                        setTimeout(() => {
                            this.querySelector('p').textContent = originalText;
                            this.style.background = '';
                        }, 1500);
                    }).catch(() => {
                        // Fallback for older browsers
                        console.log('Copy failed, but that\'s okay!');
                    });
                }
            });
        });
    }

    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    inputField.addEventListener('input', handleInputChange);

    // Pricing option event listeners
    radioBtns.forEach((radio, index) => {
        radio.addEventListener('click', () => handlePricingSelection(index));
    });

    // Menu button event listener
    menuBtn.addEventListener('click', handleMenuClick);

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            inputField.blur();
        }
    });

    // Initialize the chat
    loadChatHistory();
    initializeChat();
    addMessageInteractions();

    // Add some realistic initial interaction
    setTimeout(() => {
        addMessage('Hi! I\'m ready to help with your dog walking needs. What would you like to know?', false, 2000);
    }, 3000);

    // Auto-focus input field
    inputField.focus();

    // Add some fun Easter eggs
    let clickCount = 0;
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 5) {
                addMessage('You found the secret! 🎉', false);
                clickCount = 0;
            }
        });
    }

    // Debug logging
    console.log('Chat app initialized successfully!');
    console.log('Available elements:', {
        chatContainer: !!chatContainer,
        inputField: !!inputField,
        sendBtn: !!sendBtn,
        pricingOptions: pricingOptions.length,
        radioBtns: radioBtns.length,
        menuBtn: !!menuBtn
    });
});
