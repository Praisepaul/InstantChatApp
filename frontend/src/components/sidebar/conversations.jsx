import useGetConversations from "../../hooks/useGetConversations.js";
import Chat from "./chats.jsx"

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      
      { conversations.map((conversation, idx) => (
        <Chat 
        key={ conversation._id} 
        conversation = { conversation }
        lastIndex = {idx === conversations.length - 1}
        />
      ))
      }
      
      { loading ? <span className="loading loading-spinner mx-auto"></span> : null };
    </div>
  );
};

export default Conversations