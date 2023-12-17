import React from "react";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            setNewMessage('');
        }
    };

    useEffect(() => {
        // Simular un mensaje de respuesta del bot después de 1 segundo
        if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
            setTimeout(() => {
                setMessages([...messages, { text: '¡Hola!', sender: 'bot' }]);
            }, 1000);
        }
    }, [messages]);
    return (

        <div className="container-fluid position-relative p-4">
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="row justify-content-evenly">
                            <div className="col text-start">
                                <h5>Chat grupal</h5>
                            </div>
                            <div className="text-end col">
                                <button type="button" className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg></button>
                                <button type="button" className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div style={{ height: '400px' }} className="chat-dimension">
                        {messages.map((message, index) => (
                            <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}
                                className="p-2">
                                <div className="message-dimension" style={{ background: message.sender === 'user' ? '#48ebfa' : '#E0E0E0' }}> <strong >{message.sender === 'user' ? 'Usuario#001' : 'Usuario#002'}:</strong> {message.text} </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="input-group mb-3 send-text">
                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" value={newMessage} onChange={handleMessageChange} />
                    <button type="button" className="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                    </svg></button>
                    <button type="button" className="btn btn-outline-secondary" onClick={handleSendMessage}>Enviar</button>
                </div>

            </div>
        </div>
    );
}

export default Chat;