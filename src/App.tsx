import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ChatButton } from '../components/ChatButton';
import { ChatContainer } from '../components/ChatContainer';
import r2wc from 'react-to-webcomponent';
import './index.css'


function App({name = "Emmanuel"}) {
  const [showChat, setShowChat] = useState<boolean>(false);

  return (
    <div className='ml-5 mb-7'>
      <ChatButton onClick={() => setShowChat(!showChat)} />
      
      {/* Animación de entrada para este div */}
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          showChat ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {showChat && <ChatContainer showChat={setShowChat} name={name} />}
      </div>
    </div>
  )
}

const MyChatElement = r2wc(App, React, ReactDOM, {
  props: {
    name: "string"
  }
});

// Define el Web Component
customElements.define('my-chat', MyChatElement);

export default App
