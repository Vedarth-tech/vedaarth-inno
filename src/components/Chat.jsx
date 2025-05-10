import React, { useState, useEffect, useRef } from 'react';
import '../styles/chat.css';
import { getResponse } from './GeminiChat';

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hi there👋, I am Ved!' },
        { from: 'bot', text: 'How can I help you today?' },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [typingMessage, setTypingMessage] = useState('');
    const chatBodyRef = useRef(null); // 🔥 Ref for chat body

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage = { from: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        const botReply = await getResponse(input);
        setLoading(false);

        // Typing effect logic
        setTypingMessage('');
        let i = 0;
        const typingInterval = setInterval(() => {
            setTypingMessage(prev => prev + botReply.charAt(i));
            i++;
            if (i >= botReply.length) {
                clearInterval(typingInterval);
                setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
                setTypingMessage('');
            }
        }, 50); // Typing speed
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    // 🔥 Auto-scroll to bottom whenever messages or typingMessage changes
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({
                top: chatBodyRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages, typingMessage]);

    return (
        <div className="chat-wrapper">
            {/* Chat Icon */}
            <div className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
                <img src="./assets/image/chatbot.png" alt="Chatbot Icon" />
            </div>

            {/* Chat Modal */}
            {isOpen && (
                <div className="chat-modal bg-gradient-to-br from-primary to-accent">
                    <div className="chat-header">
                        <span>Chat with VED</span>
                        <button className="chat-close" onClick={() => setIsOpen(false)}>&times;</button>
                    </div>

                    <div className="chat-body" ref={chatBodyRef}> {/* 🔥 Apply ref here */}
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={msg.from === 'bot' ? 'left-chat' : 'right-chat'}
                            >
                                {msg.from === 'bot' && (
                                    <img
                                        className="w-8 p-1 bg-slate-300 shadow-2xl rounded-full"
                                        src="./assets/image/chatbot.png"
                                        alt="Bot"
                                    />
                                )}
                                {msg.from === 'user' && (
                                    <img
                                        className="w-8 p-1 bg-slate-300 shadow-2xl rounded-full"
                                        src="./assets/image/user.png"
                                        alt="User"
                                    />
                                )}
                                <div className={`chat-message ${msg.from}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Typing animation while typing */}
                        {typingMessage && (
                            <div className="left-chat">
                                <img
                                    className="w-8 p-1 bg-slate-300 shadow-2xl rounded-full"
                                    src="./assets/image/chatbot.png"
                                    alt="Bot"
                                />
                                <div className="chat-message bot animate-pulse">
                                    {typingMessage}
                                    <span className="ml-1 animate-blink">|</span> {/* Blinking cursor */}
                                </div>
                            </div>
                        )}

                        {/* Loading typing dots while waiting */}
                        {loading && !typingMessage && (
                            <div className="left-chat">
                                <img
                                    className="w-8 p-1 bg-slate-300 shadow-2xl rounded-full"
                                    src="./assets/image/chatbot.png"
                                    alt="Bot"
                                />
                                <div className="chat-message bot flex items-center gap-1">
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="chat-input-bar">
                        <input
                            type="text"
                            value={input}
                            className='border-blue-400 bg-white placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500'
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            aria-label="Type your message"
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
