
interface Props {
  text: string;
  isUser?: boolean;
}

export const ChatBubble = ({ text, isUser = true }: Props) => {
  return (
    <div className={`${isUser ? 'bg-blue-200' : 'bg-slate-200'} rounded-lg p-4 w-3/4`}>
      {text}
    </div> 
  )
}