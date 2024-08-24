import { FaRobot } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

export const ChatButton = ({ onClick }: Props) => {
  return (
    <button className="absolute w-20 h-20 rounded-[100%] bottom-0 bg-blue-300 flex items-center justify-center" onClick={onClick}>
        <FaRobot size={50} color="#fff"/>
    </button>
  )
}