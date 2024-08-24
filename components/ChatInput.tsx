import { IoSend } from "react-icons/io5";
import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import { sendMessage } from '../services/index';
import { RiLoader5Line } from "react-icons/ri";

interface Props {
  prompt: (inputValue: string) => void;
  responseData: (response: string) => void;
  handleSend: (response: string) => void;
}

export const ChatInput = ({ prompt, responseData, handleSend }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [sessionId, setSessionId] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    prompt(e.target.value);
  };

  useEffect(() => {
    const ssid: string = uuid();
    setSessionId(ssid);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    prompt(inputValue);
    setIsLoading(true);
    const chatRes = await sendMessage(inputValue, sessionId!);
    
    try {
      responseData(chatRes);
      setInputValue('');
      handleSend(inputValue);
    } catch (error) {
      throw new Error('Error enviando mensaje');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
      <textarea 
        className="w-full rounded"
        value={inputValue} 
        onChange={handleChange} 
        rows={1}
        placeholder="Escribe tu mensaje..."
      />
      <button type="submit" className="">
        {
          isLoading
            ? (<RiLoader5Line className="animate-spin" color="#fff" size={20} />)
            : (<IoSend color="#fff" size={20}/>)
        }
        
      </button>
    </form>
  );
};
