import MessageInput from "./MessageInput.jsx"
import Messages from "./Messages.jsx"
import {TiMessages} from 'react-icons/ti';

const MessageContainer = () => {
    const nochatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
       {nochatSelected ? <NoChatSelected /> : (
        <>
        {/* Header Part */ }
        <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="text-black font-bold">John Doe</span>
        </div>

        <Messages />
        <MessageInput />
        </>
       )} 
    </div>
  )
}

export default MessageContainer;

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center items-center sm:text-lg md:text-xl text-white font-semibold flex flex-col gap-2">
                <p> Welcome 👏 Praise Paul</p>
                <p>Select a chat to start conversation</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};
