"use client"
import React, { useRef, useEffect, ChangeEvent } from 'react';

interface Props {
  content: string,
  setContent: (content: string) => void
}

export const Textarea = ({ content , setContent}: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [content]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    adjustHeight();
  };

  return (
    <textarea
      ref={textareaRef}
      className='p-2 min-h-10 w-[13rem] md:w-[19rem] text-start text-sm md:text-base rounded-lg text-slate-800 shadow-lg focus:outline-none focus:ring focus:ring-slate-500 duration-100'
      placeholder='Enter your prompt'
      value={content}
      onChange={handleChange}
      rows={1}
      style={{ resize: 'none', overflow: 'hidden' }}
    />
  );
};
