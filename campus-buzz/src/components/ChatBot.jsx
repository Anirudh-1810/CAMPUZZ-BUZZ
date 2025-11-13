import React, { useState, useEffect, useRef } from 'react';

function ChatBot() {
  const [messages, setMessages] = useState([
    { content: "Hello! 👋 How can I help you with Campus Buzz today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const chatBoxRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { content: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // Get bot reply
    getBotReply(input.toLowerCase());
    setInput('');
  };

  const getBotReply = (userMsg) => {
    let reply = "I'm not sure I understand. Can you rephrase?";
    if (userMsg.includes("hello") || userMsg.includes("hi")) {
      reply = "Hello! 👋 How can I help you with Campus Buzz today?";
    } else if (userMsg.includes("event")) {
      reply = "We have upcoming events this week! 🎉 Check the events page for details.";
    } else if (userMsg.includes("contact")) {
      reply = "You can contact us at: campusbuzz@university.edu";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { content: reply, sender: 'bot' }]);
    }, 800);
  };

  // State to manage if chat is open or closed
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white text-3xl z-50 hover:scale-110 transition-transform"
      >
        💬
      </button>
    );
  }

  return (
    // This is styled to be in a fixed position.
    <div className="fixed bottom-4 right-4 w-full max-w-sm h-[600px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50">
      <div className="chat-header bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center">
        <span className="font-bold">Campus Buzz Chatbot</span>
        <button onClick={() => setIsOpen(false)} className="font-bold text-xl">&times;</button>
      </div>
      <div className="chat-box flex-1 p-4 overflow-y-auto bg-gray-50" ref={chatBoxRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message my-2 max-w-[75%] py-2 px-4 rounded-lg text-sm ${
            msg.sender === 'user' 
            ? 'bg-blue-600 text-white ml-auto rounded-br-none' 
            : 'bg-gray-200 text-black mr-auto rounded-bl-none'
          }`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chat-input flex border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-1 p-4 border-none outline-none text-sm"
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-6 font-semibold transition hover:bg-blue-700">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot;