import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const toggleChat = () => setOpen(!open);

  const sendMessage = () => {
    if (message.trim() === '') return;
    setChatLog([...chatLog, message]);
    setMessage('');
  };

  return (
    <div className="chatbot-wrapper" style={{ position: 'fixed', bottom: 20, right: 20 }}>
      <button
        onClick={toggleChat}
        className="chatBtn"
        aria-label="Toggle Chat"
        style={{ fontSize: '24px', padding: '10px 15px', borderRadius: '50%', cursor: 'pointer' }}
      >
        <FontAwesomeIcon icon={faComments} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="chatBox"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '300px',
              height: '400px',
              backgroundColor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              marginTop: '10px',
              overflow: 'hidden',
            }}
          >
            <div
              className="chatMessages"
              style={{
                flex: 1,
                padding: '10px',
                overflowY: 'auto',
                borderBottom: '1px solid #ddd',
              }}
            >
              {chatLog.length === 0 && (
                <p style={{ color: '#888', fontStyle: 'italic' }}>No messages yet...</p>
              )}
              {chatLog.map((msg, i) => (
                <div key={i} className="message" style={{ marginBottom: '8px' }}>
                  {msg}
                </div>
              ))}
            </div>

            <div
              className="chatInputArea"
              style={{ display: 'flex', padding: '10px', gap: '8px' }}
            >
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="chatInput"
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '14px',
                }}
              />
              <button
                onClick={sendMessage}
                className="sendBtn"
                aria-label="Send message"
                style={{
                  backgroundColor: '#007bff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChatBot;
