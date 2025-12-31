import { useState } from "react";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 채팅 박스 */}
        <div className="chat-widget">
          <div className="chat-header">
            <div className = "chat-active">
                <img className="chat-avatar" src="/chatbot.png" alt="" />
                <div className="chat-title">
                    <span className="chat-name">CMES Agent</span>
                    <span className="chat-notify">Ready to help you!</span>
                </div>
            </div>
            <button className="chat-more"><img src="/more.svg" alt="" /></button>
            <button className="chat-close"onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-body">
            <div className="chat-bubble">
                <p>Welcome to our page 👋</p>
                <p>How can we help you?</p>
            </div>

            <div className="quick-actions">
                <button className="quick-btn">Company info</button>
                <button className="quick-btn">Engineering</button>
                <button className="quick-btn">Sales/Lead</button>
            </div>
            </div>
                <div className="chat-bottom">
                    <span className="chat-placeholder">
                        What would you like to know?
                    </span>
                    <div className="chat-bottom-row">
                        <div className= "chat-bottom-icon">
                            <button className="chat-image"><img src="/plus.svg" alt="" /></button>
                            <button className="chat-image"><img src="/outline.svg" alt="" /></button>
                            <button className="chat-microphone"><img src="/microphone.svg" alt="" /></button>
                        </div>
                        <button className="chat-send"><img src="/arrow.svg" alt="" /></button>
                 </div>
            </div>
        </div>
        <button className="chatbot-trigger" aria-label="Open chat" 
        onClick={() => setOpen(true)}><img src="/nmnm.png"/></button>
    </>
  );
}
