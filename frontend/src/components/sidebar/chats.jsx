import useConversation from "../../zustand/useConversation";

const Chat = ({ conversation, lastIndex }) => {

  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
  <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
    ${isSelected ? "bg-sky-500" : ""}`
    } onClick={() => setSelectedConversation(conversation)}>
    <div className="avatar online">
        <div className="w-12 rounded-full">
            <img src={ conversation.profilePic } alt="profile-img avatar" />
        </div>
    </div>

    <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
            <p className="font-bold text-black">{ conversation.fullName }</p>
        </div>
    </div>
    </div>

  { !lastIndex && <div className="divider my-0 py-0 h-0.5 bg-white" /> }
  </>
  );
};

export default Chat;