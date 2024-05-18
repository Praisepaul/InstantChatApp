import Chat from "./chats.jsx"

const Conversations = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </div>
  )
}

export default Conversations