import { useState } from 'react';
import { ChatInput } from './ChatInput';
import { IoMdClose } from 'react-icons/io';
import { FaRobot } from 'react-icons/fa';
import { ChatBubble } from './ChatBubble';
// import { ChatResponse } from '../types/index';


interface Props {
  name: string;
  showChat: (close: boolean) => void;
}

export const ChatContainer = ({name, showChat}: Props) => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>(); 

  const [messages, setMessages] = useState([
    {
      text: `Hola ${name} ¿Cómo te sientes hoy?`,
      isUser: false
    }
  ]);

  const handleSend = (message: string) => {
    setMessages([...messages, { text: message, isUser: true }]);
    //@ts-ignore
    setMessages([...messages, { text: response, isUser: false }]);
    setPrompt('');
  }

  if (response)
    console.log(response)

  console.log(messages)

  return (
    <div className="flex flex-col bg-blue-300 absolute bottom-0 rounded-md p-8 shadow-sm h-96 w-3/4">
      <div className='flex items-end justify-end'>
      <button onClick={() => showChat(false)}>
        <IoMdClose color='#fff' size={30} />
        </button>
      </div>
      <div className='h-full grid'>
      <div className='overflow-y-auto flex flex-col gap-3'>
          {
            //@ts-ignore
            // response && <ChatBubble text={prompt}  />
            messages.map((message, index) => (
              message.isUser ? 
              <div className='flex flex-col items-end'>
                <ChatBubble key={index} text={message.text} isUser={true} /> 
              </div> : 
                <ChatBubble key={index + 1} text={message.text} isUser={message.isUser} />
            ))
          }
      </div>

      <ChatInput prompt={setPrompt} responseData={setResponse} handleSend={handleSend} />
      </div>
    </div>
  )
}